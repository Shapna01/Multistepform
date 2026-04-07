"use client";
import { useState } from "react";

export default function BankDetails({ formData, setFormData, next }) {
  const [errors, setErrors] = useState({});

  const validateBank = () => {
  let err = {};

  if (!formData.account_holder_name) {
    err.account_holder_name = "Required";
  }

  if (!formData.account_number) {
    err.account_number = "Required";
  }

  if (!formData.bank_name) {
    err.bank_name = "Required";
  }

  if (!formData.currency) {
    err.currency = "Required";
  }

  if (!formData.bank_country) {
    err.bank_country = "Required";
  }

  if (!formData.pin) {
    err.pin = "PIN required";
  } else if (formData.pin.length !== 6) {
    err.pin = "PIN must be 6 digits";
  }

  if (!formData.confirm_pin) {
    err.confirm_pin = "Confirm PIN required";
  } else if (formData.pin !== formData.confirm_pin) {
    err.confirm_pin = "PIN does not match";
  }

  return err;
};

 const handleSave = () => {
  try {
    const err = validateBank();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});

    localStorage.setItem("formData", JSON.stringify(formData));

    next();

  } catch (error) {
    console.error("Error saving bank details:", error);

    alert("Something went wrong while saving. Please try again.");
  }
};
  return (
    <div className="w-[410px] space-y-5">
      

      <label className="block mb-2 text-sm font-medium">
  Account Holder Name
</label>
<input
  placeholder="Enter account holder name"
  value={formData.account_holder_name || ""}
  onChange={(e) => {
    setFormData({
      ...formData,
      account_holder_name: e.target.value.toUpperCase(),
    });
    setErrors((prev) => ({ ...prev, account_holder_name: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.account_holder_name ? "border-red-500" : "border-gray-200"}
  `}
/>
{errors.account_holder_name && (
  <p className="text-red-500 text-xs">{errors.account_holder_name}</p>
)}

<label className="block mb-2 text-sm font-medium">
  Account Number
</label>
<input
  placeholder="Enter account number"
  value={formData.account_number || ""}
  onChange={(e) => {
    setFormData({ ...formData, account_number: e.target.value });
    setErrors((prev) => ({ ...prev, account_number: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.account_number ? "border-red-500" : "border-gray-200"}
  `}
/>
{errors.account_number && (
  <p className="text-red-500 text-xs">{errors.account_number}</p>
)}

<label className="block mb-2 text-sm font-medium">Bank Name</label>
<input
  placeholder="Enter bank name"
  value={formData.bank_name || ""}
  onChange={(e) => {
    setFormData({ ...formData, bank_name: e.target.value });
    setErrors((prev) => ({ ...prev, bank_name: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.bank_name ? "border-red-500" : "border-gray-200"}
  `}
/>
{errors.bank_name && (
  <p className="text-red-500 text-xs">{errors.bank_name}</p>
)}

<label className="block mb-2 text-sm font-medium">Currency</label>
<select
  value={formData.currency || ""}
  onChange={(e) => {
    setFormData({ ...formData, currency: e.target.value });
    setErrors((prev) => ({ ...prev, currency: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.currency ? "border-red-500" : "border-gray-200"}
  `}
>
  <option value="">Select your currency...</option>
  <option value="eur">EUR</option>
  <option value="usd">USD</option>
  <option value="inr">INR</option>
</select>
{errors.currency && (
  <p className="text-red-500 text-xs">{errors.currency}</p>
)}

<label className="block mb-2 text-sm font-medium">
  Country of bank account
</label>
<select
  value={formData.bank_country || ""}
  onChange={(e) => {
    setFormData({ ...formData, bank_country: e.target.value });
    setErrors((prev) => ({ ...prev, bank_country: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.bank_country ? "border-red-500" : "border-gray-200"}
  `}
>
  <option value="">Country</option>
  <option value="ie">Ireland</option>
  <option value="us">United States</option>
  <option value="in">India</option>
</select>
{errors.bank_country && (
  <p className="text-red-500 text-xs">{errors.bank_country}</p>
)}

<label className="block mb-2 text-sm font-medium">PIN</label>
<input
  placeholder="Enter your PIN"
  value={formData.pin || ""}
  onChange={(e) => {
    setFormData({
      ...formData,
      pin: e.target.value.replace(/\D/g, "").slice(0, 6),
    });
    setErrors((prev) => ({ ...prev, pin: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.pin ? "border-red-500" : "border-gray-200"}
  `}
/>
{errors.pin && (
  <p className="text-red-500 text-xs">{errors.pin}</p>
)}

<label className="block mb-2 text-sm font-medium">Confirm PIN</label>
<input
  placeholder="Confirm PIN"
  value={formData.confirm_pin || ""}
  onChange={(e) => {
    setFormData({
      ...formData,
      confirm_pin: e.target.value.replace(/\D/g, "").slice(0, 6),
    });
    setErrors((prev) => ({ ...prev, confirm_pin: "" }));
  }}
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.confirm_pin ? "border-red-500" : "border-gray-200"}
  `}
/>
{errors.confirm_pin && (
  <p className="text-red-500 text-xs">{errors.confirm_pin}</p>
)}
      <button
        onClick={handleSave}
        className="w-full bg-[#4A3AFF] text-white py-3 rounded"
      >
        Save →
      </button>
    </div>
  );
}