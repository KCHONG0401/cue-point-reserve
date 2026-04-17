import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/booking", label: "球台预订" },
  { to: "/membership", label: "会员中心" },
  { to: "/events", label: "赛事" },
  { to: "/about", label: "关于我们" },
  { to: "/contact", label: "联系我们" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">
              <User className="mr-1" /> 登录
            </Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/booking">立即预订</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="菜单"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-primary"
                activeProps={{ className: "text-primary bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border/60 pt-3">
              <Button asChild variant="outline" size="sm" onClick={() => setOpen(false)}>
                <Link to="/login">登录</Link>
              </Button>
              <Button asChild variant="hero" size="sm" onClick={() => setOpen(false)}>
                <Link to="/booking">立即预订</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
