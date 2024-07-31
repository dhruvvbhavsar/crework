import React from 'react';
import usePasswordVisibility from '@/hooks/usePasswordVisibility';
import { Eye, EyeOff } from '@/assets/icons';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, ...props }) => {
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <div>
      {label && <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}
      <div className="relative">
        <input
          className="w-full bg-[#EBEBEB] py-4 px-3 rounded-lg placeholder:text-xl text-[#606060] placeholder:text-[#999999] border focus:outline-[#999999] caret-[#999999]"
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <EyeOff size={24} color="#999999" />
          ) : (
            <Eye size={24} color="#999999" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;