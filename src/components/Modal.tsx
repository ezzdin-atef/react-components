import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';

export interface ModalProps {
  title: string | React.ReactNode;
  trigger: React.ReactNode;
  children: (handleClose: () => void) => React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <span onClick={handleOpen}>{trigger}</span>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-80 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          onClose={handleClose}
          className=".shadow-xl fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex min-h-screen items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 opacity-40" />
            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-xl font-medium leading-6 text-gray-900">
                  {title}
                </Dialog.Title>
                <FaTimes
                  className="cursor-pointer text-sm"
                  onClick={handleClose}
                />
              </div>
              <div className="mt-3">{children(handleClose)}</div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export const ModelBody: React.FC = ({ children }) => {
  return <div className="my-4">{children}</div>;
};
