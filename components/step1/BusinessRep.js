import { useState } from "react";
export default function BusinessRep({
  
  formData,
  setFormData,
  next,
  back,
}) {
  const [errors, setErrors] = useState({});

  const validate = () => {
  let err = {};

  if (!formData.last_name?.trim()) {
  err.last_name = "Required";
} else if (formData.last_name.trim().length > 3) {
  err.last_name = "Max 3 characters allowed";
}


  if (!formData.rep_email?.trim()) {
    err.rep_email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.rep_email)) {
    err.rep_email = "Invalid email";
  }

  if (!formData.rep_address1?.trim()) {
    err.rep_address1 = "Required";
  }

  if (!formData.rep_zip?.trim()) {
    err.rep_zip = "Required";
  } else if (!/^\d{6}$/.test(formData.rep_zip)) {
    err.rep_zip = "Must be 6 digits";
  }
  
  if (!formData.phone?.trim()) {
  err.phone = "Required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
  err.phone = "Must be exactly 10 digits";
  }
  setErrors(err);
  return Object.keys(err).length === 0;
};
  const handleSave = () => {
  if (!validate()) return;

  localStorage.setItem("formData", JSON.stringify(formData));
  next();
};
  return (
    <div className="w-[410px] space-y-5">
      <label className="block text-[14px] font-medium text-gray-700 mb-1">
        Name
      </label>

      <div className="flex gap-3 mb-4">
        <input
          placeholder="First name"
          value={formData.first_name || ""}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
        />

        <input
          placeholder="Last name"
          value={formData.last_name || ""}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
        />
        {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
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
        className="w-full  h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-4"
      />
      {errors.rep_email && <p className="text-red-500 text-xs">{errors.rep_email}</p>}

      <label className="block mb-2 text-sm font-medium">
        Address
      </label>

      <input
        placeholder="Address line 1"
        value={formData.rep_address1 || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_address1: e.target.value })
        }
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-3"
      />
      {errors.rep_address1 && <p className="text-red-500 text-xs">{errors.rep_address1}</p>}

      <input
        placeholder="Address line 2"
        value={formData.rep_address2 || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_address2: e.target.value })
        }
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-3"
      />

      <input
        placeholder="City"
        value={formData.rep_city || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_city: e.target.value })
        }
        className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-3"
      />

      <input
        placeholder="Zip"
        value={formData.rep_zip || ""}
        onChange={(e) =>
          setFormData({ ...formData, rep_zip: e.target.value })
        }
        className="w-full  h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF] mb-4"
      />
      {errors.rep_zip && <p className="text-red-500 text-xs">{errors.rep_zip}</p>}

      <label className="block mb-2 text-sm font-medium">
        Phone
      </label>

      <div className="flex gap-2 mb-6">
        <select
          value={formData.country_code || "+353"}
          onChange={(e) =>
            setFormData({ ...formData, country_code: e.target.value })
          }
          className="h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-2 text-sm focus:outline-none focus:ring-1 
focus:ring-[#4A3AFF] w-[90px]border border-gray-300 p-3 rounded w-[100px] focus:outline-none focus:ring-2 focus:ring-[#4A3AFF]"
        >
          <option value="+353">+353</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
        </select>

        <input
          placeholder="+1 (555) 000-0000"
          value={formData.phone || ""}
          onChange={(e) =>
          setFormData({
          ...formData,
          phone: e.target.value.replace(/\D/g, "").slice(0, 10)
        })
} 

          className="w-full h-[44px] bg-[#F9FAFB] border border-gray-200 
rounded-lg px-3 text-sm text-gray-700
placeholder:text-gray-400
focus:outline-none focus:ring-1 focus:ring-[#4A3AFF]"
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
      </div>

      <button
  onClick={handleSave}
  className="w-full bg-[#4A3AFF] text-white py-3 rounded"
>
  Save →
</button>
    </div>
  );
}