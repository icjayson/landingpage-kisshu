"use client";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Tải script gtag.js
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-N4KVNMNZBW";
    script.async = true;
    document.head.appendChild(script);

    // Thêm đoạn cấu hình GA4
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N4KVNMNZBW');
    `;
    document.head.appendChild(inlineScript);

    // Cleanup khi unmount
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null;
} 