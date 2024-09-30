import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from "@/components/ui/button";

const DigitalSignature = ({ label, name, register, required, errors }) => {
  const sigCanvas = useRef();
  const [signature, setSignature] = useState(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  const saveSignature = () => {
    setSignature(sigCanvas.current.toDataURL());
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="border border-gray-300 p-2 mt-1">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{ className: 'signature-canvas' }}
          backgroundColor="white"
        />
      </div>
      <div className="mt-2">
        <Button type="button" onClick={clearSignature} className="mr-2">Clear</Button>
        <Button type="button" onClick={saveSignature}>Save Signature</Button>
      </div>
      <input
        type="hidden"
        {...register(name, { required: required ? `${label} is required` : false })}
        value={signature || ''}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default DigitalSignature;