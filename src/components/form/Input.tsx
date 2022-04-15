import React from 'react';

// TODO: add succes and error states and icon to input
export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  children,
  ...other
}) => {
  return (
    <input
      className={`${className} block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
      {...other}
    >
      {children}
    </input>
  );
};
