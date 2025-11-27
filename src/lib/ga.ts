// Minimal GA4 wrapper. Safe no-op if gtag isn't loaded.
const hasGtag = () => typeof window !== "undefined" && typeof (window as any).gtag === "function";

export const gtag = (...args: any[]) => {
  if (hasGtag()) {
    (window as any).gtag(...args);
  }
};

export const pageview = (path: string) => {
  if (hasGtag()) {
    // Sends a page_view with the current path so GA records SPA navigations
    (window as any).gtag("config", "G-QTLPC7Z0BL", { page_path: path });
  }
};

export const event = (action: string, params: Record<string, any>) => {
  if (hasGtag()) {
    (window as any).gtag("event", action, params);
  }
};

export default { gtag, pageview, event };
