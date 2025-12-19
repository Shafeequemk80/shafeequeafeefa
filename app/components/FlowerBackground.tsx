"use client";

import { useEffect, useRef } from "react";

const colors = ["#D4AF37", "#064E3B", "#FFFDF5", "#FDE68A"];

const flowerPaths = [
  "M12,2L14.5,9H21L15.7,13.2L17.5,20L12,15.8L6.5,20L8.3,13.2L3,9H9.5L12,2Z", // Star-flower
  "M12,12C12,12 12,2 12,2C12,2 15,5 15,8C15,11 12,12 12,12M12,12C12,12 22,12 22,12C22,12 19,15 16,15C13,15 12,12 12,12M12,12C12,12 12,22 12,22C12,22 9,19 9,16C9,13 12,12 12,12M12,12C12,12 2,12 2,12C2,12 5,9 8,9C11,9 12,12 12,12Z", // Petal-flower
];

export default function FlowerBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a flower element
    const createFlower = () => {
      const flower = document.createElement("div");
      flower.className = "flower fixed pointer-events-none z-50 opacity-60";

      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const path = flowerPaths[Math.floor(Math.random() * flowerPaths.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      flower.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
          <path d="${path}"/>
        </svg>
      `;

      flower.style.left = `${left}vw`;
      flower.style.bottom = `-50px`;
      flower.style.animation = `float ${duration}s linear ${delay}s infinite`;

      container.appendChild(flower);

      // Cleanup individual flower
      setTimeout(() => {
        flower.remove();
      }, (duration + delay) * 1000);
    };

    // Initial background flowers
    for (let i = 0; i < 20; i++) {
        createFlower();
    }

    // Interval for new flowers
    const intervalId = setInterval(createFlower, 2000);

    return () => {
      clearInterval(intervalId);
      if (container) {
          container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} id="flower-container" />;
}
