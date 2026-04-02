export default function TwoStepAuth({ next, back }) {
  return (
    <div>

      <p className="text-gray-500 mb-6">
        Choose how you want to receive security codes.
      </p>

      <div className="space-y-4 mb-6">
        <div className="border p-4 rounded cursor-pointer hover:border-[#4A3AFF]">
          <p className="font-medium">Use SMS</p>
        </div>

        <div className="border p-4 rounded cursor-pointer hover:border-[#4A3AFF]">
          <p className="font-medium">Use an authenticator app</p>
        </div>
      </div>
 <button
          onClick={next}
        className="w-full bg-[#4A3AFF] text-white py-3 rounded"
        >
          Submit
        </button>
    </div>
  );
}