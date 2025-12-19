"use client";

import { useEffect, useRef, useState } from "react";

export default function RSVPForm() {
    const revealRef = useRef<HTMLDivElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);


    const handleRSVP = () => {
        setIsSubmitted(true);
        // Celebration effect logic copied from original HTML but adapted for React context if needed
        // Since FlowerBackground is separate, we might need a global event or just simple local flowers for this button click.
        // For simplicity, we can trigger a few flowers here by manipulating DOM or leave it to state if we lifted state up.
        // Given the original code simply appended to a container, let's try to just find that container:
        const flowerContainer = document.getElementById('flower-container');
        if (flowerContainer) {
             const colors = ['#D4AF37', '#064E3B', '#FFFDF5', '#FDE68A'];
             const flowerPaths = [
                "M12,2L14.5,9H21L15.7,13.2L17.5,20L12,15.8L6.5,20L8.3,13.2L3,9H9.5L12,2Z",
                "M12,12C12,12 12,2 12,2C12,2 15,5 15,8C15,11 12,12 12,12M12,12C12,12 22,12 22,12C22,12 19,15 16,15C13,15 12,12 12,12M12,12C12,12 12,22 12,22C12,22 9,19 9,16C9,13 12,12 12,12M12,12C12,12 2,12 2,12C2,12 5,9 8,9C11,9 12,12 12,12Z"
            ];

             for (let i = 0; i < 50; i++) {
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

                flowerContainer.appendChild(flower);
                setTimeout(() => flower.remove(), (duration + delay) * 1000);
             }
        }
    }

  return (
    <section className="py-20 px-6 bg-emerald-50">
      <div
        ref={revealRef}
        className="reveal max-w-xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl text-emerald-900 mb-4">
          Greeting Us
        </h2>
        <p className="text-gray-600 mb-10">
          Please let us know if you can attend by September 15th, 2025.
        </p>

        {!isSubmitted ? (
        <form className="text-left bg-white p-8 rounded-xl shadow-lg border border-[var(--color-gold)]/20">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-emerald-800 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-emerald-100 rounded focus:outline-none focus:border-[var(--color-gold)] bg-emerald-50/30 text-emerald-900"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-emerald-800 mb-2">
              Number of Guests
            </label>
            <select className="w-full p-3 border border-emerald-100 rounded focus:outline-none focus:border-[var(--color-gold)] bg-emerald-50/30 text-emerald-900">
              <option>1 Person</option>
              <option>2 People</option>
              <option>Family (Up to 5)</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-emerald-800 mb-2">
              Will you attend?
            </label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer text-emerald-700">
                <input
                  type="radio"
                  name="attending"
                  className="text-emerald-600 accent-emerald-600"
                />{" "}
                <span>Accepts with Pleasure</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-emerald-700">
                <input
                  type="radio"
                  name="attending"
                  className="text-emerald-600 accent-emerald-600"
                />{" "}
                <span>Declines with Regret</span>
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRSVP}
            className="w-full bg-emerald-900 text-[var(--color-gold)] py-4 font-display text-lg tracking-widest hover:bg-emerald-800 transition rounded cursor-pointer"
          >
            Submit Response
          </button>
        </form>
        ) : (
        <div id="thankYou" className="mt-6 p-6 bg-emerald-100/50 text-emerald-900 rounded-lg text-lg font-semibold border border-emerald-200">
           Barakallahu lakum! Thank you for your response.
        </div>
        )}
      </div>
    </section>
  );
}
