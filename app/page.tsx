"use client";
import { useEffect, useState } from "react";

const eventDate = new Date("2025-12-12T00:00:00");

function getCountdown() {
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Home() {
  const [countdown, setCountdown] = useState(getCountdown());
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/imagem.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for synthwave effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033cc] via-[#2a0055bb] to-[#000a] z-0" />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center px-4 py-8 sm:py-16">
        {/* Título neon */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-6 tracking-wide">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 drop-shadow-[0_0_16px_rgba(128,0,255,0.8)]">
            BAILE DO
          </span>
          <span className="block text-red-500 text-6xl sm:text-8xl mt-2 drop-shadow-[0_0_24px_rgba(255,0,80,0.8)]">
            R.V.
          </span>
        </h1>

        {/* Contagem regressiva */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-lg sm:text-2xl font-mono text-white/90 mb-2 tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            A festa começa em:
          </span>
          <div className="flex gap-4 text-2xl sm:text-4xl font-bold text-neon-pink">
            <span className="countdown-box">{countdown.days}d</span>
            <span className="countdown-box">{countdown.hours}h</span>
            <span className="countdown-box">{countdown.minutes}m</span>
            <span className="countdown-box">{countdown.seconds}s</span>
          </div>
        </div>

        {/* Regras neon */}
        <div className="bg-black/40 rounded-xl p-6 backdrop-blur-md border border-pink-500/30 shadow-lg mb-8 w-full max-w-lg">
          <ul className="space-y-3 text-center text-base sm:text-lg font-semibold">
            <li className="text-neon-blue drop-shadow-[0_0_8px_rgba(80,0,255,0.7)]">LOCAL SECRETO</li>
            <li className="text-neon-pink drop-shadow-[0_0_8px_rgba(255,0,180,0.7)]">APENAS 40 CONVIDADOS</li>
            <li className="text-neon-yellow drop-shadow-[0_0_8px_rgba(255,255,80,0.7)]">CELULARES PROIBIDOS</li>
            <li className="text-neon-green drop-shadow-[0_0_8px_rgba(0,255,128,0.7)]">CONVIDADO NÃO CONVIDA</li>
          </ul>
        </div>

        {/* Silhueta fictícia (opcional: pode ser SVG ou imagem extra) */}
        {/* <img src="/silhueta.png" alt="Silhueta" className="w-48 mb-8" /> */}
      </div>

      {/* Selo VIP neon */}
      <div className="absolute left-4 bottom-4 z-20">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-pink-500/80 border-4 border-pink-400 shadow-[0_0_32px_#ff00cc] animate-pulse">
          <span className="flex flex-col items-center justify-center text-white font-bold text-xs sm:text-base tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] h-full w-full text-center leading-tight">
            <span className="block">VIP</span>
            <span className="block">INVITE</span>
            <span className="block">ONLY</span>
          </span>
        </div>
      </div>

      {/* Responsividade extra para mobile */}
      <style jsx>{`
        .countdown-box {
          background: linear-gradient(90deg, #ff00cc 0%, #3333ff 100%);
          color: #fff;
          padding: 0.5em 1em;
          border-radius: 0.5em;
          box-shadow: 0 0 12px #ff00cc88;
        }
        .text-neon-blue {
          color: #7f7fff;
          text-shadow: 0 0 8px #7f7fff88;
        }
        .text-neon-pink {
          color: #ff00cc;
          text-shadow: 0 0 8px #ff00cc88;
        }
        .text-neon-yellow {
          color: #ffff80;
          text-shadow: 0 0 8px #ffff8088;
        }
        .text-neon-green {
          color: #00ff80;
          text-shadow: 0 0 8px #00ff8088;
        }
      `}</style>
    </div>
  );
}
