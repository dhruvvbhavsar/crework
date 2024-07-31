import React from 'react';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isValid, children, ...props }) => (
  <button
    className={`bg-gradient-to-b from-[#4C38C2] to-[#2F2188] p-4 rounded-lg text-white ${
      isValid ? "" : "opacity-30"
    }`}
    disabled={!isValid}
    {...props}
  >
    {children}
  </button>
);

export default SubmitButton;