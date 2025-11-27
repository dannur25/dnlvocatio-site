import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "@/lib/ga";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Report SPA pageview to Google Analytics
    try {
      pageview(pathname);
    } catch (e) {
      // swallow errors in analytics
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
