"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  // Do NOT force play on load (Chrome blocks it)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
    }
  }, []);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.play().catch(() => {});
    setMuted(false);
    setStarted(true);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-theme.mp3"
        loop
        preload="auto"
        playsInline
      />

      {/* Button */}
      <button
        onClick={started ? toggleMute : startAudio}
        className="fixed top-6 right-6 z-50 bg-[#064E3B] text-[#D4AF37] px-4 py-2 rounded-full shadow-lg text-xs tracking-widest"
      >
        {!started ? "🔊 Enable Music" : muted ? "🔊 Enable" : "🔇 Mute"}
      </button>
    </>
  );
}
