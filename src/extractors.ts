import { patterns } from "./patterns";

export const extractEmails = (text: string): string[] => {
  const matches = text.match(patterns.email);
  return matches ? matches : [];
};

export const extractUrls = (text: string): string[] => {
  const matches = text.match(patterns.url);
  return matches ? matches : [];
};
