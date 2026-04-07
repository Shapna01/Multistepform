"use client";

import { useState, useEffect } from "react";
import BusinessStructureIntro from "./step1/BusinessStructureIntro";
import BusinessRep from "./step1/BusinessRep";
import BusinessDetails from "./step1/BusinessDetails";
import BankDetails from "./step2/BankDetails";
import AccountHolderDetails from "./step3/AccountHolderDetails";
import Overview from "./step4/overview";
import Sidebar from "./sidebar/sidebar";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [errors, setErrors] = useState({});
  const validateStep1 = () => {
  let err = {};

  if (!formData.business_address?.trim()) {
    err.business_address = "Business address is required";
  }

  if (!formData.business_type) {
    err.business_type = "Select business type";
  }

  return err;
};

const validateBank = () => {
  let err = {};

  if (!formData.bank_country) {
    err.bank_country = "Bank country required";
  }

  if (!formData.currency) {
    err.currency = "Currency required";
  }

  return err;
};

const validateAccount = () => {
  let err = {};

  if (!formData.pin) {
    err.pin = "PIN required";
  }

  if (formData.pin !== formData.confirm_pin) {
    err.confirm_pin = "PIN does not match";
  }

  return err;
};
  const [formData, setFormData] = useState(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("formData");
    if (saved) return JSON.parse(saved);
  }
  return {
    business_address: "",
    business_type: "",
    address_line1: "",
    address_line2: "",
    city: "",
    zip: "",
    first_name: "",
    last_name: "",
    rep_email: "",
    rep_address1: "",
    rep_address2: "",
    rep_city: "",
    rep_zip: "",
    country_code: "+353",
    phone: "",
    pan_number: "",
    industry: "",
    website: "",
    currency: "",
    bank_country: "",
    pin: "",
    confirm_pin: "",
  };
});
useEffect(() => {
  localStorage.setItem("formData", JSON.stringify(formData));
}, [formData]);

  const renderStep1 = () => {
    switch (subStep) {
      case 1:
        return (
          <BusinessStructureIntro
            formData={formData}
            setFormData={setFormData}
              errors={errors}

            next={() => {const err = validateStep1();

  if (Object.keys(err).length > 0) {
    setErrors(err);
    return;
  }

  setErrors({});
  setCompletedSteps(prev => [...new Set([...prev, 1])]);
  setStep(2);
  setSubStep(1);
}}
          />
        );
      case 2:
        return (
          <BusinessRep
            formData={formData}
            setFormData={setFormData}
            next={() => {
  const err = validateBank();

  if (Object.keys(err).length > 0) {
    setErrors(err);
    return;
  }

  setErrors({});
  setCompletedSteps(prev => [...new Set([...prev, 2])]);
  setStep(3);
}}
            back={() => setSubStep(1)}
          />
        );
      case 3:
  return (
    <BusinessDetails
      formData={formData}
      setFormData={setFormData}
     next={() => {
  const err = validateAccount();

  if (Object.keys(err).length > 0) {
    setErrors(err);
    return;
  }

  setErrors({});
  setCompletedSteps(prev => [...new Set([...prev, 3])]);
  setStep(4);
}}
      back={() => setSubStep(2)}
    />
  );
  
      default:
        return null;
    }
  };
  

  const renderForm = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return (
          <BankDetails
            formData={formData}
            setFormData={setFormData}
            next={() => {
  setCompletedSteps(prev => [...new Set([...prev, 2])]);
  setStep(3);
}}
            back={() => setStep(1)}
          />
        );
      case 3:
        return (
          <AccountHolderDetails
            formData={formData}
            setFormData={setFormData}
            next={() => {
  setCompletedSteps(prev => [...new Set([...prev, 3])]);
  setStep(4);
}}
            back={() => setStep(2)}
          />
        );
      case 4:
        return (
          <Overview
            formData={formData}
            goToStep={(stepNumber) => setStep(stepNumber)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50 relative">
   

{errors.business_address && (
  <p className="text-red-500 text-sm">{errors.business_address}</p>
)}
      <div
        onClick={() => {
          if (step === 1 && subStep > 1) setSubStep(subStep - 1);
          else if (step > 1) setStep(step - 1);
        }}
        className="bg-gray-300 absolute top-[38px] left-[80px] flex items-center justify-center w-[62px] h-[48px] bg-[#F8F8F8] rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#757D8A]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div className="px-16 py-12 bg-gray-50">
        <h1 className="absolute top-[42px] left-[160px] w-[154px] h-[40px] text-[16px] font-medium leading-[40px] text-gray-900">
          Account verification
          <span className="absolute top-[5px] left-[170px] px-2 py-1 text-xs bg-blue-100 text-blue-600 whitespace-nowrap">
            In progress
          </span>
        </h1>
        <div className="border-b border-gray-300 mt-15 w-full"></div>
      </div>

      <div className="flex w-full px-16 pb-20 items-start gap-20">

  <Sidebar 
    step={step} 
    setStep={setStep} 
    completedSteps={completedSteps}
  />

  <div className="flex-1">
    {renderForm()}
  </div>

</div>
    </div>
  );
}