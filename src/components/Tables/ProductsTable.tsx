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
      imageUrl: details.imageUrl ?? `https://acctworld-server.onrender.com` + details.type.imageUrl,
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
            <tr className="bg-gray-2 md:w-full text-left dark:bg-meta-4">
              <th className="md:w-[60%] max-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Package
              </th>
              <th className="md:w-[10%] max-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Available
              </th>
              <th className="md:w-[20%] max-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="md:w-[10%] max-w-[100px] px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.products.map((packageItem: any, key: number) => {
                return (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <div className="flex flex-wrap w-full items-center gap-4">
                        <div className="w-[40px] h-[40px] bg-gray-400 rounded-[8px]">
                          <img
                            src={
                              packageItem.imageUrl ??
                              `https://acctworld-server.onrender.com` +
                                packageItem.type.imageUrl
                            }
                            alt=""
                            className="w-full object-cover h-full"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium text-black dark:text-white">
                            {packageItem.type.name} by{' '}
                            {packageItem.category.name}
                          </h5>
                          <p className="text-sm w-[80%]">{packageItem.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.itemCount} pcs
                      </p>
                    </td>
                    <td className="border-b  border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        ₦ {packageItem.price.toLocaleString()}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <Link
                        to="#"
                        onClick={() => {
                          setModalOpen(true);
                          setDetails(packageItem);
                          setTq(packageItem.itemCount);
                        }}
                        className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#d50e3c] py-2 px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
                      >
                        <span>
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.0758 0.849976H16.0695C15.819 0.851233 15.5774 0.942521 15.3886 1.10717C15.1999 1.27183 15.0766 1.49887 15.0414 1.74685L14.4789 5.80935H13.3976V3.4031C13.3952 3.1654 13.3002 2.93802 13.1327 2.76935C12.9652 2.60068 12.7384 2.50403 12.5008 2.49998H10.082C10.0553 2.27763 9.94981 2.07221 9.78472 1.92089C9.61964 1.76956 9.40584 1.68233 9.18202 1.67498H6.45389C6.32885 1.67815 6.20571 1.70632 6.09172 1.75782C5.97773 1.80932 5.8752 1.8831 5.79017 1.97484C5.70513 2.06657 5.63932 2.17439 5.59659 2.29195C5.55387 2.40951 5.5351 2.53443 5.54139 2.65935V3.32498H3.15077C2.91396 3.32162 2.68544 3.41207 2.51507 3.57659C2.3447 3.7411 2.24632 3.96632 2.24139 4.2031V5.81248C2.0999 5.81539 1.96078 5.84937 1.83387 5.91201C1.70697 5.97466 1.59538 6.06443 1.50702 6.17498C1.41616 6.29094 1.35267 6.42593 1.32128 6.56986C1.2899 6.7138 1.29143 6.86297 1.32577 7.00623C1.32443 7.02182 1.32443 7.0375 1.32577 7.0531L3.23827 12.9375C3.29323 13.1432 3.4153 13.3247 3.58513 13.4532C3.75496 13.5818 3.96282 13.6499 4.17577 13.6468H13.3883C13.7379 13.6464 14.0756 13.5197 14.3391 13.29C14.6027 13.0603 14.7744 12.7431 14.8226 12.3968L16.2508 2.09998H18.0726C18.2384 2.09998 18.3974 2.03413 18.5146 1.91692C18.6318 1.79971 18.6976 1.64074 18.6976 1.47498C18.6976 1.30922 18.6318 1.15024 18.5146 1.03303C18.3974 0.915824 18.2384 0.849976 18.0726 0.849976H18.0758ZM12.1383 5.79373H10.0945V3.74998H12.1476L12.1383 5.79373ZM6.79139 2.9156H8.84452V3.39998V5.7906H6.79139V2.9156ZM3.49139 4.5656H5.54139V5.79373H3.49139V4.5656ZM13.5851 12.225C13.579 12.2727 13.5556 12.3166 13.5193 12.3483C13.4831 12.38 13.4364 12.3972 13.3883 12.3968H4.37577L2.65389 7.04998H14.3039L13.5851 12.225Z"
                              fill=""
                            />
                            <path
                              d="M5.31172 15.1125C4.9118 15.1094 4.51997 15.2252 4.18594 15.4451C3.85191 15.665 3.59073 15.9792 3.43553 16.3478C3.28034 16.7164 3.23813 17.1228 3.31425 17.5154C3.39037 17.908 3.58139 18.2692 3.86309 18.5531C4.14478 18.837 4.50445 19.0308 4.89647 19.11C5.28849 19.1891 5.6952 19.1501 6.06499 18.9978C6.43477 18.8454 6.75099 18.5867 6.97351 18.2544C7.19603 17.9221 7.31483 17.5312 7.31485 17.1312C7.31608 16.8671 7.26522 16.6053 7.16518 16.3608C7.06515 16.1164 6.91789 15.894 6.73184 15.7065C6.5458 15.519 6.3246 15.3701 6.08092 15.2681C5.83725 15.1662 5.57586 15.1133 5.31172 15.1125ZM5.31172 17.9C5.15905 17.9031 5.00891 17.8607 4.88045 17.7781C4.75199 17.6955 4.65103 17.5766 4.59045 17.4364C4.52986 17.2962 4.51239 17.1412 4.54026 16.9911C4.56814 16.8409 4.64009 16.7025 4.74695 16.5934C4.85382 16.4843 4.99075 16.4096 5.14028 16.3786C5.28981 16.3477 5.44518 16.3619 5.58656 16.4196C5.72794 16.4773 5.84894 16.5758 5.93412 16.7026C6.0193 16.8293 6.06481 16.9785 6.06484 17.1312C6.06651 17.3329 5.9882 17.5271 5.84705 17.6712C5.70589 17.8152 5.51341 17.8975 5.31172 17.9Z"
                              fill=""
                            />
                            <path
                              d="M12.9504 15.1125C12.5505 15.1094 12.1586 15.2252 11.8246 15.4451C11.4906 15.665 11.2294 15.9792 11.0742 16.3478C10.919 16.7164 10.8768 17.1228 10.9529 17.5154C11.029 17.908 11.2201 18.2692 11.5018 18.5531C11.7835 18.837 12.1431 19.0308 12.5351 19.11C12.9272 19.1891 13.3339 19.1501 13.7037 18.9978C14.0734 18.8454 14.3897 18.5867 14.6122 18.2544C14.8347 17.9221 14.9535 17.5312 14.9535 17.1312C14.9552 16.598 14.7452 16.086 14.3696 15.7075C13.994 15.329 13.4836 15.115 12.9504 15.1125ZM12.9504 17.9C12.7977 17.9031 12.6476 17.8607 12.5191 17.7781C12.3907 17.6955 12.2897 17.5766 12.2291 17.4364C12.1685 17.2962 12.1511 17.1412 12.1789 16.9911C12.2068 16.8409 12.2788 16.7025 12.3856 16.5934C12.4925 16.4843 12.6294 16.4096 12.779 16.3786C12.9285 16.3477 13.0838 16.3619 13.2252 16.4196C13.3666 16.4773 13.4876 16.5758 13.5728 16.7026C13.658 16.8293 13.7035 16.9785 13.7035 17.1312C13.7052 17.3329 13.6269 17.5271 13.4857 17.6712C13.3446 17.8152 13.1521 17.8975 12.9504 17.9Z"
                              fill=""
                            />
                          </svg>
                        </span>
                        Buy
                      </Link>
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
                  <div className="w-[10%] h-[40px] bg-gray-400 rounded-[8px]">
                    <img
                      src={
                        details.imageUrl ??
                        `https://acctworld-server.onrender.com` + details.type.imageUrl
                      }
                      alt=""
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <div className='w-[80%]'>
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

                  {details.previewLink && (
                    <div className="mt-4">
                      <button className="px-4 py-2 flex items-center gap-2 bg-[#e3e3e3] text-black hover:text-white rounded hover:bg-[#d50e3c] focus:outline-none">
                        <LuEye />
                        <Link to={details.previewLink}>Preview</Link>
                      </button>
                    </div>
                  )}
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
