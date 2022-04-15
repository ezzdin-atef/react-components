import React from 'react';

export const HelperText: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...other
}) => {
  return (
    <p className={`${className} mt-2 text-sm text-gray-500`} {...other}>
      {children}
    </p>
  );
};
