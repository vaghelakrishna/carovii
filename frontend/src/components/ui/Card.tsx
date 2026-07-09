import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;