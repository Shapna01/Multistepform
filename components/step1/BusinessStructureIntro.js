import { useState } from "react";
export default function BusinessStructureIntro({ formData, setFormData, next }) {
  const [errors, setErrors] = useState({});
  const validate = () => {
  let err = {};

  if (!formData.address_line1?.trim()) {
    err.address_line1 = "Required";
  }

  if (!formData.zip?.trim()) {
  err.zip = "Required";
} else if (formData.zip.trim().length !== 6 || isNaN(formData.zip)) {
  err.zip = "Must be 6 digits";
}

  setErrors(err);
  return Object.keys(err).length === 0;
};

  const handleSave = () => {
  try {
    if (!validate()) return;

    localStorage.setItem("formData", JSON.stringify(formData));

    next();

  } catch (error) {
    console.error("Error while saving form:", error);

    alert("Something went wrong. Please try again.");
  }
};
  return (
    <div className="w-[410px] space-y-5">


      <label className="block text-[14px] font-medium text-gray-700 mb-1">Business address</label>
      <select
        value={formData.business_address || ""}
        onChange={(e) => setFormData({ ...formData, business_address: e.target.value })}
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-500
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-4"
      >
        <option>Registered business address</option>
        <option value="operational">Operational address</option>
      </select>

      <label className="block text-[14px] font-medium text-gray-700 mb-1">Type</label>
      <select
        value={formData.business_type || ""}
        onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-4"
      >
        <option>Type of business</option>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
        <option value="partnership">Partnership</option>
      </select>

      <label className="block text-[14px] font-medium text-gray-700 mb-1">Address</label>

      <input
        placeholder="Address line 1"
        value={formData.address_line1 || ""}
        onChange={(e) => setFormData({ ...formData, address_line1: e.target.value })}
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-3"
      />
{errors.address_line1 && <p className="text-red-500 text-xs">{errors.address_line1}</p>}
      <input
        placeholder="Address line 2"
        value={formData.address_line2 || ""}
        onChange={(e) => setFormData({ ...formData, address_line2: e.target.value })}
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-3"
      />

      <input
        placeholder="City"
        value={formData.city || ""}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-3"
      />

      <input
        placeholder="Zip"
        value={formData.zip || ""}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-4"
      />
      {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}

      <button
  onClick={handleSave}
  className="w-full h-[44px] mt-2 bg-[#4A3AFF] 
text-white text-sm font-medium rounded-lg 
hover:bg-[#4338CA] transition"
>
  Save →
</button>
    </div>
  );
}