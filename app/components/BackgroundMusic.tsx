"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setMuted(audioRef.current.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-theme.mp3"
        autoPlay
        loop
        muted
      />

      <button
        onClick={toggleMute}
        className="fixed top-6 right-6 bg-[#064E3B] text-[#D4AF37] px-4 py-2 rounded-full shadow-lg text-sm"
      >
        {muted ? "🔊 Enable" : "🔇 Mute "}
      </button>
    </>
  );
}
