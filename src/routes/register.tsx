import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Eye, EyeOff, Loader2, Mail, Lock, User as UserIcon, Phone } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, { message: "请输入姓名" }).max(50),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,20}$/, { message: "请输入有效手机号" }),
  email: z.string().trim().email({ message: "请输入有效邮箱" }).max(255),
  password: z.string().min(6, { message: "密码至少 6 位" }).max(72),
});

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "注册 — 147 Snooker Club" },
      { name: "description", content: "免费注册 147 Snooker Club 会员，开启专业斯诺克体验。" },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      password: form.get("password"),
    });
    if (!result.success) {
      const fe: Record<string, string> = {};
      for (const issue of result.error.issues) fe[issue.path[0] as string] = issue.message;
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email: result.data.email,
      password: result.data.password,
      options: {
        emailRedirectTo: redirectUrl,
        data: { name: result.data.name, phone: result.data.phone },
      },
    });
    setLoading(false);
    if (error) {
      const msg = error.message.includes("already registered")
        ? "邮箱已被注册，请直接登录"
        : error.message;
      toast.error(msg);
      return;
    }
    toast.success("注册成功！欢迎加入 147 Snooker Club");
    navigate({ to: "/" });
  }

  return (
    <AuthShell
      title="加入 147"
      subtitle="创建账号，享受会员专属特权"
      footer={
        <>
          已有账号？{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            立即登录
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">姓名</Label>
          <div className="relative">
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="name" name="name" placeholder="您的姓名" className="pl-10" />
          </div>
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">手机号</Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="phone" name="phone" placeholder="+60 12-345 6789" className="pl-10" />
          </div>
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">邮箱</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="email" name="email" type="email" placeholder="you@example.com" className="pl-10" />
          </div>
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">密码</Label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type={showPwd ? "text" : "password"}
              placeholder="至少 6 位"
              className="pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPwd((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPwd ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          点击注册即表示您同意 147 Snooker Club 的{" "}
          <span className="text-primary">服务条款</span> 与{" "}
          <span className="text-primary">隐私政策</span>。
        </p>

        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
          {loading ? <><Loader2 className="animate-spin" /> 创建中...</> : "免费注册"}
        </Button>
      </form>
    </AuthShell>
  );
}
