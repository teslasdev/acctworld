import { useState } from 'react';
import { usePayementMutation } from '../api/postToken';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { generatePaymentReference, openSmallTab } from './helper.ts/functions';
import Alerts from './UiElements/Alerts';
import { useAnalysticsQuery } from '../api/fetch';

const AddFunds = () => {
  const [amount, setAmount] = useState('');
  const { data , refetch } = useAnalysticsQuery();
  const [payment, { isLoading }] = usePayementMutation();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const handleInitiate = async () => {
    const ref = generatePaymentReference();
    await payment({ amount, ref })
      .unwrap()
      .then((data: any) => {
        if (data.success) {
          setMessage('Processing your payment...Please wait');
          setStatus('warning');
          const url = data.data.responseBody.checkoutUrl;
          openSmallTab(url, refetch);
        }
      })
      .catch((err: any) => {
        console.log(err);
        setMessage('Error,Try Again or contact admin');
        setStatus('error');
      });
  };
  return (
    <>
      <Breadcrumb pageName="Add Funds" />

      <div className='flex justify-between items-center w-full flex-col'>
       
        <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 max-w-lg p-6">
        <Alerts status={status} message={message} />
          <label
            className="my-3 block text-sm font-medium text-black dark:text-white"
            htmlFor="phoneNumber"
          >
            Enter Amount
          </label>
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="number"
            name="amount"
            id="amount"
            value={amount}
            placeholder="Amount"
            defaultValue="Amount"
            onChange={(e: any) => setAmount(e.target.value)}
          />
        </div>

        <button
          disabled={amount == '' ? true : false}
          onClick={handleInitiate}
          className="px-4 py-2 my-6 bg-[#d50e3c] text-white rounded hover:bg-[#d50e3c] focus:outline-none"
        >
          {isLoading ? 'Processing....' : 'Make Payment'}
        </button>
        {/* <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/iiHl_50dhgU"
                  title="How to make a deposit on RediProfiles.com"
                  allowFullScreen={true}
                ></iframe> */}
      </div>
    </>
  );
};

export default AddFunds;
