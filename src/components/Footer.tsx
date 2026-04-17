import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Johor Bahru 最顶级斯诺克俱乐部。专业球台、舒适环境、专业教练，为每一位球友提供完美一杆。
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-widest text-primary">
              快速链接
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/booking" className="hover:text-primary">球台预订</Link></li>
              <li><Link to="/membership" className="hover:text-primary">会员方案</Link></li>
              <li><Link to="/events" className="hover:text-primary">赛事活动</Link></li>
              <li><Link to="/about" className="hover:text-primary">教练团队</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-widest text-primary">
              联系我们
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Jalan Tebrau, 80300 Johor Bahru, Malaysia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+60 7-147 1470</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-widest text-primary">
              营业时间
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>周一至周日</li>
              <li className="text-foreground">12:00 — 02:00</li>
              <li className="pt-2">会员专享通宵服务</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-full border border-border p-2 text-muted-foreground transition-smooth hover:border-primary hover:text-primary">
                <Facebook className="size-4" />
              </a>
              <a href="#" className="rounded-full border border-border p-2 text-muted-foreground transition-smooth hover:border-primary hover:text-primary">
                <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} 147 Snooker Club. All rights reserved.</p>
          <p>Crafted with precision · 完美一杆，147</p>
        </div>
      </div>
    </footer>
  );
}
