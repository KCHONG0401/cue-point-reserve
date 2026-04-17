import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "联系我们 — 147 Snooker Club" },
      { name: "description", content: "联系 147 Snooker Club，地址、电话、地图。" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <Construction className="mb-6 size-16 text-primary" />
        <h1 className="font-display text-4xl font-bold text-gradient-neon">联系我们</h1>
        <p className="mt-3 text-muted-foreground">即将推出：联系表单 · 地图嵌入</p>
      </main>
      <Footer />
    </div>
  ),
});
