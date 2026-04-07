"use client";
import { useState } from "react";

export default function AccountHolderDetails({ formData, setFormData, next, back }) {
  const [errors, setErrors] = useState({});
  const validate = () => {
  let err = {};

  if (!formData.user_fullname?.trim()) {
    err.user_fullname = "Required";
  }

   if (!formData.user_email?.trim()) {
    err.user_email = "Required";
  } else if (!formData.user_email.includes("@") || !formData.user_email.includes(".")) {
    err.user_email = "Invalid email";
  }

  if (!formData.user_phone?.trim()) {
    err.user_phone = "Required";
  } else if (formData.user_phone.replace(/\D/g, "").length !== 10) {
    err.user_phone = "Must be 10 digits";
  }


  if (!formData.user_role) {
    err.user_role = "Required";
  }

  if (!formData.terms_1) {
    err.terms_1 = "Required";
  }

  if (!formData.terms_2) {
    err.terms_2 = "Required";
  }

  if (!formData.terms_3) {
    err.terms_3 = "Required";
  }

  setErrors(err);
  return Object.keys(err).length === 0;
};

  const handleSave = () => {
  try {
    if (!validate()) return;
    console.log("Form Data:", formData); 
    localStorage.setItem("formData", JSON.stringify(formData));

    next();

  } catch (error) {
    console.error("Error saving account holder details:", error);

    alert("Something went wrong. Please try again.");
  }
};
  return (
    <div className="w-[420px] space-y-8">

      <p className="text-sm text-gray-500">
        Please provide your personal details and accept the agreements.
      </p>

      <div className="space-y-5">

        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
  className={`w-full h-[44px] bg-[#F9FAFB] border rounded-lg px-3 text-sm
    ${errors.user_fullname ? "border-red-500" : "border-gray-200"}
  `}
  value={formData.user_fullname || ""}
  onChange={(e) => {
    setFormData({ ...formData, user_fullname: e.target.value });
    setErrors((prev) => ({ ...prev, user_fullname: "" }));
  }}
/>
          {errors.user_fullname && <p className="text-red-500 text-xs">{errors.user_fullname}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Email address</label>
          <input
            type="email"
            className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
            value={formData.user_email || ""}
            onChange={(e) =>
              setFormData({ ...formData, user_email: e.target.value })
            }
          />
          {errors.user_email && <p className="text-red-500 text-xs">{errors.user_email}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Phone number</label>
          <input
            className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
            value={formData.user_phone || ""}
            onChange={(e) =>
              setFormData({ ...formData, user_phone: e.target.value })
            }
          />
          {errors.user_phone && <p className="text-red-500 text-xs">{errors.user_phone}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Role</label>
          <select
            className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
            value={formData.user_role || ""}
            onChange={(e) =>
              setFormData({ ...formData, user_role: e.target.value })
            }
          >
            <option value="">Select role</option>
            <option value="Owner">Owner</option>
            <option value="Manager">Manager</option>
            <option value="Accountant">Accountant</option>
          </select>
          {errors.user_role && <p className="text-red-500 text-xs">{errors.user_role}</p>}
        </div>

      </div>

     <div className="space-y-4">
  <h3 className="text-lg font-medium">Agreements</h3>

  <div>
    <label className="flex items-center space-x-3 text-sm">
      <input
        type="checkbox"
        checked={formData.terms_1 || false}
        onChange={(e) => {
          setFormData({ ...formData, terms_1: e.target.checked });
          setErrors((prev) => ({ ...prev, terms_1: "" }));
        }}
      />
      <span>I agree to the Terms & Conditions</span>
    </label>
    {errors.terms_1 && (
      <p className="text-red-500 text-xs ml-6">Required</p>
    )}
  </div>

  <div>
    <label className="flex items-center space-x-3 text-sm">
      <input
        type="checkbox"
        checked={formData.terms_2 || false}
        onChange={(e) => {
          setFormData({ ...formData, terms_2: e.target.checked });
          setErrors((prev) => ({ ...prev, terms_2: "" }));
        }}
      />
      <span>I accept the Privacy Policy</span>
    </label>
    {errors.terms_2 && (
      <p className="text-red-500 text-xs ml-6">Required</p>
    )}
  </div>

  <div>
    <label className="flex items-center space-x-3 text-sm">
      <input
        type="checkbox"
        checked={formData.terms_3 || false}
        onChange={(e) => {
          setFormData({ ...formData, terms_3: e.target.checked });
          setErrors((prev) => ({ ...prev, terms_3: "" }));
        }}
      />
      <span>I confirm all information provided is correct</span>
    </label>
    {errors.terms_3 && (
      <p className="text-red-500 text-xs ml-6">Required</p>
    )}
  </div>
</div>

      <button
        onClick={handleSave}
        className="w-full bg-[#4A3AFF] text-white py-3 rounded"
      >
        Save →
      </button>

    </div>
  );
}