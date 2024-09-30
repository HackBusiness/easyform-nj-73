import React from 'react';
import { ChevronRight } from "lucide-react";

const FormNavigation = ({ sections, currentStep, onNavigate }) => {
  return (
    <nav className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-sm font-medium text-gray-500">
        {sections.map((section, index) => (
          <li key={index} className="flex items-center">
            <button
              onClick={() => onNavigate(index)}
              className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                currentStep === index
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {section.title}
            </button>
            {index < sections.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default FormNavigation;