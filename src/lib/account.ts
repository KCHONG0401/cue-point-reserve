/**
 * 账号 ID ↔ 内部邮箱 映射工具
 * 网站对外只展示账号 ID（如 admin147），认证层走虚拟邮箱 {id}@147snooker.local
 */
export const ACCOUNT_DOMAIN = "147snooker.local";

/** 账号 ID 校验规则：4-20 位字母/数字/下划线，必须以字母开头 */
export const ACCOUNT_ID_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;

export function accountIdToEmail(accountId: string): string {
  return `${accountId.toLowerCase().trim()}@${ACCOUNT_DOMAIN}`;
}

export function emailToAccountId(email: string): string {
  return email.split("@")[0] ?? "";
}
