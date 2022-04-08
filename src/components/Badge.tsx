import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  red?: boolean;
  green?: boolean;
  yellow?: boolean;
  light?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const BaseBadge: React.FC<BadgeProps> = ({ className, children, ...other }) => {
  return (
    <div
      className={`${className} inline-block rounded-lg px-3 py-1 text-sm font-medium`}
      {...other}
    >
      {children}
    </div>
  );
};

export const Badge: React.FC<BadgeProps> = ({
  red,
  green,
  yellow,
  light,
  className,
  ...other
}) => {
  if (green) {
    return (
      <BaseBadge
        className={`${className} bg-green-700 text-white `}
        {...other}
      ></BaseBadge>
    );
  } else if (yellow) {
    return (
      <BaseBadge
        className={`${className} bg-yellow-400 text-white `}
        {...other}
      ></BaseBadge>
    );
  } else if (red) {
    return (
      <BaseBadge
        className={`${className} bg-red-700 text-white `}
        {...other}
      ></BaseBadge>
    );
  } else if (light) {
    return (
      <BaseBadge
        className={`${className}  border border-gray-300 bg-white text-gray-900 `}
        {...other}
      ></BaseBadge>
    );
  } else {
    return (
      <BaseBadge
        className={`${className} bg-blue-700 text-white `}
        {...other}
      ></BaseBadge>
    );
  }
};
