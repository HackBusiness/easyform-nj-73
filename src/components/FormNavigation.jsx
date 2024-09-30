import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FormNavigation = ({ sections, currentStep, onNavigate }) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex p-4 space-x-2">
        {sections.map((section, index) => (
          <Button
            key={index}
            variant={currentStep === index ? "default" : "outline"}
            size="sm"
            onClick={() => onNavigate(index)}
            className={`flex-shrink-0 ${
              currentStep === index ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            {section.title}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default FormNavigation;