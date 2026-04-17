import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Ready for the perfect cue?
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          <span className="text-gradient-neon animate-neon-pulse">147</span> 等你
          <br />
          来打出
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          每一次出杆，都是对完美的追求。
          <br />
          加入我们，一起追逐那满分的 147。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <Link to="/booking">
              立即预订球台 <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="xl">
            <Link to="/register">注册账号</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
