"use client";

import { useState, useEffect } from "react";
import BusinessStructureIntro from "./step1/BusinessStructureIntro";
import BusinessRep from "./step1/BusinessRep";
import BusinessDetails from "./step1/BusinessDetails";
import BankDetails from "./step2/BankDetails";
import AccountHolderDetails from "./step3/AccountHolderDetails";
import Overview from "./step4/overview";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

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
    vat_number: "",
    industry: "",
    website: "",
    currency: "",
    bank_country: "",
    iban: "",
    confirm_iban: "",
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
            next={() => setSubStep(2)}
          />
        );
      case 2:
        return (
          <BusinessRep
            formData={formData}
            setFormData={setFormData}
            next={() => setSubStep(3)}
            back={() => setSubStep(1)}
          />
        );
      case 3:
  return (
    <BusinessDetails
      formData={formData}
      setFormData={setFormData}
      next={() => {
        setStep(2);
        setSubStep(1);
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
            next={() => setStep(3)}
            back={() => setStep(1)}
          />
        );
      case 3:
        return (
          <AccountHolderDetails
            formData={formData}
            setFormData={setFormData}
            next={() => setStep(4)}
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

      <div className="flex w-full px-16 pb-20">

        <div className="relative w-[260px] pt-6 space-y-12">

  <div className="absolute left-6 top-6 h-[300px] w-[33px] bg-[#D9D9D9]/40 rounded-full"></div>

  <div className="relative flex items-start cursor-pointer"
  onClick={() => setStep(1)}
>
    <div
  className={`absolute left-6.5 w-8 h-8 rounded-full flex items-center justify-center text-sm 
    ${step === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
>
  1
</div>
    <div className="ml-21">
      <p className="font-medium">Business structure</p>
      <p className="text-xs text-gray-400">Business representative</p>
      <p className="text-xs text-gray-400">Business details</p>
    </div>
  </div>

  <div className="relative flex items-center cursor-pointer"
  onClick={() => setStep(2)}>
    <div
  className={`absolute left-6.5 w-8 h-8 rounded-full flex items-center justify-center text-sm 
    ${step === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
>
  2
</div>
    <p className="ml-21 text-gray-700">Bank details</p>
  </div>

  <div className="relative flex items-center cursor-pointer"
  onClick={() => setStep(3)}>
    <div
  className={`absolute left-6.5 w-8 h-8 rounded-full flex items-center justify-center text-sm 
    ${step === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
>
  3
</div>
    <p className="ml-21 text-gray-700">Account Holder Details</p>
  </div>

  <div className="relative flex items-center cursor-pointer"
  onClick={() => setStep(4)}>
    <div
  className={`absolute left-6.5 w-8 h-8 rounded-full flex items-center justify-center text-sm 
    ${step === 4 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
>
  4
</div>
    <p className="ml-21 text-gray-700">Overview</p>
  </div>

</div>

        <div className="flex-1 pl-20">
          {renderForm()}
        </div>

      </div>
    </div>
  );
}