import React, { useState } from 'react';
import Accordion from '../UiElements/Accordion';

interface Field {
  name: string;
  value: string;
}

const DynamicAccordionForm: React.FC = () => {
  const [accounts, setAccounts] = useState<string[]>(['Account 1']);
  const [fields, setFields] = useState([
    { email: 'Teslasdeveloper@gmail.com', password: 'aD@vin33' },
    { email: 'Teslasdeveloper@gmail.com', password: 'aD@vin33' },
  ]);

  const handleAddAccount = () => {
    const newAccountIndex = accounts.length + 1;
    setAccounts([...accounts, `Account ${newAccountIndex}`]);
  };
  const handleAddField = () => {};
  const handleInputChange = (index : number, key : string, value : any) => {
    setFields((prev) =>
      prev.map((field, i) =>
        i === index ? { ...field, [key]: value } : field
      )
    );
  };

  const handleKeyChange = (index: number, newKey: string, value: any) => {
    setFields((prev: any) =>
      prev.map((field: any, i: number) => {
        if (i === index) {
          // Replace the entire object with a new one containing the updated key-value pair
          return { ...field, [newKey]: value };
        }
        return field;
      })
    );
  };

  const addField = () => {
    setFields((prev) => [...prev, { email: '', password: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Accounts Data:', accounts);
  };

  return (
    <div className="rounded-sm border h-fit w-[40%] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Accounts</h3>
      </div>
      <form onSubmit={handleSubmit} className="p-6.5 space-y-6">
        {fields.map((field: any, index) => (
          <Accordion key={index} title={`Account ${index + 1}`}>
            <div className="grid gap-4">
              {Object.keys(field).map((key) => (
                <div key={key} className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={key}
                    onChange={(e) =>
                        handleKeyChange(index, e.target.value, field[key])
                      }
                      
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Value"
                    value={field[key]}
                    onChange={(e) =>
                        handleInputChange(index, key, e.target.value)
                      }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              ))}
            </div>
          </Accordion>
        ))}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddAccount}
            className="flex px-4 justify-center rounded bg-green-500 p-2 font-medium text-white hover:bg-green-600"
          >
            Add Account
          </button>
          <button
            type="button"
            onClick={() => handleAddField()}
            className="flex px-4 justify-center rounded bg-blue-500 p-2 font-medium text-white hover:bg-blue-600"
          >
            Add Field
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicAccordionForm;
