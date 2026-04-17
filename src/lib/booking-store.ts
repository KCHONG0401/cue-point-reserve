/**
 * 简易内存 + sessionStorage 预订存储。
 * 接入 Lovable Cloud 后会替换为数据库 + Edge Function。
 */
import type { BookingDraft } from "./snooker-tables";

const KEY = "snooker_booking_drafts";

function read(): Record<string, BookingDraft> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function write(data: Record<string, BookingDraft>) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function saveBooking(b: BookingDraft) {
  const all = read();
  all[b.bookingId] = b;
  write(all);
}

export function getBooking(id: string): BookingDraft | null {
  return read()[id] ?? null;
}
