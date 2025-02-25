// src/components/EducationSection.tsx
import React from "react";

const EducationSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Understanding Project Constraints</h2>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-3">The Interdependent Nature of Project Constraints</h3>
          <p className="text-gray-700 mb-4">
            Project management involves balancing six key constraints that interact with each other. Changes to one constraint typically
            affect several others in a cascading effect.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Relationships</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Scope ↔ Schedule & Risk</h4>
              <p className="text-sm text-gray-700">
                Increasing project scope typically extends the schedule and increases risk as more work needs to be managed.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Resources ↔ Schedule & Budget</h4>
              <p className="text-sm text-gray-700">
                Reducing resources often extends the schedule but decreases budget. Adding resources can accelerate work but increases
                costs.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Quality ↔ Risk & Budget</h4>
              <p className="text-sm text-gray-700">
                Maintaining high quality standards typically increases budget and reduces risk. Lowering quality standards may save money
                but increases project risks.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Schedule ↔ Budget & Quality</h4>
              <p className="text-sm text-gray-700">
                Compressing the schedule often increases budget (overtime, more resources) and may impact quality due to rushed work.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Common Scenarios</h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Scenario 1: Scope Creep</h4>
              <p className="text-sm text-gray-700 mb-2">When project scope expands (scope creep):</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Schedule extends (more work to complete)</li>
                <li>Budget increases (more hours, materials, etc.)</li>
                <li>Risk increases (more complexity to manage)</li>
                <li>Quality may decrease (if schedule/budget constraints remain fixed)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Scenario 2: Budget Cut</h4>
              <p className="text-sm text-gray-700 mb-2">When budget is reduced:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Resources decrease (can't afford as many people/materials)</li>
                <li>Schedule may extend (fewer resources working on the same scope)</li>
                <li>Quality may decrease (less time/money for testing, refinement)</li>
                <li>Risk increases (fewer contingencies, less margin for error)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Scenario 3: Schedule Compression</h4>
              <p className="text-sm text-gray-700 mb-2">When schedule must be shortened:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Budget typically increases (overtime, more resources in parallel)</li>
                <li>Risk increases (less buffer time, more parallel activities)</li>
                <li>Quality may decrease (rushed work, less testing time)</li>
                <li>Scope may need to decrease (to meet the deadline)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-3">The Project Management Triangle</h3>
          <p className="text-gray-700 mb-4">
            The traditional project management triangle includes Scope, Cost, and Time, with Quality in the center. This model has evolved
            to include Risk and Resources as additional constraints. The fundamental principle remains: you cannot change one constraint
            without affecting at least one other.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Best Practices</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Always assess the impact on all constraints when one needs to change</li>
            <li>Communicate constraint changes to all stakeholders</li>
            <li>Document trade-off decisions and their rationale</li>
            <li>Revisit constraints regularly throughout the project lifecycle</li>
            <li>Prioritize which constraints are most important for project success</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EducationSection;
