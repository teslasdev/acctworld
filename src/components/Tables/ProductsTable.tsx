import { Link, useNavigate } from 'react-router-dom';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { useAnalysticsQuery, useProductsQuery } from '../../api/fetch';
import { useState } from 'react';
import Modal from '../Modals/ProductDisplay';
import { LuEye } from 'react-icons/lu';
import { useOrderMutation } from '../../api/postToken';
import Alerts from '../../pages/UiElements/Alerts';

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
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Package
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Available
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.products.map((packageItem: any, key: number) => {
              return (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="flex items-center gap-4">
                      <div className="w-[40px] h-[40px] bg-gray-400 rounded-[8px]">
                        <img
                          src={packageItem.imageUrl}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium text-black dark:text-white">
                          {packageItem.type.name} by {packageItem.category.name}
                        </h5>
                        <p className="text-sm">{packageItem.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.itemCount} pcs
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ₦ {packageItem.price.toLocaleString()}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      <button className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                            fill=""
                          />
                          <path
                            d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                            fill=""
                          />
                          <path
                            d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                            fill=""
                          />
                        </svg>
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
                  <div className="w-[45px] h-[40px] bg-gray-400 rounded-[8px]">
                    <img
                      src={details.imageUrl}
                      alt=""
                      className="w-full h-full"
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
