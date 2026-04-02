export default function Overview({ formData, back }) {

  const handleSubmit = async () => {
    const res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="border border-red-200 bg-red-50 p-4 rounded mb-6">
        <p className="font-medium text-red-600">
          Business details
        </p>
        <p className="text-sm text-red-500 mb-3">
          Missing required business information
        </p>

        <button className="text-[#4A3AFF] font-medium">
          Add
        </button>
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