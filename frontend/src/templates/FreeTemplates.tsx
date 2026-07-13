import { ArrowRight } from "lucide-react";
import TemplateCard from "./TemplateCard";
import { templates } from "./templateData";
import { useRef, useState, useEffect } from "react";
import arrow from "../assets/illustations/arrow.png";


const FreeTemplates = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
  
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  
  const handleMouseUp = () => {
    setIsDown(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
  
    e.preventDefault();
  
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.8; // drag speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <section className="py-24 px-6">

      <div className="mb-10 flex items-end justify-between">

        <div className="max-w-2xl">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Free Resources
          </span>
          <div className="mt-2 inline-flex flex-col items-center">
            <h2 className="text-center text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Free Instagram Templates
            </h2>

            <img
              src={arrow}
              alt=""
              className="
    hidden
    sm:block

    mt-1
    w-[220px]
    self-end
    translate-x-2

    select-none
    pointer-events-none
    opacity-90
  "
            />
          </div>

          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Browse beautiful carousel templates.
            Click any template to open the original Instagram post.
          </p>

        </div>

        <button
          className="
          hidden
          items-center
          gap-2
          rounded-2xl
          border
          border-[#ECEAF3]
          bg-white
          px-5
          py-3
          font-medium
          transition
          hover:border-violet-300
          hover:bg-violet-50
          md:flex
          "
        >
          Browse All

          <ArrowRight size={18} />

        </button>

      </div>

      <div
        ref={scrollRef}
        onMouseDown={!isMobile ? handleMouseDown : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        onMouseUp={!isMobile ? handleMouseUp : undefined}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        className="
    flex
    gap-7
    overflow-x-auto
    overflow-x-hidden
    overflow-y-hidden
    pb-4
    snap-x
    snap-mandatory
    scrollbar-hide
    touch-pan-x
    [-webkit-overflow-scrolling:touch]
    md:cursor-grab
    md:active:cursor-grabbing
  "
      >
        {templates.map((template) => (
          <div
            key={template.id}
            className="
      snap-center
      shrink-0
      w-[85vw]
      sm:w-[330px]
    "
          >
            <TemplateCard template={template} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default FreeTemplates;