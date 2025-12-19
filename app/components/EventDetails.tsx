"use client";

import { useEffect, useRef } from "react";

export default function EventDetails() {
  const revealRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="py-20 px-6">
      <div
        ref={revealRef}
        className="reveal max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
      >
        <div className="text-center p-8 bg-emerald-900 text-white rounded-lg shadow-lg">
          <h4 className="font-display mb-4 text-xl">
            When
          </h4>
          <p className="text-2xl font-semibold mb-1">Saturday</p>
          <p className="text-4xl font-display  mb-2">JAN 10</p>
          <p className="text-lg">2026</p>
          <div className="h-px bg-[var(--color-gold)]/30 my-4"></div>
          <p className="text-sm tracking-wider font-semibold">
            NIKAH: 10:00 AM
          </p>
          <p className="text-sm tracking-wider font-semibold">
            WALIMA: 11:00 AM
          </p>
        </div>

        <div className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h4 className="font-display text-emerald-800 mb-4 text-xl">
            Where
          </h4>
          <p className="text-xl font-bold mb-2 text-emerald-900">
            Thoufeeque Manzil
          </p>
          <p className="text-gray-600 mb-6">
            Mele Kundathoor (H),<br />
            Velliparamba, Near Medical College, Calicut
          </p>
          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/Ug637VtssAmAasNVA?g_st=ic")
            }
            className="btn-gold px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-widest inline-block"
          >
            View Location
          </button>
        </div>

<div className="text-center p-8 bg-emerald-900 text-white rounded-lg shadow-lg">
  <h4 className="font-display  mb-4 text-xl">
    Best Wishes
  </h4>

  <p className="text-lg italic mb-4">
    "With love, prayers, and heartfelt duas"
  </p>

  <p className="text-sm text-gray-300 leading-relaxed">
    We warmly invite our beloved relatives, family, and friends to shower the
    couple with your blessings, sincere prayers, and kind wishes as they begin
    this beautiful journey together.
  </p>


</div>

      </div>
    </section>
  );
}
