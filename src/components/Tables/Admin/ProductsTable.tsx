import { Link, useNavigate } from 'react-router-dom';
import SelectGroupTwo from '../../Forms/SelectGroup/SelectGroupTwo';
import { useAnalysticsQuery, useProductsQuery } from '../../../api/fetch';
import { useState } from 'react';
import Modal from '../../Modals/ProductDisplay';
import { LuEye } from 'react-icons/lu';
import { useOrderMutation } from '../../../api/postToken';
import Alerts from '../../../pages/UiElements/Alerts';

const ProductsTable = ({ typeId }: any) => {
  const navigate = useNavigate();
  const [category, setFilter] = useState('');
  const { data: wallet } = useAnalysticsQuery();
  const { data } = useProductsQuery({ typeId, category });
  const [isModalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [details, setDetails] = useState({
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    itemCount: 0,
    accountFormat: [],
    category: {
      name: '',
    },
    type: {
      name: '',
    },
  });

  const [quantity, setQuantity] = useState(1);
  const [Tq, setTq] = useState(1);

  const increment = () => {
    if (quantity < Tq) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [order, { isLoading }] = useOrderMutation();
  const handleOrder = async () => {
    const data = {
      id: details.id,
      name: details.name,
      imageUrl: details.imageUrl,
      qty: quantity,
      price: parseInt(details.price) * quantity,
    };
    await order(data)
      .unwrap()
      .then((data: any) => {
        setStatus('success');
      })
      .catch((err: any) => {
        console.log(err);
        setStatus('error');
        setMessage('An Error Occurred, Try Again');
      });
  };

  setTimeout(() => {
    if (status == 'error') {
      setMessage('');
      setStatus('');
    }
  }, 3000);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-[20%] flex-col gap-5.5 p-6.5">
        <SelectGroupTwo setFilter={setFilter} />
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="md:w-[60%] w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Package
              </th>
              <th className="md:w-[10%] py-4 px-4 font-medium text-black dark:text-white">
                Available
              </th>
              <th className="md:w-[20%] py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="py-4 md:w-[10%] px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.products.map((packageItem: any, key: number) => {
              return (
                <tr key={key}>
                  <td className="border-b  md:w-[60%] w-fit border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="w-[40px] h-[40px] bg-white rounded-[8px]">
                        <img
                          src={packageItem.imageUrl ??  `https://acctworld-server.onrender.com` +packageItem.type.imageUrl}
                          alt=""
                          className="w-full object-cover h-full"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium text-black dark:text-white">
                          {packageItem.type.name} by {packageItem.category.name}
                        </h5>
                        <p className="text-sm max-w-[500px]">{packageItem.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b w-[10%] border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.itemCount} pcs
                    </p>
                  </td>
                  <td className="border-b w-[20%] border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ₦ {packageItem.price.toLocaleString()}
                    </p>
                  </td>
                  <td className="border-b w-[10%] border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                      <svg fill="#a3a3a3" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"/></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {details && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            title={details && details?.type.name}
          >
            {status == 'success' ? (
              <div
                className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div className="flex items-center">
                  <div className="pr-4">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 -4 30 30"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>check</title>
                      <desc>Created with Sketch.</desc>
                      <defs>
                        <linearGradient
                          x1="50%"
                          y1="0%"
                          x2="50%"
                          y2="100%"
                          id="linearGradient-1"
                        >
                          <stop stop-color="#1DD47F" offset="0%"></stop>
                          <stop stop-color="#0DA949" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g
                        id="icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="ui-gambling-website-lined-icnos-casinoshunter"
                          transform="translate(-735.000000, -1911.000000)"
                          fill="url(#linearGradient-1)"
                          fill-rule="nonzero"
                        >
                          <g
                            id="4"
                            transform="translate(50.000000, 1871.000000)"
                          >
                            <path
                              d="M714.442949,40.6265241 C715.185684,41.4224314 715.185684,42.6860985 714.442949,43.4820059 L697.746773,61.3734759 C697.314529,61.8366655 696.704235,62.0580167 696.097259,61.9870953 C695.539848,62.0082805 694.995328,61.7852625 694.600813,61.3625035 L685.557051,51.6712906 C684.814316,50.8753832 684.814316,49.6117161 685.557051,48.8158087 C686.336607,47.9804433 687.631056,47.9804433 688.410591,48.8157854 L696.178719,57.1395081 L711.589388,40.6265241 C712.368944,39.7911586 713.663393,39.7911586 714.442949,40.6265241 Z"
                              id="check"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Order Completed</p>
                    <p className="text-sm">Your order has been Completed.</p>
                    <button
                      onClick={() => navigate('/dashboard/orders')}
                      className="px-4 mt-2 py-1 bg-white shadow-sm text-black-2 text-[14px]"
                    >
                      View Order
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-[20%] h-[40px] bg-gray-400 rounded-[8px]">
                    <img
                      src={details.imageUrl}
                      alt=""
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      {details.name}
                    </h5>
                  </div>
                </div>
                <div>
                  <b>Description</b>
                  <p className="text-gray-700">{details.description}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={decrement}
                      className="w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-600 font-bold rounded hover:bg-gray-300 focus:outline-none"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{quantity}</span>
                    <button
                      onClick={increment}
                      className="w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-600 font-bold rounded hover:bg-gray-300 focus:outline-none"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 flex items-center gap-2 bg-[#e3e3e3] text-black hover:text-white rounded hover:bg-[#d50e3c] focus:outline-none"
                    >
                      <LuEye />
                      Preview
                    </button>
                  </div>
                </div>

                <b className="text-[#d50e3c] pt-6">
                  Price - ₦{parseFloat(details.price) * quantity}
                </b>

                <Alerts status={status} message={message} />
                {details.itemCount >= 1 && (
                  <button
                    onClick={handleOrder}
                    className={`px-4 py-2  ${
                      wallet?.data.wallet < parseInt(details.price) * quantity
                        ? 'bg-[#a3a3a3]'
                        : 'bg-[#d50e3c]'
                    } text-white rounded hover:bg-[#d50e3c] focus:outline-none`}
                    disabled={
                      wallet?.data.wallet < parseInt(details.price) * quantity
                        ? true
                        : false
                    }
                  >
                    {wallet?.data.wallet < parseInt(details.price) * quantity
                      ? 'Insufficient Balance, Fund your account'
                      : isLoading
                      ? 'Processing...order'
                      : 'Order Now'}
                  </button>
                )}
              </div>
            )}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProductsTable;
