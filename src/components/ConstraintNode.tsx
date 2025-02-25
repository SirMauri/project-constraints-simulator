// src/components/ConstraintNode.tsx
import React from "react";

interface ConstraintNodeProps {
  name: string;
  value: number;
  isActive: boolean;
  position: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  color: string;
}

const ConstraintNode: React.FC<ConstraintNodeProps> = ({ name, value, isActive, position, color }) => {
  const getColorClass = () => {
    if (color === "blue") return "bg-blue-500";
    if (color === "green") return "bg-green-500";
    if (color === "red") return "bg-red-500";
    if (color === "yellow") return "bg-yellow-500";
    return "bg-blue-500";
  };

  return (
    <div
      className={`
        w-32 h-32 md:w-40 md:h-40 rounded-lg text-white p-4 flex flex-col items-center justify-center
        transition-all duration-300 shadow-lg
        ${getColorClass()}
        ${isActive ? "ring-4 ring-orange-400 scale-110" : ""}
      `}
    >
      <div className="text-lg md:text-xl font-bold">{name}</div>
      <div className="mt-2 text-2xl md:text-3xl font-bold">{value}%</div>
      <div className="w-full h-2 bg-white/30 rounded-full mt-4">
        <div className="h-full bg-white rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

export default ConstraintNode;
