"use client";

import { useEffect } from "react";

export default function TrackingButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".whatsapp-track");

    const handleClick = () => {
      window.gtag?.("event", "conversion", {
        send_to: "AW-17677408224/8Zy7CLmXj5ocEOCvn-1B",
        value: 1.0,
        currency: "BRL",
      });
    };

    buttons.forEach(button => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return null;
}
