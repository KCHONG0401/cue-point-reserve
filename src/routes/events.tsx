import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "赛事 — 147 Snooker Club" },
      { name: "description", content: "147 Snooker Club 即将举办的业余赛、联赛信息。" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <Construction className="mb-6 size-16 text-primary" />
        <h1 className="font-display text-4xl font-bold text-gradient-neon">赛事活动</h1>
        <p className="mt-3 text-muted-foreground">即将推出：月度联赛 · 业余赛 · 大师挑战</p>
      </main>
      <Footer />
    </div>
  ),
});
