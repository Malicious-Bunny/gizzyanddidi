"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented, show play button or wait for interaction
          setShowPlayButton(true);

          // Also try to play on first user interaction
          const playOnInteraction = () => {
            audio.play().then(() => {
              setIsPlaying(true);
              setShowPlayButton(false);
            }).catch(() => {});

            // Remove listeners after first interaction
            document.removeEventListener("click", playOnInteraction);
            document.removeEventListener("touchstart", playOnInteraction);
            document.removeEventListener("keydown", playOnInteraction);
          };

          document.addEventListener("click", playOnInteraction);
          document.addEventListener("touchstart", playOnInteraction);
          document.addEventListener("keydown", playOnInteraction);

          return () => {
            document.removeEventListener("click", playOnInteraction);
            document.removeEventListener("touchstart", playOnInteraction);
            document.removeEventListener("keydown", playOnInteraction);
          };
        });
    }
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/iloveyou.mp3"
        loop
        preload="auto"
      />

      {/* Floating play button if autoplay is blocked */}
      {showPlayButton && !isPlaying && (
        <button
          onClick={handlePlay}
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
          aria-label="Play music"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M9 6.882l9 5.118-9 5.118V6.882z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.25 3.818v11.864l8.25-5.932-8.25-5.932z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </>
  );
}