export default function BusinessRep({
  formData,
  setFormData,
  next,
  back,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        Name
      </label>

      <div className="flex gap-3 mb-4">
        <input
          placeholder="First name"
          value={formData.first_name || ""}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
        />

        <input
          placeholder="Last name"
          value={formData.last_name || ""}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
        />
      </div>

      <label className="block mb-2 text-sm font-medium">
        Email
      </label>

      <input
        type="email"
        placeholder="Your email"
        value={formData.rep_email || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_email: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <label className="block mb-2 text-sm font-medium">
        Address
      </label>

      <input
        placeholder="Address line 1"
        value={formData.rep_address1 || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_address1: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <input
        placeholder="Address line 2"
        value={formData.rep_address2 || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_address2: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <input
        placeholder="City"
        value={formData.rep_city || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_city: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <input
        placeholder="Zip"
        value={formData.rep_zip || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_zip: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <label className="block mb-2 text-sm font-medium">
        Phone
      </label>

      <div className="flex gap-2 mb-6">
        <select
          value={formData.country_code || "+353"}
          onChange={(e) =>
            setFormData({ ...formData, country_code: e.target.value })
          }
          className="border border-gray-300 p-3 rounded w-[100px] focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
        >
          <option value="+353">+353</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
        </select>

        <input
          placeholder="+1 (555) 000-0000"
          value={formData.phone || ""}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
        />
      </div>

      <button
        onClick={next}
        className="w-full bg-[#4A3AFF] text-white py-3 rounded"
      >
        Continue →
      </button>
    </div>
  );
}