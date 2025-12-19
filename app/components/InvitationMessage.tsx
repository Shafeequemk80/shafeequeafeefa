"use client";

import { useEffect, useRef } from "react";

export default function InvitationMessage() {
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
    <section className="py-20 px-6 bg-white/50">
      <div
        ref={revealRef}
        className="reveal max-w-3xl mx-auto text-center"
      >
        <div className="gold-frame p-10 bg-white shadow-xl">
          <p className="mb-6 italic text-lg text-emerald-800">
            "And among His signs is that He created for you mates from among
            yourselves, that you may dwell in tranquility with them; and He put
            love and mercy between your hearts..."
          </p>
          <p className="font-semibold text-emerald-900 mb-8">
            (Surah Ar-Rum, 30:21)
          </p>

          <p className="text-lg leading-relaxed mb-6 text-emerald-900/90">
            With joyous hearts and seeking the blessings of Allah (SWT), we
            cordially invite you and your family to witness and celebrate the
            Nikah and Walima ceremony of our beloved children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border-t border-b border-emerald-100 py-6">
              <h3 className="font-script text-xl text-[var(--color-gold)] mb-2 font-bold">
                The Groom
              </h3>
              <p className="text-2xl font-semibold text-emerald-900">
                Muhammad Shafeeque Sa'adi
              </p>
              <p className="text-sm text-gray-500 uppercase mt-2">
                Son of Mr. & Mrs. Sidheeque
              </p>
            </div>
            <div className="border-t border-b border-emerald-100 py-6">
              <h3 className="font-display text-xl text-[var(--color-gold)] mb-2 font-bold">
                The Bride
              </h3>
              <p className="text-2xl font-semibold text-emerald-900">
                Afeefa Fathima Hadiya
              </p>
              <p className="text-sm text-gray-500 uppercase mt-2">
                Daughter of Mr. & Mrs. Ahmed Kutty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
