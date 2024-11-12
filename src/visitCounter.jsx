import { useEffect } from "react";

const VisitorCounter = () => {
  useEffect(() => {
    // Log page view to Google Analytics
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
      console.log("Page view tracked with Google Analytics");
    } else {
      console.warn("Google Analytics is not initialized");
    }
  }, []);

  return null; // No visible UI for this component
};

export default VisitorCounter;
