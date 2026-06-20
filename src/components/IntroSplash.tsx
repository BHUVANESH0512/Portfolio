import { useEffect } from "react";

export const IntroSplash = () => {
  useEffect(() => {
    // Disable scrolling when splash is active
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] select-none animate-splash-exit"
      style={{ pointerEvents: "none" }}
    >
      <style>{`
        @keyframes slideUpHello {
          0% {
            transform: translateY(110%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes springBang {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.35);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes drawSmileArc {
          from {
            stroke-dashoffset: 200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes popDot {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fillProgressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeOutSplash {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .animate-hello {
          animation: slideUpHello 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animate-bang {
          animation: springBang 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 1.05s;
          transform-origin: bottom center;
          opacity: 0;
        }

        .animate-smile {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawSmileArc 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 2.0s;
        }

        .animate-dot-left {
          transform-origin: 40px 20px;
          animation: popDot 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 2.8s;
          opacity: 0;
        }

        .animate-dot-right {
          transform-origin: 200px 20px;
          animation: popDot 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 2.8s;
          opacity: 0;
        }

        .animate-progress {
          animation: fillProgressBar 1.8s linear forwards;
          animation-delay: 2.0s;
        }

        .animate-splash-exit {
          animation: fadeOutSplash 0.8s ease-in-out forwards;
          animation-delay: 3.9s;
        }

        /* Mobile-first responsive scaling */
        @media (max-width: 374px) {
          .splash-text-mobile {
            font-size: 2rem;
          }
          .splash-svg-mobile {
            width: 120px;
            height: 40px;
          }
        }

        @media (min-width: 375px) and (max-width: 640px) {
          .splash-text-mobile {
            font-size: clamp(2.5rem, 12vw, 3.5rem);
          }
          .splash-svg-mobile {
            width: clamp(140px, 50vw, 180px);
            height: auto;
          }
        }

        @media (min-width: 641px) {
          .splash-text-mobile {
            font-size: 5rem;
          }
          .splash-svg-mobile {
            width: 240px;
            height: 60px;
          }
        }
      `}</style>

      <div className="flex flex-col items-center px-4">
        {/* Hello! Text Block */}
        <div className="flex items-baseline font-display splash-text-mobile font-bold tracking-tight leading-none flex-shrink-0">
          <div className="overflow-hidden h-[1.15em] flex items-end">
            <span className="animate-hello inline-block text-white">Hello</span>
          </div>
          <span className="animate-bang inline-block ml-2 text-[#7ec8b0]">!</span>
        </div>

        {/* Smile Arc and dots SVG */}
        <svg viewBox="0 0 240 60" className="splash-svg-mobile mt-4 overflow-visible">
          {/* Smile Path */}
          <path
            d="M 40 20 Q 120 55 200 20"
            fill="none"
            stroke="#7ec8b0"
            strokeWidth="6"
            strokeLinecap="round"
            className="animate-smile"
          />
          {/* Left Dot */}
          <circle
            cx="40"
            cy="20"
            r="6"
            fill="#7ec8b0"
            className="animate-dot-left"
          />
          {/* Right Dot */}
          <circle
            cx="200"
            cy="20"
            r="6"
            fill="#7ec8b0"
            className="animate-dot-right"
          />
        </svg>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1a1a1a]">
        <div className="h-full bg-[#7ec8b0] w-0 animate-progress" />
      </div>
    </div>
  );
};
