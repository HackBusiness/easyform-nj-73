import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompanyInformation from './CPCNFormSections/CompanyInformation';
import VehicleInformation from './CPCNFormSections/VehicleInformation';
import BrokerService from './CPCNFormSections/BrokerService';
import JudgmentsLiens from './CPCNFormSections/JudgmentsLiens';
import OperatingAuthority from './CPCNFormSections/OperatingAuthority';

const CPCNForm = () => {
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">2023 CPCN ANNUAL REPORT FOR COLLECTORS/TRANSPORTERS AND BROKERS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <CompanyInformation register={register} errors={errors} watch={watch} />
          <VehicleInformation register={register} errors={errors} />
          <BrokerService register={register} errors={errors} />
          <JudgmentsLiens register={register} errors={errors} control={control} />
          <OperatingAuthority register={register} errors={errors} control={control} />
        </CardContent>
      </Card>
      <Button type="submit" className="w-full">Submit Form</Button>
    </form>
  );
};

export default CPCNForm;