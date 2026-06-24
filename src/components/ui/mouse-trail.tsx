"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseTrail() {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(touchDevice);
    }, 0);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted || isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Glow */}
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          x: trailX,
          y: trailY,
          left: -128,
          top: -128,
        }}
      />
      {/* Sharp Center Light */}
      <motion.div
        className="absolute h-4 w-4 rounded-full bg-primary/40 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          x: mouseX,
          y: mouseY,
          left: -8,
          top: -8,
        }}
      />
    </div>
  );
}
