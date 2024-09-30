import React from 'react';
import { Button } from "@/components/ui/button";

const FormNavigation = ({ sections, currentStep, onNavigate }) => {
  return (
    <nav className="mb-6 p-4 bg-gray-100 rounded-lg overflow-x-auto">
      <ul className="flex space-x-2">
        {sections.map((section, index) => (
          <li key={index}>
            <Button
              variant={currentStep === index ? "default" : "outline"}
              size="sm"
              onClick={() => onNavigate(index)}
            >
              {section.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FormNavigation;