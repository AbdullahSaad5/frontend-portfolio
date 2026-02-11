"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Cursor glow */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
          left: springX,
          top: springY,
        }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(249,115,22,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating shapes */}
      <div
        className="absolute rounded-full pointer-events-none animate-[float_8s_ease-in-out_infinite] w-[500px] h-[500px] top-[10%] -right-[10%]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none animate-[float_10s_ease-in-out_infinite_1s] w-[350px] h-[350px] bottom-[20%] -left-[5%]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06), transparent 70%)",
        }}
      />
    </>
  );
}
