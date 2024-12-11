import { Link, useNavigate } from 'react-router-dom';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import {
  useAnalysticsQuery,
  useGetMeQuery,
  useProductsQuery,
} from '../../api/fetch';
import { useState } from 'react';
import Modal from '../Modals/ProductDisplay';
import { LuEye } from 'react-icons/lu';
import { useOrderMutation } from '../../api/postToken';
import Alerts from '../../pages/UiElements/Alerts';
import { baseUrl } from '../../api';

const ProductsTable = ({ typeId }: any) => {
  const navigate = useNavigate();
  const [category, setFilter] = useState('');
  const { data: user, error } = useGetMeQuery();
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
    previewLink: '',
    category: {
      name: '',
    },
    type: {
      name: '',
      imageUrl: '',
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
      imageUrl: `${baseUrl}` + details.type.imageUrl,
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
      <div className="flex md:w-[20%] flex-col gap-5.5 py-6.5">
        <SelectGroupTwo setFilter={setFilter} />
      </div>
      <div className="space-y-4 py-6">
        {data?.products.map((packageItem: any, key: number) => {
          return (
            <div
              className="border border-gray-200 rounded-lg h-fit overflow-hidden"
              key={key}
            >
              <div className="flex flex-wrap items-center justify-between bg-white sm:flex-nowrap">
                {/* Icon and Title */}
                <div className="flex md:w-[45%] w-full md:border-r md:border-0 border-b items-center h-full p-4 space-x-4">
                  <img
                    src={
                      packageItem.imageUrl ??
                      `${baseUrl}` + packageItem.type.imageUrl
                    }
                    alt={packageItem.type.name}
                    className="w-[10] h-10"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {packageItem.name}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex md:w-[20%] justify-center items-center p-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {packageItem.itemCount} pcs
                  </span>
                </div>

                {/* Price */}
                <div className="text-purple-700 md:w-[20%] border-r border-l  flex p-6 justify-center items-center font-bold">
                  ₦ {packageItem.price.toLocaleString()}
                </div>

                {/* Buy Button */}
                <div className="flex justify-center items-center md:w-[15%] p-6">
                  {error ? (
                    <button
                      onClick={() => (window.location.href = '/auth/signin')}
                      className="px-4 py-1 bg-[#d50e3c] text-white text-sm rounded-lg hover:bg-[#d50e3c] focus:outline-none"
                    >
                      Buy
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setDetails(packageItem);
                        setTq(packageItem.itemCount);
                      }}
                      className="px-4 py-1 bg-[#d50e3c] text-white text-sm rounded-lg hover:bg-[#d50e3c] focus:outline-none"
                    >
                      Buy
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

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
                  <div className="w-[15%] h-[15%] rounded-[8px]">
                    <img
                      src={
                        details.imageUrl ?? `${baseUrl}` + details.type.imageUrl
                      }
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
