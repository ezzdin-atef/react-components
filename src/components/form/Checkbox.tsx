import React from 'react';

export const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ children, className, id, ...other }) => {
  return (
    <div className="flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={id}
          aria-describedby={id}
          type="checkbox"
          className={`${className} focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 `}
          {...other}
        />
      </div>
      <div className="text-sm ltr:ml-3 rtl:mr-3">
        <label htmlFor={id} className="font-medium text-gray-900">
          {children}
        </label>
      </div>
    </div>
  );
};
