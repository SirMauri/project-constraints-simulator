// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import ConstraintNode from "@/components/ConstraintNode";
import ConstraintSlider from "@/components/ConstraintSlider";
import EducationSection from "@/components/EducationSection";
import { ConstraintMap, calculateConstraintImpacts } from "@/utils/constraintCalculator";

export default function Home() {
  const [constraints, setConstraints] = useState<ConstraintMap>({
    scope: 50,
    schedule: 50,
    risk: 50,
    budget: 50,
    quality: 50,
    resources: 50,
  });

  const [activeConstraint, setActiveConstraint] = useState<string | null>(null);
  const [showEducation, setShowEducation] = useState(false);

  const handleConstraintChange = (name: keyof ConstraintMap, value: number) => {
    const updatedConstraints = calculateConstraintImpacts(name, value, constraints);
    setConstraints(updatedConstraints);
    setActiveConstraint(name);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Project Constraints Simulator</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how different project constraints affect one another. Adjust any constraint using the sliders below and observe how the
            others respond.
          </p>
        </header>

        {/* Interactive Diagram */}
        <div className="mb-16">
          <div className="relative w-full h-[500px] bg-white rounded-xl shadow-md p-4 mb-8">
            {/* Top Row */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-8 flex justify-center w-full gap-4 md:gap-24">
              <ConstraintNode
                name="Scope"
                value={constraints.scope}
                isActive={activeConstraint === "scope"}
                position="top-left"
                color="blue"
              />
              <ConstraintNode
                name="Schedule"
                value={constraints.schedule}
                isActive={activeConstraint === "schedule"}
                position="top-center"
                color="blue"
              />
              <ConstraintNode
                name="Risk"
                value={constraints.risk}
                isActive={activeConstraint === "risk"}
                position="top-right"
                color="blue"
              />
            </div>

            {/* Bottom Row */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex justify-center w-full gap-4 md:gap-24">
              <ConstraintNode
                name="Budget"
                value={constraints.budget}
                isActive={activeConstraint === "budget"}
                position="bottom-left"
                color="blue"
              />
              <ConstraintNode
                name="Quality"
                value={constraints.quality}
                isActive={activeConstraint === "quality"}
                position="bottom-center"
                color="blue"
              />
              <ConstraintNode
                name="Resources"
                value={constraints.resources}
                isActive={activeConstraint === "resources"}
                position="bottom-right"
                color="blue"
              />
            </div>

            {/* Note: SVG Connections have been removed as requested */}
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConstraintSlider name="Scope" value={constraints.scope} onChange={(value) => handleConstraintChange("scope", value)} />
            <ConstraintSlider
              name="Schedule"
              value={constraints.schedule}
              onChange={(value) => handleConstraintChange("schedule", value)}
            />
            <ConstraintSlider name="Risk" value={constraints.risk} onChange={(value) => handleConstraintChange("risk", value)} />
            <ConstraintSlider name="Budget" value={constraints.budget} onChange={(value) => handleConstraintChange("budget", value)} />
            <ConstraintSlider name="Quality" value={constraints.quality} onChange={(value) => handleConstraintChange("quality", value)} />
            <ConstraintSlider
              name="Resources"
              value={constraints.resources}
              onChange={(value) => handleConstraintChange("resources", value)}
            />
          </div>
        </div>

        {/* Educational Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowEducation(!showEducation)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            {showEducation ? "Hide Educational Content" : "Show Educational Content"}
          </button>
        </div>

        {/* Educational Content */}
        {showEducation && <EducationSection />}

        <footer className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Project Management Simulator</p>
        </footer>
      </div>
    </main>
  );
}
