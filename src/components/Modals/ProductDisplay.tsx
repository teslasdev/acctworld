import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:items-center items-end justify-center  bg-black bg-opacity-50">
      <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg w-full sm:w-1/2 max-w-lg">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#d50e3c] text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="p-4">{children}</div>
        
      </div>
    </div>
  );
};

export default Modal;
