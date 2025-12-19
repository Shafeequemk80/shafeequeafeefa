"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export default function Youtube() {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs text-[#D4AF37] font-semibold mb-2">
            Our Message
          </p>
          <h2 className="font-display text-4xl text-[#064E3B] mb-4">
            A Special Wedding Message
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            A short video filled with love, duas, and gratitude
          </p>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/20 overflow-hidden">
          <div className="relative aspect-video bg-black">
            {!play ? (
              <button
                onClick={() => setPlay(true)}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#064E3B] to-[#043327]"
              >
                <span className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-xl hover:scale-105 transition">
                  <Play className="text-[#064E3B] ml-1" size={36} />
                </span>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/h6jQwwV_PM8"
                title="Wedding Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Meta */}
          <div className="p-6">
            <h3 className="font-semibold text-[#064E3B] text-lg">
              Our Wedding Invitation & Message
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Shafeeque Sa'adi & Afeefa • Wedding Message
            </p>
          </div>
        </div>

        {/* Verse */}
        <p className="text-center text-xs text-gray-400 mt-6 italic">
          “And among His signs is that He created for you spouses that you may
          find tranquility in them.” — Qur’an 30:21
        </p>
      </div>
    </section>
  );
}
