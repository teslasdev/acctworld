import React, { useEffect, useState } from 'react';

interface AccordionProps {
  fields: string;
  setFields: (value: any) => void;
}

interface KeyValueObject {
  [key: string]: string;
}

const Accordion: React.FC<AccordionProps> = ({ fields, setFields }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [message, setMsg] = useState('Save');
  const [account, setCount] = useState(0);

  const handleConvert = () => {
   
    const blocks = input.split(/\n\s*\n/);
    // Convert each block into an object
    const converted: KeyValueObject[] = blocks.map((block) => {
      const lines = block.split('\n');
      const obj: KeyValueObject = {};

      lines.forEach((line) => {
        const [key, value] = line.split(':').map((item) => item.trim());
        if (key && value) {
          obj[key] = value; // Dynamically create the key-value pairs
        }
      });

      return obj;
    });

    setFields(converted);
    setMsg('Saved');
    setCount(converted.length)
  };

  setTimeout(() => {
    setMsg('Save');
  }, 6000);

  useEffect(() => {
    setInput(fields)
  } , [fields])

  
  return (
    <div className="border rounded-md shadow-sm">
      <div
        
        className="w-full flex justify-between items-center px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
        
      >
        <span className="text-gray-700 font-medium">{'Account(s)'}</span>
        {/* <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
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
        </svg> */}
      </div>

      <div className="p-4 bg-white">
        <div className="grid gap-4">
          <textarea
            className="w-full text-[#010101] p-2 outline-none border border-gray-300 rounded-md"
            rows={10}
            placeholder={`Enter data in this format:\nemail: teslasdeveloper\nlink: https://am.com\nurl: https://am.com\n\nSeparate each block with a blank line.`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <button
            type="button"
            onClick={() => handleConvert()}
            className="flex px-4 justify-center rounded bg-green-500 p-2 font-medium text-white hover:bg-green-600"
          >
            {message}
          </button>

          <span>{account} account(s)</span>
         
        </div>
      </div>
    </div>
  );
};

export default Accordion;
