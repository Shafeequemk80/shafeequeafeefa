"use client";

import { useEffect, useState, useRef, FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";

type Greeting = {
  name: string;
  message: string;
  createdAt: string;
};

export default function GreetingsWall() {
  const [greetings, setGreetings] = useState<Greeting[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* Initial fetch & scroll reveal */
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll Reveal Logic
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

    // Fetch data
    fetch("/api/greetings")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setGreetings(data);
      })
      .catch(console.error);
      
    return () => observer.disconnect();
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setLoading(true);

    try {
      const res = await fetch("/api/greetings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        const saved = await res.json();
        setGreetings((prev) => [saved, ...prev]);
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to submit greeting", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={revealRef} className="py-24 max-w-5xl mx-auto px-6 reveal">
      <div className="text-center mb-16">
        <MessageCircle className="mx-auto text-[#D4AF37] mb-4" size={40} />
        <h2 className="font-display text-4xl text-[#064E3B] mb-2">
          Blessings & Greetings
        </h2>
        <p className="text-gray-600">
          Leave a prayer or a message for the couple
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={submit}
            className="bg-white p-8 rounded-2xl shadow-2xl border border-[#D4AF37]/20"
          >
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-[#064E3B] uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-full bg-[#FFFDF5] border border-emerald-600/60 p-4  rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-[#064E3B] uppercase tracking-widest mb-2">
                Blessing Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your heartfelt wishes..."
                className="w-full bg-[#FFFDF5] border border-emerald-600/60 p-4 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm resize-none"
              ></textarea>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-[#064E3B] text-[#D4AF37] py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#043327] transition shadow-lg font-bold tracking-widest text-xs disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND BLESSING"} <Send size={14} />
            </button>
          </form>
        </div>

    {/* List */}
<div className="lg:col-span-3 space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar overscroll-y-contain scroll-smooth">
  {greetings.map((g, idx) => (
    <div
      key={idx}
      className="bg-white p-6 rounded-2xl border-l-4 border-[#D4AF37] shadow-sm animate-fade-in"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-[#064E3B]">{g.name}</h4>
        <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
          {new Date(g.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="text-sm text-gray-700 italic leading-relaxed">
        "{g.message}"
      </p>
    </div>
  ))}

  {greetings.length === 0 && (
    <p className="text-center text-gray-500 italic">
      No greetings yet. Be the first to wish them well!
    </p>
  )}
</div>

      </div>
    </section>
  );
}
