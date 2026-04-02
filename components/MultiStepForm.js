"use client";

import { useState } from "react";
import BusinessStructureIntro from "./step1/BusinessStructureIntro";
import BusinessRep from "./step1/BusinessRep";
import BusinessDetails from "./step1/BusinessDetails";
import BankDetails from "./step2/BankDetails";
import TwoStepAuth from "./step3/TwoStepAuth";
import Overview from "./step4/overview";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const [formData, setFormData] = useState({
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

    bank_name: "",
    account_number: "",
  });

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
          <TwoStepAuth
            next={() => setStep(4)}
            back={() => setStep(2)}
          />
        );
      case 4:
        return (
          <Overview
            formData={formData}
            back={() => setStep(3)}
          />
        );
      default:
        return null;
    }
  };

  return (
  <div className="w-screen min-h-screen bg-gray-50">

    <div className="absolute top-8 left-8 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>

    <div className="px-16 py-12 bg-gray-50">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        Account verification
        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
          In progress
        </span>
      </h1>
      <div className="border-b border-gray-300 mt-4 w-full"></div>
    </div>

    <div className="flex w-full px-16 pb-20">

      <div className="w-[260px] border-l-2 border-gray-200 pl-6 pt-4 space-y-12">

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">
            1
          </div>
          <div>
            <p className="font-medium">Business structure</p>
            <p className="text-xs text-gray-400">Business representative</p>
            <p className="text-xs text-gray-400">Business details</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-medium">
            2
          </div>
          <p className="text-gray-700">Bank details</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-medium">
            3
          </div>
          <p className="text-gray-700">2 step authentication</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-medium">
            4
          </div>
          <p className="text-gray-700">Overview</p>
        </div>

      </div>

      <div className="flex-1 pl-20">
        {renderForm()}
      </div>

    </div>
  </div>
);}