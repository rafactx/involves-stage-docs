'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Animated mesh gradient */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2">
              <animate
                attributeName="stop-color"
                values="#3b82f6;#8b5cf6;#ec4899;#3b82f6"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2">
              <animate
                attributeName="stop-color"
                values="#8b5cf6;#ec4899;#3b82f6;#8b5cf6"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grad1)"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </svg>

      {/* Interactive gradient that follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          x: '-50%',
          y: '-50%',
        }}
      />

      {/* Main gradient orbs */}
      <motion.div
        className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
