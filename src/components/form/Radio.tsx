import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

export const Radio: React.FC<React.HTMLAttributes<HTMLInputElement>> = ({
  children,
  className,
  id,
  ...other
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        id={id}
        type="radio"
        className={`${className} h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300`}
        aria-labelledby={id}
        aria-describedby={id}
        {...other}
      />
      <label
        htmlFor={id}
        className="ml-2 block text-sm font-medium text-gray-900"
      >
        {children}
      </label>
    </div>
  );
};

interface listInterface {
  label: string;
  description: React.ReactNode | string;
}

export interface CustomRadioProps
  extends React.HTMLAttributes<HTMLInputElement> {
  list: listInterface[];
  value?: listInterface;
  changeValue: (selected: listInterface) => void;
  className?: string;
  checkedColor?: string;
  activeColor?: string;
}

export const CustomRadio: React.FC<CustomRadioProps> = ({
  list,
  value,
  className,
  checkedColor = 'bg-sky-900',
  activeColor = 'ring-offset-sky-300',
  changeValue,
}) => {
  const [selected, setSelected] = useState(value ? value : list[0]);

  const handleChange = (selected: listInterface) => {
    changeValue(selected);
    setSelected(selected);
  };

  return (
    <div className={`${className} mx-auto w-full max-w-md`}>
      <RadioGroup value={selected} onChange={handleChange}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-2">
          {list.map((item) => (
            <RadioGroup.Option
              key={item.label}
              value={item}
              className={({ active, checked }) =>
                `${
                  active
                    ? `ring-2 ring-white ring-opacity-60 ring-offset-2 ${activeColor}`
                    : ''
                }
                  ${
                    checked
                      ? `${checkedColor} bg-opacity-75 text-white`
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.label}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? 'text-sky-100' : 'text-gray-500'
                          }`}
                        >
                          {item.description}
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

const CheckIcon: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
    <path
      d="M7 13l3 3 7-7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
