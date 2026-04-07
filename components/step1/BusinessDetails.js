import { useState } from "react";
export default function BusinessDetails({
  formData,
  setFormData,
  next,
  back,
}) {

  const [errors, setErrors] = useState({});
  const validate = () => {
  let err = {};

  if (!formData.pan_number?.trim()) {
    err.pan_number = "PAN is required";
  }

  setErrors(err);
  return Object.keys(err).length === 0;
};

  const handleSave = () => {
  if (!validate()) return;

  localStorage.setItem("formData", JSON.stringify(formData));
  next();
};
  return (
    <div className="w-[410px] space-y-5">
      

      <label className="block text-[14px] font-medium text-gray-700 mb-1">
        PAN
      </label>
      <input
        placeholder="PAN number"
        value={formData.pan_number || ""}
        onChange={(e) =>
          setFormData({ ...formData, pan_number: e.target.value })
        }
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-4"
      />
{errors.pan_number && (
  <p className="text-red-500 text-xs">{errors.pan_number}</p>
)}
      <label className="block text-[14px] font-medium text-gray-700 mb-1">
        Industry
      </label>
      <select
        value={formData.industry || ""}
        onChange={(e) =>
          setFormData({ ...formData, industry: e.target.value })
        }
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-4"
      >
        <option value="">Please select your industry...</option>
        <option value="it">IT & Software</option>
        <option value="finance">Finance</option>
        <option value="health">Healthcare</option>
        <option value="education">Education</option>
      </select>

      <label className="block text-[14px] font-medium text-gray-700 mb-1">
        Organization website
      </label>
      <input
        placeholder="www.example.com"
        value={formData.website || ""}
        onChange={(e) =>
          setFormData({ ...formData, website: e.target.value })
        }
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-4"
      />

      <button
  onClick={handleSave}
  className="w-full bg-[#4A3AFF] text-white py-3 rounded"
>
  Save →
</button>
    </div>
  );
}