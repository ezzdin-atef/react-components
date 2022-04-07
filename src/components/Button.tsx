import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  className,
  label,
  children,
  ...other
}) => {
  return (
    <button
      className={`${className} mr-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium 
      ${loading ? 'focus:ring-none disabled:opacity-70' : ''}`}
      disabled={loading}
      {...other}
    >
      {loading ? 'Loading...' : children ? children : label}
    </button>
  );
};

const Default: React.FC<ButtonProps> = ({ className, children, ...other }) => {
  return (
    <Button
      className={`${className}bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`}
      {...other}
    >
      {children}
    </Button>
  );
};

const Green: React.FC<ButtonProps> = ({ className, children, ...other }) => {
  return (
    <Button
      className={`${className}bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300`}
      {...other}
    >
      {children}
    </Button>
  );
};

const Yellow: React.FC<ButtonProps> = ({ className, children, ...other }) => {
  return (
    <Button
      className={`${className}bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300`}
      {...other}
    >
      {children}
    </Button>
  );
};

const Red: React.FC<ButtonProps> = ({ className, children, ...other }) => {
  return (
    <Button
      className={`${className}bg-red-700 text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300`}
      {...other}
    >
      {children}
    </Button>
  );
};

const Light: React.FC<ButtonProps> = ({ className, children, ...other }) => {
  return (
    <Button
      className={`${className} bg-whit border border-gray-300 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200`}
      {...other}
    >
      {children}
    </Button>
  );
};

export default {
  Default,
  Green,
  Yellow,
  Red,
  Light,
};
