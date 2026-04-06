"use client";

export default function BankDetails({ formData, setFormData, next }) {
  const handleNext = () => {
    if (!formData.account_holder_name) return alert("Please enter account holder name");
    if (!formData.account_number) return alert("Please enter account number");
    if (!formData.bank_name) return alert("Please enter bank name");
    if (!formData.currency) return alert("Please select currency");
    if (!formData.bank_country) return alert("Please select bank country");
    if (!formData.iban) return alert("Please enter IBAN");
    if (formData.iban !== formData.confirm_iban) return alert("IBAN does not match");
    next();
  };

  const handleSave = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    next();
  };

  const inputClass ="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]";

  return (
    <div className="w-[410px] space-y-5">
      <label className="block text-sm font-medium">Account Holder Name</label>
      <input
        className={inputClass}
        placeholder="Enter account holder name"
        value={formData.account_holder_name || ""}
        onChange={(e) => setFormData({ ...formData, account_holder_name: e.target.value })}
      />

      <label className="block text-sm font-medium">Account Number</label>
      <input
        className={inputClass}
        placeholder="Enter account number"
        value={formData.account_number || ""}
        onChange={(e) => setFormData({ ...formData, account_number: e.target.value })}
      />

      <label className="block text-sm font-medium">Bank Name</label>
      <input
        className={inputClass}
        placeholder="Enter bank name"
        value={formData.bank_name || ""}
        onChange={(e) => setFormData({ ...formData, bank_name: e.target.value })}
      />

      <label className="block text-sm font-medium">Currency</label>
      <select
        className={inputClass}
        value={formData.currency || ""}
        onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
      >
        <option value="">Select currency</option>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
      </select>

      <label className="block text-sm font-medium">Country of bank account</label>
      <select
        className={inputClass}
        value={formData.bank_country || ""}
        onChange={(e) => setFormData({ ...formData, bank_country: e.target.value })}
      >
        <option value="">Select country</option>
        <option value="ie">Ireland</option>
        <option value="us">United States</option>
        <option value="in">India</option>
      </select>

      <label className="block text-sm font-medium">IBAN</label>
      <input
        className={inputClass}
        placeholder="Enter your IBAN"
        value={formData.iban || ""}
        onChange={(e) => setFormData({ ...formData, iban: e.target.value })}
      />

      <label className="block text-sm font-medium">Confirm IBAN</label>
      <input
        className={inputClass}
        placeholder="Confirm your IBAN"
        value={formData.confirm_iban || ""}
        onChange={(e) => setFormData({ ...formData, confirm_iban: e.target.value })}
      />

      <button
        onClick={handleSave}
        className="w-full bg-[#4A3AFF] text-white py-3 rounded-lg"
      >
        Save →
      </button>
    </div>
  );
}