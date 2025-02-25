// src/utils/constraintCalculator.ts

export type ConstraintMap = {
  scope: number;
  schedule: number;
  risk: number;
  budget: number;
  quality: number;
  resources: number;
};

type ConstraintImpact = {
  [key in keyof ConstraintMap]: {
    [impactOn in keyof ConstraintMap]?: number;
  };
};

// This defines how each constraint affects others
// The values represent the percentage of impact (0.5 = 50% of the change)
const IMPACT_FACTORS: ConstraintImpact = {
  scope: {
    schedule: 0.7, // Increasing scope strongly increases schedule
    risk: 0.6, // Increasing scope moderately increases risk
    budget: 0.8, // Increasing scope strongly increases budget
    quality: -0.3, // Increasing scope slightly decreases quality (if other constraints remain fixed)
    resources: 0.5, // Increasing scope moderately increases resource needs
  },
  schedule: {
    quality: -0.5, // Decreasing schedule (compression) strongly decreases quality
    risk: -0.6, // Decreasing schedule strongly increases risk (negative correlation)
    budget: -0.4, // Decreasing schedule moderately increases budget (negative correlation)
    scope: -0.3, // Decreasing schedule may require scope reduction (negative correlation)
  },
  risk: {
    quality: -0.4, // Increasing risk moderately decreases quality
    budget: 0.3, // Increasing risk slightly increases budget (contingencies)
  },
  budget: {
    resources: 0.7, // Increasing budget strongly increases available resources
    quality: 0.5, // Increasing budget moderately increases quality
    schedule: -0.4, // Increasing budget moderately decreases schedule (negative correlation)
    risk: -0.3, // Increasing budget slightly decreases risk (negative correlation)
  },
  quality: {
    budget: 0.6, // Increasing quality requirements moderately increases budget
    schedule: 0.5, // Increasing quality requirements moderately increases schedule
    risk: -0.7, // Increasing quality strongly decreases risk (negative correlation)
  },
  resources: {
    schedule: -0.6, // Increasing resources moderately decreases schedule (negative correlation)
    budget: 0.8, // Increasing resources strongly increases budget
    quality: 0.4, // Increasing resources moderately increases quality
    risk: -0.3, // Increasing resources slightly decreases risk (negative correlation)
  },
};

// Calculate the impact of changing one constraint on all others
export function calculateConstraintImpacts(
  changedConstraint: keyof ConstraintMap,
  newValue: number,
  currentConstraints: ConstraintMap
): ConstraintMap {
  const result = { ...currentConstraints };
  const delta = newValue - currentConstraints[changedConstraint];

  // First set the directly changed constraint
  result[changedConstraint] = newValue;

  // Then calculate impacts on other constraints
  const impacts = IMPACT_FACTORS[changedConstraint];

  if (impacts) {
    Object.entries(impacts).forEach(([impactedConstraint, factor]) => {
      const key = impactedConstraint as keyof ConstraintMap;
      if (key !== changedConstraint) {
        // Calculate the new value with impact factor
        // Negative factors represent inverse relationships
        let impactValue = currentConstraints[key] + delta * factor;

        // Ensure values stay within 0-100 range
        impactValue = Math.max(0, Math.min(100, impactValue));

        result[key] = Math.round(impactValue);
      }
    });
  }

  return result;
}

// Optional: Helper function to reset all constraints to default values
export function resetConstraints(): ConstraintMap {
  return {
    scope: 50,
    schedule: 50,
    risk: 50,
    budget: 50,
    quality: 50,
    resources: 50,
  };
}
