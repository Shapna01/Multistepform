export default function BankDetails({
  formData,
  setFormData,
  next,
  back,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        Currency
      </label>
      <select
        value={formData.currency || ""}
        onChange={(e) =>
          setFormData({ ...formData, currency: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      >
        <option value="">Select your currency...</option>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
      </select>

      <label className="block mb-2 text-sm font-medium">
        Country of bank account
      </label>
      <select
        value={formData.bank_country || ""}
        onChange={(e) =>
          setFormData({ ...formData, bank_country: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      >
        <option value="">Country</option>
        <option value="ie">Ireland</option>
        <option value="us">United States</option>
        <option value="in">India</option>
      </select>

      <label className="block mb-2 text-sm font-medium">
        IBAN
      </label>
      <input
        placeholder="Enter your IBAN"
        value={formData.iban || ""}
        onChange={(e) =>
          setFormData({ ...formData, iban: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <label className="block mb-2 text-sm font-medium">
        Confirm IBAN
      </label>
      <input
        placeholder="Confirm IBAN"
        value={formData.confirm_iban || ""}
        onChange={(e) =>
          setFormData({ ...formData, confirm_iban: e.target.value })
        }
        className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
      />

      <div className="flex justify-between">
        <button
          onClick={back}
          className="px-4 py-2 border rounded"
        >
          ← Back
        </button>

        <button
          onClick={next}
          className="px-6 py-2 bg-[#4A3AFF] text-white rounded"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}