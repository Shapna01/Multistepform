export default function Sidebar({ step }) {
  return (
    <div className="w-1/3 bg-gray-50 p-6">
      <p className={step === 1 ? "font-bold text-blue-600" : ""}>
        1. Business Structure
      </p>
      <p className={step === 2 ? "font-bold text-blue-600" : ""}>
        2. Bank Details
      </p>
      <p className={step === 3 ? "font-bold text-blue-600" : ""}>
        3. 2 Step Auth
      </p>
      <p className={step === 4 ? "font-bold text-blue-600" : ""}>
        4. Overview
      </p>
    </div>
  );
}export default function Sidebar({ step }) {
  const steps = [
    { id: 1, title: "Business structure", subtitle: "Business representative\nBusiness details" },
    { id: 2, title: "Bank details" },
    { id: 3, title: "2 step authentication" },
    { id: 4, title: "Overview" }
  ];

  return (
    <div className="w-64 pr-10">
      {steps.map((s) => (
        <div key={s.id} className="flex items-start gap-4 mb-8">
          <div
            className={`w-7 h-7 flex items-center justify-center rounded-full border 
              ${step === s.id ? "bg-blue-600 text-white border-blue-600" : "text-gray-500 border-gray-300"}
            `}
          >
            {s.id}
          </div>

          <div>
            <p className={`${step === s.id ? "font-semibold text-black" : "text-gray-600"}`}>
              {s.title}
            </p>

            {s.subtitle && (
              <p className="text-xs text-gray-400 whitespace-pre-line leading-4">
                {s.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}