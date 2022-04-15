import React from 'react';

export const Textarea: React.FC<React.HTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  children,
  ...other
}) => {
  return (
    <textarea
      className={`${className} block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
      {...other}
    >
      {children}
    </textarea>
  );
};
