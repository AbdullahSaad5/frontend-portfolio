"use client";

import { useState, useEffect } from "react";

export function CursorEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      {/* Cursor glow */}
      <div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          transition: "left 0.15s ease-out, top 0.15s ease-out",
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
