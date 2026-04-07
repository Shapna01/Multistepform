export default function Sidebar({ step, setStep, completedSteps }) {
  const renderCircle = (num) => {
    if (completedSteps.includes(num)) {
      return "✔";
    }
    return num;
  };

  const getStyle = (num) => {
    if (completedSteps.includes(num)) {
      return "bg-green-500 text-black-300 border-green-500";
    }
    if (step === num) {
      return "bg-blue-600 text-white border-blue-600";
    }
    return "bg-white text-gray-500 border-gray-300";
  };

  return (
    <div className="relative w-[300px] pl-12 ">
      <div className="absolute left-10 top-0 bottom-0 w-[42px] rounded-full bg-gray-300"></div>

      <div className="relative flex items-start mb-10 cursor-pointer" onClick={() => setStep(1)}>
        <div className={`absolute left-0 w-7 h-7 flex items-center justify-center rounded-full border ${getStyle(1)}`}>
          {renderCircle(1)}
        </div>
        <div className="ml-12">
          <p className="font-semibold">Business structure</p>
          <p className="text-sm text-gray-400">Business representative</p>
          <p className="text-sm text-gray-400">Business details</p>
        </div>
      </div>

      <div className="relative flex items-center mb-10 cursor-pointer" onClick={() => setStep(2)}>
        <div className={`absolute left-0 w-7 h-7 flex items-center justify-center rounded-full border ${getStyle(2)}`}>
          {renderCircle(2)}
        </div>
        <p className="ml-12 font-semibold">Bank details</p>
      </div>

      <div className="relative flex items-center mb-10 cursor-pointer" onClick={() => setStep(3)}>
        <div className={`absolute left-0 w-7 h-7 flex items-center justify-center rounded-full border ${getStyle(3)}`}>
          {renderCircle(3)}
        </div>
        <p className="ml-12 font-semibold">Account Holder Details</p>
      </div>

      <div className="relative flex items-center cursor-pointer" onClick={() => setStep(4)}>
        <div className={`absolute left-0 w-7 h-7 flex items-center justify-center rounded-full border ${getStyle(4)}`}>
          {renderCircle(4)}
        </div>
        <p className="ml-12 font-semibold">Overview</p>
      </div>
    </div>
  );
}