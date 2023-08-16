import React from "react";
type inputProps = {
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  svg?: JSX.Element;
};

const FormInput = ({
  label,
  type,
  value,
  placeholder,
  onChange,
  className,
  svg,
}: inputProps) => {
  return (
    <div className="w-full">
      <p className="mt-4 text-left">{label}</p>
      <input
        placeholder={placeholder}
        className={`w-full lg:h-[44] px-[14px] py-[10px] rounded-lg border-[1px] border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] mt-2 focus:invalid:border-red-500 focus:invalid:ring-red-500 ${className} ${svg}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
