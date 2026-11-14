import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const SPRITE_KEYS = [
  "n00", "n01", "n02", "n03", "n04",
  "n10", "n11", "n12", "n13", "n14",
  "n20", "n21", "n22", "n23", "n24",
  "h10", "h12", "h14",
  "c10", "c12", "c14",
  "half", "blink"
] as const;

const GAZE_MAP = [
  ["up-left", "up-left", "up", "up-right", "up-right"],
  ["left", "left", "center", "right", "right"],
  ["down-left", "down-left", "down", "down-right", "down-right"],
];

const MOOD_MAP: Record<string, string> = {
  n: "neutral",
  h: "happy",
  c: "curious",
};

const EXP_COL_MAP = [0, 0, 2, 4, 4];

interface AvatarStageProps {
  experienceYears?: string;
  experienceLabel?: string;
}

export const AvatarStage: React.FC<AvatarStageProps> = ({
  experienceYears = "3+ years",
  experienceLabel = "in IT",
}) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const rigRef = useRef<HTMLDivElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<Record<string, HTMLImageElement | null>>({});

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const images = imageRefs.current;
    let curSprite: string = "n12";
    let col = 2;
    let row = 1;
    let hovUntil = 0;
    let boost = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let gx = window.innerWidth / 2;
    let gy = window.innerHeight / 2;
    let lastMove = performance.now();
    let lx = 0;
    let ly = 0;
    let frame = 0;
    let isBlinking = false;
    let animId: number;
    let blinkTimeoutId: number;
    let idleIntervalId: number;

    const show = (k: string) => {
      if (k !== curSprite) {
        if (images[curSprite]) images[curSprite]?.classList.remove("on");
        if (images[k]) images[k]?.classList.add("on");
        curSprite = k;
      }
    };

    // Initialize first sprite
    show("n12");

    const aim = (dx: number, dy: number) => {
      col = dx < -0.55 ? 0 : dx < -0.17 ? 1 : dx < 0.17 ? 2 : dx < 0.55 ? 3 : 4;
      row = dy < -0.2 ? 0 : dy < 0.28 ? 1 : 2;
    };

    const pick = () => {
      if (isBlinking) return;
      const now = performance.now();
      const moodCode = now < hovUntil ? "h" : boost > 0 ? "c" : "n";
      const nextSprite = moodCode === "n" ? `n${row}${col}` : `${moodCode}1${EXP_COL_MAP[col]}`;
      show(nextSprite);

      if (frame % 8 === 0) {
        const gazeText = GAZE_MAP[row][col];
        const moodText = MOOD_MAP[moodCode];
        if (hudRef.current) {
          hudRef.current.innerHTML = `gaze <span>${gazeText}</span><br>mood <span>${moodText}</span>`;
        }
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const stage = stageRef.current;
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      lastMove = performance.now();
      gx = e.clientX;
      gy = e.clientY;

      tx = Math.max(-1, Math.min(1, (gx - (r.left + r.width / 2)) / (window.innerWidth / 2)));
      ty = Math.max(-1, Math.min(1, (gy - (r.top + r.height * 0.36)) / (window.innerHeight / 2)));

      aim(
        (gx - r.left - r.width / 2) / (r.width / 2 + 60),
        (gy - r.top - r.height * 0.36) / (r.height / 2 + 60)
      );

      const sp = Math.hypot(gx - lx, gy - ly);
      lx = gx;
      ly = gy;

      if (sp > 90) boost = 18;

      if (e.pointerType === "mouse") {
        const target = e.target as HTMLElement | null;
        if (target && target.closest("a,button,input,textarea")) {
          hovUntil = performance.now() + 250;
        }
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      handlePointerMove(e);
      const target = e.target as HTMLElement | null;
      if (target && target.closest("#stage")) {
        hovUntil = performance.now() + 1400;
      } else {
        boost = 26;
      }
    };

    const handlePointerLeave = () => {
      tx = 0;
      ty = 0;
      aim(0, 0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerleave", handlePointerLeave);

    // Idle head animation
    idleIntervalId = window.setInterval(() => {
      if (reducedMotion || performance.now() - lastMove < 2600) return;
      const a = Math.random() * 6.28;
      const r = Math.random() * 0.9;
      aim(Math.cos(a) * r * 1.2, Math.sin(a) * r);
      tx = Math.cos(a) * r * 0.7;
      ty = Math.sin(a) * r * 0.5;
    }, 1700);

    // Natural blinking loop
    const scheduleBlink = () => {
      blinkTimeoutId = window.setTimeout(() => {
        if (!reducedMotion) {
          isBlinking = true;
          show("half");
          setTimeout(() => show("blink"), 70);
          setTimeout(() => show("half"), 170);
          setTimeout(() => {
            isBlinking = false;
          }, 240);
        }
        scheduleBlink();
      }, 2200 + Math.random() * 3400);
    };
    scheduleBlink();

    // 60FPS animation tick
    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      frame++;

      if (boost > 0) boost--;

      if (!reducedMotion && rigRef.current) {
        rigRef.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 9}deg) translate(${x * 10}px, ${y * 6}px)`;
        pick();
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerleave", handlePointerLeave);
      clearInterval(idleIntervalId);
      clearTimeout(blinkTimeoutId);
      cancelAnimationFrame(animId);
    };
  }, [reducedMotion]);

  return (
    <div className="stage" id="stage" ref={stageRef}>
      <div className="disc" />
      <div className="orbit" />
      <div className="orbit o2" />

      <div className="rig" id="rig" ref={rigRef}>
        {SPRITE_KEYS.map((key) => (
          <img
            key={key}
            ref={(el) => {
              imageRefs.current[key] = el;
            }}
            src={`/avatar/${key}.webp`}
            alt={key === "n12" ? "Portrait of Josh in a maroon shirt and silver tie" : ""}
            className={key === "n12" ? "on" : ""}
            loading="eager"
            decoding="async"
          />
        ))}
      </div>

      <div className="scan" />
      <i className="br a" />
      <i className="br b" />
      <i className="br c" />
      <i className="br d" />

      <div className="hud" id="hud" ref={hudRef}>
        gaze <span>center</span>
        <br />
        mood <span>neutral</span>
      </div>

      <div className="tag">
        <b>{experienceYears}</b>
        {experienceLabel}
      </div>
    </div>
  );
};
