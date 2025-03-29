const CustomInput = ({ label, type = "text", ...props }) => {
  return (
    <div
      className={`${
        type === "textarea" ? "flex flex-col gap-2" : "flex items-center gap-4"
      }`}
    >
      <label className="text-gray-600 font-medium whitespace-nowrap min-w-[150px]">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          {...props}
          className="w-full border-b-2 border-gray-200 focus:border-pink-500 outline-none p-2 resize-none min-h-[120px] bg-transparent transition-colors"
        />
      ) : (
        <input
          type={type}
          {...props}
          className="flex-1 border-b-2 border-gray-200 focus:border-pink-500 outline-none p-2 bg-transparent transition-colors"
        />
      )}
    </div>
  );
};

export default CustomInput;
