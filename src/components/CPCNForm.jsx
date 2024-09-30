import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompanyInformation from './CPCNFormSections/CompanyInformation';
import VehicleInformation from './CPCNFormSections/VehicleInformation';
import BrokerService from './CPCNFormSections/BrokerService';
import JudgmentsLiens from './CPCNFormSections/JudgmentsLiens';
import OperatingAuthority from './CPCNFormSections/OperatingAuthority';
import SubcontractingOut from './CPCNFormSections/SubcontractingOut';
import SubcontractingIn from './CPCNFormSections/SubcontractingIn';
import TariffUpdate from './CPCNFormSections/TariffUpdate';
import FormProgress from './FormProgress';

const CPCNForm = () => {
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    { title: "Company Information", component: CompanyInformation },
    { title: "Vehicle Information", component: VehicleInformation },
    { title: "Broker Service", component: BrokerService },
    { title: "Judgments and Liens", component: JudgmentsLiens },
    { title: "Operating Authority", component: OperatingAuthority },
    { title: "Subcontracting Out", component: SubcontractingOut },
    { title: "Subcontracting In", component: SubcontractingIn },
    { title: "Tariff Update (2023)", component: TariffUpdate },
  ];

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const CurrentSection = sections[currentStep].component;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">2023 CPCN ANNUAL REPORT FOR COLLECTORS/TRANSPORTERS AND BROKERS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormProgress currentStep={currentStep} totalSteps={sections.length} />
          <CurrentSection register={register} errors={errors} watch={watch} control={control} />
          <div className="flex justify-between mt-4">
            {currentStep > 0 && (
              <Button type="button" onClick={prevStep}>Previous</Button>
            )}
            {currentStep < sections.length - 1 ? (
              <Button type="button" onClick={nextStep}>Next</Button>
            ) : (
              <Button type="submit">Submit Form</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default CPCNForm;