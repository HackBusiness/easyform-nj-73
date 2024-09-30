import React from 'react';
import { Progress } from "@/components/ui/progress";

const FormProgress = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-4">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-gray-600 mt-2">
        Step {currentStep + 1} of {totalSteps}
      </p>
    </div>
  );
};

export default FormProgress;