import React from "react";

function CustomInput({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  onChange,
  rows,
}) {
  if (type === "textarea") {
    return (
      <div className="space-y-2">
        <label htmlFor={name} className="text-gray-700">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows || 5}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default CustomInput;
