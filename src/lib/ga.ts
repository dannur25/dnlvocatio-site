// Minimal GA4 wrapper. Safe no-op if gtag isn't loaded.

declare global {
  interface Window {
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}

const hasGtag = () => typeof window !== "undefined" && typeof window.gtag === "function";

export const gtag = (...args: [string, ...unknown[]]) => {
  if (hasGtag()) {
    window.gtag!(...args);
  }
};

export const pageview = (path: string) => {
  if (hasGtag()) {
    window.gtag!("config", "G-QTLPC7Z0BL", { page_path: path });
  }
};

export const event = (action: string, params: Record<string, unknown>) => {
  if (hasGtag()) {
    window.gtag!("event", action, params);
  }
};

export default { gtag, pageview, event };
