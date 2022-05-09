import React from 'react';

export const ToggleSwitch: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ className, children, id, ...other }) => {
  return (
    <label
      htmlFor={id}
      className={`relative inline-flex cursor-pointer items-center gap-2`}
    >
      <input type="checkbox" id={id} className="peer sr-only" {...other} />
      <div
        className={`${className} peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:right-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800`}
      ></div>
      <span className="text-sm font-medium text-gray-900">{children}</span>
    </label>
  );
};
