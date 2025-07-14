"use client";

import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

export default function CursorWrapper() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768); // show only on desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showCursor) return null;

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      color="255, 90, 0"
      outerAlpha={0.3}
      innerScale={0.8}
      outerScale={2.8}
      showSystemCursor={false}
      outerStyle={{
        mixBlendMode: "exclusion",
        backgroundColor: "rgba(255, 90, 0, 0.3)",
      }}
      innerStyle={{
        backgroundColor: "rgb(255, 90, 0)",
        border: "2px solid white",
      }}
      clickables={[
        "a",
        "input",
        "textarea",
        "button",
        "select",
        ".link",
        '[role="button"]',
        '[data-cursor="true"]',
      ]}
    />
  );
}
