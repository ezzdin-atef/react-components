import React from 'react';

// TODO: add succes and error states
export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  children,
  ...other
}) => {
  return (
    <label
      className={`${className} block text-sm font-medium text-gray-900`}
      {...other}
    >
      {children}
    </label>
  );
};
