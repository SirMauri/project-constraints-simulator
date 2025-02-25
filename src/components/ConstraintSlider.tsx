// src/components/ConstraintSlider.tsx
import React from "react";

interface ConstraintSliderProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
}

const ConstraintSlider: React.FC<ConstraintSliderProps> = ({ name, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">{name}</label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value={value}
          onChange={handleChange}
          className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-lg font-medium text-blue-600 w-12 text-right">{value}%</span>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
};

export default ConstraintSlider;
