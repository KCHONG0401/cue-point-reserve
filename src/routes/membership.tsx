import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "会员中心 — 147 Snooker Club" },
      { name: "description", content: "147 Snooker Club 会员方案与个人中心。" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <Construction className="mb-6 size-16 text-primary" />
        <h1 className="font-display text-4xl font-bold text-gradient-gold">会员中心</h1>
        <p className="mt-3 text-muted-foreground">下一阶段开发：会员等级、积分、优惠券、个人资料</p>
      </main>
      <Footer />
    </div>
  ),
});
