"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const innerSpringX = useSpring(innerX, { stiffness: 300, damping: 25 });
  const innerSpringY = useSpring(innerY, { stiffness: 300, damping: 25 });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
      innerX.set(e.clientX - 60);
      innerY.set(e.clientY - 60);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY, innerX, innerY]);

  // Floating particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Floating particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[1]"
      />

      {/* Outer cursor glow */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
          left: springX,
          top: springY,
        }}
      />

      {/* Inner tighter glow */}
      <motion.div
        className="fixed w-[120px] h-[120px] rounded-full pointer-events-none z-0 hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          left: innerSpringX,
          top: innerSpringY,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
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
