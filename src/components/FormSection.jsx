import React from 'react';
import InputField from './InputField';
import DigitalSignature from './DigitalSignature';
import FileUpload from './FileUpload';

const FormSection = ({ title, register, errors, currentSection }) => {
  const renderFields = () => {
    switch (currentSection) {
      case 0: // Company Information
        return (
          <>
            <InputField
              label="Company Name"
              name="companyName"
              register={register}
              required
              errors={errors}
            />
            <InputField
              label="FEIN"
              name="fein"
              register={register}
              required
              errors={errors}
            />
            <InputField
              label="Phone"
              name="phone"
              register={register}
              required
              errors={errors}
            />
            <InputField
              label="Zip Code"
              name="zipCode"
              register={register}
              required
              errors={errors}
            />
          </>
        );
      case 1: // Officers & Equity Holders
        return (
          <>
            <InputField
              label="Officer Name"
              name="officerName"
              register={register}
              required
              errors={errors}
            />
            <InputField
              label="Title"
              name="officerTitle"
              register={register}
              required
              errors={errors}
            />
            {/* Add more fields for equity holders */}
          </>
        );
      case 2: // Vehicle Information
        return (
          <>
            <FileUpload
              label="Vehicle Information"
              name="vehicleInfo"
              register={register}
              required
              errors={errors}
            />
          </>
        );
      case 3: // Business Description
        return (
          <>
            <InputField
              label="Business Description"
              name="businessDescription"
              register={register}
              required
              errors={errors}
              multiline
            />
          </>
        );
      case 4: // Subcontractor Information
        return (
          <>
            <InputField
              label="Subcontractor Name"
              name="subcontractorName"
              register={register}
              errors={errors}
            />
            <InputField
              label="Subcontractor Service"
              name="subcontractorService"
              register={register}
              errors={errors}
            />
          </>
        );
      case 5: // Revenue Reporting
        return (
          <>
            <InputField
              label="Annual Revenue"
              name="annualRevenue"
              register={register}
              required
              errors={errors}
              type="number"
            />
          </>
        );
      case 6: // Certification
        return (
          <>
            <DigitalSignature
              label="Digital Signature"
              name="signature"
              register={register}
              required
              errors={errors}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {renderFields()}
    </div>
  );
};

export default FormSection;