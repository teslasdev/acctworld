import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md shadow-sm">
      <button
        className="w-full flex justify-between items-center px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700 font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.675l3.71-3.485a.75.75 0 011.04 1.08l-4 3.75a.75.75 0 01-1.04 0l-4-3.75a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

export default Accordion;
