import { patterns } from "./patterns";

export const isValidEmail = (email: string): boolean =>
  patterns.email.test(email);

export const isValidPhone = (phone: string): boolean =>
  patterns.phone.test(phone);

export const isStrongPassword = (password: string): boolean =>
  patterns.password.test(password);
