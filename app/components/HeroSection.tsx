"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
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
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
            <div ref={revealRef} className="reveal">
                <p className="font-arabic text-3xl md:text-4xl mb-4 text-emerald-800">
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </p>
                <p className="uppercase tracking-widest text-sm mb-8 text-[#D4AF37]/80 font-bold">
                    In the name of Allah, the Most Gracious, the Most Merciful
                </p>

                <h1 className="font-script text-5xl md:text-7xl mb-4 text-emerald-900 leading-tight">
                    Shafeeque sa'adi <br />
                    <span className="text-4xl md:text-6xl">&</span> <br />
                    Afeefa Hadiya
                </h1>
                
                <div className="divider flex items-center justify-center my-8">
                    <div className="h-px bg-gold flex-grow max-w-[100px] opacity-60"></div>
                     <svg width="24" height="24" viewBox="0 0 24 24" className="mx-4 fill-[var(--color-gold)]"><path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z"/></svg>
                    <div className="h-px bg-gold flex-grow max-w-[100px] opacity-60"></div>
                </div>

                <p className="font-script text-4xl md:text-5xl text-emerald-700 mb-6">
                    Are Getting Married
                </p>
                <p className="mt-4 text-lg font-light text-emerald-800/80">
                    Join us in celebrating this blessed union
                </p>

                <div className="mt-16 animate-bounce">
                   <ArrowDown className="w-6 h-6 mx-auto text-emerald-600" />
                </div>
            </div>
        </section>
    );
}
