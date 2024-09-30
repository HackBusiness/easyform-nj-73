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
import BrokersUsed from './CPCNFormSections/BrokersUsed';
import RelatedCompanies from './CPCNFormSections/RelatedCompanies';
import DisposalInformation from './CPCNFormSections/DisposalInformation';
import OtherRevenueSources from './CPCNFormSections/OtherRevenueSources';
import CustomerServiceAreaInventoryBrokers from './CPCNFormSections/CustomerServiceAreaInventoryBrokers';
import CollectorsTransportersUsed from './CPCNFormSections/CollectorsTransportersUsed';
import ZeroRevenueCertification from './CPCNFormSections/ZeroRevenueCertification';
import FormProgress from './FormProgress';
import FormNavigation from './FormNavigation';

const CPCNForm = () => {
  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    { title: "Company Info", component: CompanyInformation },
    { title: "Vehicles", component: VehicleInformation },
    { title: "Broker Service", component: BrokerService },
    { title: "Judgments", component: JudgmentsLiens },
    { title: "Operating Auth", component: OperatingAuthority },
    { title: "Subcontract Out", component: SubcontractingOut },
    { title: "Subcontract In", component: SubcontractingIn },
    { title: "Tariff Update", component: TariffUpdate },
    { title: "Brokers Used", component: BrokersUsed },
    { title: "Related Companies", component: RelatedCompanies },
    { title: "Disposal Info", component: DisposalInformation },
    { title: "Other Revenue", component: OtherRevenueSources },
    { title: "Customer Service Area", component: CustomerServiceAreaInventoryBrokers },
    { title: "Collectors/Transporters Used", component: CollectorsTransportersUsed },
    { title: "Zero Revenue Certification", component: ZeroRevenueCertification },
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

  const navigateToSection = (index) => {
    setCurrentStep(index);
  };

  const CurrentSection = sections[currentStep].component;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">2023 CPCN ANNUAL REPORT FOR COLLECTORS/TRANSPORTERS AND BROKERS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormNavigation sections={sections} currentStep={currentStep} onNavigate={navigateToSection} />
          <FormProgress currentStep={currentStep} totalSteps={sections.length} />
          <CurrentSection register={register} errors={errors} watch={watch} control={control} setValue={setValue} />
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