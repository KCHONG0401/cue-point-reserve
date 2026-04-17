import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "球台预订 — 147 Snooker Club" },
      { name: "description", content: "在线预订 147 Snooker Club 专业斯诺克球台。" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <Construction className="mb-6 size-16 text-primary" />
        <h1 className="font-display text-4xl font-bold text-gradient-neon">球台预订系统</h1>
        <p className="mt-3 text-muted-foreground">
          下一阶段开发：日历选择 · 8 张球台实时状态 · 防重复预订 · 二维码确认
        </p>
      </main>
      <Footer />
    </div>
  );
}
