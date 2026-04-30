import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CrossMarquee = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const top = gsap.to(topRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });

    const bottom = gsap.to(bottomRef.current, {
      xPercent: 50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        const dir = self.direction;

        // opposite directions
        top.timeScale(dir === 1 ? 1 : -1);
        bottom.timeScale(dir === 1 ? -1 : 1);
      },
    });
  }, []);

  return (
    <div className="relative h-50 overflow-hidden bg-gray-100 flex items-center justify-center">
      {/* Top Line */}
      <div className="absolute rotate-10">
        <div
          ref={topRef}
          className="flex gap-10 whitespace-nowrap text-2xl border border-black px-6 py-2 bg-white"
        >
          <span>Something Something</span>
          <span>Something Something</span>
          <span>Something Something</span>
          <span>Something Something</span>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute rotate-[-10deg]">
        <div
          ref={bottomRef}
          className="flex gap-10 whitespace-nowrap text-2xl border border-black px-6 py-2 bg-white"
        >
          <span>Something Something</span>
          <span>Something Something</span>
          <span>Something Something</span>
          <span>Something Something</span>
        </div>
      </div>
    </div>
  );
};

export default CrossMarquee;
