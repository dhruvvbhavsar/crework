import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => (
  <div>
    {label && <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}
    <input
      className="bg-[#EBEBEB] w-full py-4 px-3 rounded-lg placeholder:text-xl text-[#606060] placeholder:text-[#999999] border focus:outline-[#999999] caret-[#999999]"
      {...props}
    />
  </div>
);

export default FormInput;