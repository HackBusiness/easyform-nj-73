import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FormProgress from '../components/FormProgress';
import FormSection from '../components/FormSection';
import { generatePDF } from '../utils/pdfGenerator';

const sections = [
  "Company Information",
  "Officers & Equity Holders",
  "Vehicle Information",
  "Business Description",
  "Subcontractor Information",
  "Revenue Reporting",
  "Certification"
];

const CPCNForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
    generatePDF(data);
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CPCN Form</h1>
      <FormProgress currentStep={currentSection} totalSteps={sections.length} />
      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSection
            title={sections[currentSection]}
            register={register}
            errors={errors}
            currentSection={currentSection}
          />
          <div className="flex justify-between mt-4">
            {currentSection > 0 && (
              <Button type="button" onClick={prevSection}>Previous</Button>
            )}
            {currentSection < sections.length - 1 ? (
              <Button type="button" onClick={nextSection}>Next</Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CPCNForm;