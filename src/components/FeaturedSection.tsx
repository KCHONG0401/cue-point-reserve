import { Link } from "@tanstack/react-router";
import { Check, Clock, Crown, Trophy, Users } from "lucide-react";
import { Button } from "./ui/button";

const tables = [
  { id: 1, name: "VIP 包厢 1 号台", type: "VIP", available: true, price: 80 },
  { id: 2, name: "专业 2 号台", type: "Pro", available: true, price: 50 },
  { id: 3, name: "专业 3 号台", type: "Pro", available: false, price: 50 },
  { id: 4, name: "标准 4 号台", type: "Standard", available: true, price: 35 },
];

export function FeaturedSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* 今日球台 */}
        <div className="mb-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Today · 实时状态
              </p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                今日<span className="text-gradient-neon">可用球台</span>
              </h2>
            </div>
            <Button asChild variant="neon" size="sm" className="hidden sm:inline-flex">
              <Link to="/booking">查看全部 →</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tables.map((t) => (
              <div
                key={t.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-gradient-card p-5 transition-smooth hover:border-primary/60 hover:shadow-neon-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${
                    t.type === "VIP"
                      ? "bg-gold/20 text-gold"
                      : t.type === "Pro"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {t.type}
                  </span>
                  <span className={`flex items-center gap-1.5 text-xs ${t.available ? "text-primary" : "text-muted-foreground"}`}>
                    <span className={`h-2 w-2 rounded-full ${t.available ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                    {t.available ? "可预订" : "占用中"}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold">{t.name}</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-foreground">RM {t.price}</span>
                    <span className="ml-1 text-xs text-muted-foreground">/小时</span>
                  </div>
                  <Clock className="size-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 会员福利 */}
        <div>
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Member Benefits
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              成为<span className="text-gradient-gold">147 会员</span>
            </h2>
            <p className="mt-3 text-muted-foreground">尊享专属特权，体验真正的高端</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Crown,
                title: "优先预订",
                desc: "提前 7 天预订专业球台、VIP 包厢，热门时段优先保障",
                highlight: "8 折球台费用",
              },
              {
                icon: Trophy,
                title: "赛事特权",
                desc: "免费参加月度俱乐部联赛，专业教练 1V1 指导课程",
                highlight: "免费教练课 / 月",
              },
              {
                icon: Users,
                title: "积分回馈",
                desc: "消费即积分，可兑换球台时长、品牌球杆周边、限定礼品",
                highlight: "1:1 积分兑换",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 transition-smooth hover:border-primary/60 hover:shadow-neon-sm"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary transition-smooth group-hover:shadow-neon-sm">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Check className="size-4" />
                  {f.highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/membership">查看会员方案</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
