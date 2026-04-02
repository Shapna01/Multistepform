export default function BusinessStructureIntro({ formData, setFormData, next }) {
  return (
    <div className="max-w-2xl">


      <label className="block mb-2 text-sm font-medium">Business address</label>
      <select
        value={formData.business_address || ""}
        onChange={(e) => setFormData({ ...formData, business_address: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-6"
      >
        <option>Registered business address</option>
        <option value="operational">Operational address</option>
      </select>

      <label className="block mb-2 text-sm font-medium">Type</label>
      <select
        value={formData.business_type || ""}
        onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-8"
      >
        <option>Type of business</option>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
        <option value="partnership">Partnership</option>
      </select>

      {/* Address */}
      <label className="block mb-2 text-sm font-medium">Address</label>

      <input
        placeholder="Address line 1"
        value={formData.address_line1 || ""}
        onChange={(e) => setFormData({ ...formData, address_line1: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-4"
      />

      <input
        placeholder="Address line 2"
        value={formData.address_line2 || ""}
        onChange={(e) => setFormData({ ...formData, address_line2: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-4"
      />

      <input
        placeholder="City"
        value={formData.city || ""}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-4"
      />

      <input
        placeholder="Zip"
        value={formData.zip || ""}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        className="w-full h-12 border border-gray-300 px-3 rounded mb-8"
      />

      {/* Button */}
      <button
        onClick={next}
        className="w-full h-12 bg-[#4A3AFF] text-white rounded text-center"
      >
        Continue →
      </button>
    </div>
  );
}