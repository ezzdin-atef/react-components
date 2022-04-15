import React from 'react';
import { Label } from './Label';

export interface UploadFileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  note?: string;
  label?: string;
}

export const UploadFile: React.FC<UploadFileProps> = ({
  className,
  id,
  note,
  label,
  ...other
}) => {
  return (
    <>
      <Label className="mb-2" htmlFor={id}>
        {label}
      </Label>
      <input
        className={`${className} block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-transparent focus:outline-none`}
        aria-describedby={id + '_help'}
        id={id}
        type="file"
        {...other}
      />
      {note && (
        <div className="mt-1 text-sm text-gray-500" id={id + '_help'}>
          {note}
        </div>
      )}
    </>
  );
};
