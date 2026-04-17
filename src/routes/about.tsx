import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "关于我们 — 147 Snooker Club" },
      { name: "description", content: "147 Snooker Club —— Johor Bahru 顶级斯诺克俱乐部介绍、设施、教练团队。" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <Construction className="mb-6 size-16 text-primary" />
        <h1 className="font-display text-4xl font-bold text-gradient-neon">关于我们</h1>
        <p className="mt-3 text-muted-foreground">即将推出：俱乐部介绍 · 设施 · 教练团队</p>
      </main>
      <Footer />
    </div>
  ),
});
