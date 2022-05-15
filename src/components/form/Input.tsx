import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

// TODO: add succes and error states and icon to input
export const Input: React.FC<InputProps> = ({
  className,
  children,
  error,
  ...other
}) => {
  return (
    <>
      <input
        className={`${className} block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 ${
          error
            ? 'border border-red-500 bg-red-50 text-red-900 placeholder-red-700'
            : 'border-gray-300 bg-gray-50 text-gray-900'
        }`}
        {...other}
      />
      {error && <span className="px-1 text-xs  text-red-500">{error}</span>}
    </>
  );
};
