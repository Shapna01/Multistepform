"use client";

export default function Overview({ formData, goToStep }) {
  const isBusinessComplete =
    formData.business_type &&
    formData.first_name &&
    formData.rep_email;

  const isBankComplete = formData.iban;

  const isAuthComplete = true;

  const allComplete =
    isBusinessComplete && isBankComplete && isAuthComplete;

  const handleSubmit = async () => {
  try {
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      rep_email: formData.rep_email,
      phone: formData.phone,
      vat_number: formData.vat_number,
      industry: formData.industry,
      website: formData.website,
      currency: formData.currency,
      bank_country: formData.bank_country,
      iban: formData.iban,
    };

    const res = await fetch("/api/business_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Error ❌");
      return;
    }

    alert("Saved successfully ✅");
  } catch (error) {
    alert("Server error ❌");
  }
};
  return (
    <div className="w-[410px] space-y-6">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${isBusinessComplete ? "bg-green-500" : "bg-gray-300"}`}>
            ✓
          </div>
          <p className="text-sm">Business structure</p>
        </div>
        {!isBusinessComplete && (
          <button onClick={() => goToStep(1)} className="text-sm text-[#4A3AFF]">
            Add
          </button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${isBankComplete ? "bg-green-500" : "bg-gray-300"}`}>
            ✓
          </div>
          <p className="text-sm">Bank details</p>
        </div>
        {!isBankComplete && (
          <button onClick={() => goToStep(2)} className="text-sm text-[#4A3AFF]">
            Add
          </button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs bg-green-500">
            ✓
          </div>
          <p className="text-sm">2 step authentication</p>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!allComplete}
        className={`w-full h-[48px] rounded-lg text-white text-sm font-medium transition
        ${
          allComplete
            ? "bg-gradient-to-r from-[#7B61FF] to-[#5B4DFF]"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Submit →
      </button>

    </div>
  );
}