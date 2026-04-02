export default function BusinessDetails({
  formData,
  setFormData,
  next,
  back,
}) {
  return (
    <div>
      

      <label className="block mb-2 text-sm font-medium">
        VAT
      </label>
      <input
        placeholder="VAT number"
        value={formData.vat_number || ""}
        onChange={(e) =>
          setFormData({ ...formData, vat_number: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <label className="block mb-2 text-sm font-medium">
        Industry
      </label>
      <select
        value={formData.industry || ""}
        onChange={(e) =>
          setFormData({ ...formData, industry: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      >
        <option value="">Please select your industry...</option>
        <option value="it">IT & Software</option>
        <option value="finance">Finance</option>
        <option value="health">Healthcare</option>
        <option value="education">Education</option>
      </select>

      <label className="block mb-2 text-sm font-medium">
        Organization website
      </label>
      <input
        placeholder="www.example.com"
        value={formData.website || ""}
        onChange={(e) =>
          setFormData({ ...formData, website: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <button
        onClick={next}
        className="w-full bg-[#4A3AFF] text-white py-3 rounded"
      >
        Continue →
      </button>
    </div>
  );
}