import { useEffect, useState } from 'react';
import Accordion from '../UiElements/Accordion';

interface KeyValueObject {
  [key: string]: string;
}

const DynamicAccordionForm = ({ textInput, setFields }: any) => {
  const [textOutput, setTextOutput] = useState('');

  useEffect(() => {
    const accountFormats = textInput.map((field: any) => field.accountFormat);
    const text = handleConvertToText(accountFormats);
    setTextOutput(text);
  }, [textInput]);

  const handleConvertToText = (converted: KeyValueObject[]): string => {
    return converted
      .map((obj) =>
        Object.entries(obj)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n'),
      )
      .join('\n\n');
  };

  return (
    <div className="rounded-sm border h-fit w-full border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Accounts</h3>
      </div>
      <div className="p-6.5 space-y-6">
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Take Note</p>
              <p className="text-sm">
                1. Make sure you save every account input
              </p>
              <p className="text-sm">2. Follow the instruction of the input</p>
              <p className="text-sm">
                3. The input must be the same on each accounts.
              </p>
              <p className="text-sm mt-2">
                Please note!! As many accounts you added as number of piece of
                the social media
              </p>
            </div>
          </div>
        </div>

        <Accordion fields={textOutput} setFields={setFields} />
      </div>
    </div>
  );
};

export default DynamicAccordionForm;
