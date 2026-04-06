export default function Sidebar({ step ,setStep}) {
  return (
    <div className="relative w-[300px] pl-12 pt-10">
      <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-gray-300"></div>

      <div className="relative flex items-start mb-10 cursor-pointer"
  onClick={() => setStep(1)}>
        <div className={`absolute left-0 w-8 h-8 flex items-center justify-center rounded-full border ${
          step === 1 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-500 border-gray-300"
        }`}>
          1
        </div>
        <div className="ml-12">
          <p className="font-semibold">Business structure</p>
          <p className="text-sm text-gray-400">Business representative</p>
          <p className="text-sm text-gray-400">Business details</p>
        </div>
      </div>

      <div className="relative flex items-center mb-10 cursor-pointer"
  onClick={() => setStep(2)}>
        <div className={`absolute left-0 w-8 h-8 flex items-center justify-center rounded-full border ${
          step === 2 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-500 border-gray-300"
        }`}>
          2
        </div>
        <p className="ml-12 font-semibold">Bank details</p>
      </div>

      <div className="relative flex items-center mb-10 cursor-pointer"
  onClick={() => setStep(3)}>
        <div className={`absolute left-0 w-8 h-8 flex items-center justify-center rounded-full border ${
          step === 3 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-500 border-gray-300"
        }`}>
          3
        </div>
        <p className="ml-12 font-semibold">Account Holder Details</p>
      </div>

      <div className="relative flex items-center cursor-pointer"
  onClick={() => setStep(4)}>
        <div className={`absolute left-0 w-8 h-8 flex items-center justify-center rounded-full border ${
          step === 4 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-500 border-gray-300"
        }`}>
          4
        </div>
        <p className="ml-12 font-semibold">Overview</p>
      </div>
    </div>
  );
}