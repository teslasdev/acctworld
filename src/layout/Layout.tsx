import { useEffect, useState } from 'react';
import Logo from '../images/logo/acctworld_logo.png';
import bar from '../images/logo/bar.svg';
import Facebook from '../images/logo/facebook.svg';
import Insta from '../images/logo/instagram.svg';
import Twitter from '../images/logo/twitter.svg';
import Telegram from '../images/logo/telegram.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigation = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false)
  }, [navigation])
  return (
    <div className="">
      <div className="md:w-[100vw] lg:px-0 px-4 justify-between mx-auto max-w-[1440px] h-[87px] flex  items-center">
        <div className="" onClick={() => navigation('/')}>
          <img
            src={Logo}
            alt=""
            className="md:w-[89px] w-[50px] h-[42px] md:h-[64px]"
          />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-6 font-[500] text-black">
            <Link to={'/'}>Home</Link>

            <Link to={'/about'}>About Us</Link>
            <Link to={'/service'}>Services</Link>

            <Link to={'https://engainsmedia.com/'}>Boost Accounts</Link>
          </ul>
        </div>

        <div className="md:flex hidden gap-4 relative z-50">
          <Link
            to={'/auth/signin'}
            className="cursor-pointer md:w-[120px] w-[80px] text-white md:h-[42px] h-[35px] font-[500] md:rounded-[16px] rounded-[10px] flex justify-center items-center ounded-[16px] bg-gradient-to-r from-gradient-start to-gradient-end"
          >
            Login
          </Link>

          <Link
            to={'/auth/signup'}
            className="md:w-[120px] w-[80px] md:h-[42px] h-[35px] md:rounded-[16px] rounded-[10px] font-[500] border flex justify-center items-center border-[#EE3A1B] to-[#D1234D] text-[#0A0A0A]"
          >
            Sign up
          </Link>
        </div>
        <button className='flex md:hidden relative z-50' onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src={bar} alt="" className="cursor-pointer" />
        </button>
      </div>
      {sidebarOpen && (
        <div className="h-[45vh] relative z-50 w-full p-6 bg-white">
          <div className="block">
            <ul className="flex flex-col gap-6 font-[500] text-black">
              <Link to={'/'}>Home</Link>

              <Link to={'/about'}>About Us</Link>
              <Link to={'/service'}>Services</Link>

              <Link to={'https://engainsmedia.com/'}>Boost Accounts</Link>
            </ul>
          </div>
          <div className="flex gap-4 mt-6 relative z-50">
            <Link
              to={'/auth/signin'}
              className="cursor-pointer md:w-[120px] w-[80px] text-white md:h-[42px] h-[35px] font-[500] md:rounded-[16px] rounded-[10px] flex justify-center items-center ounded-[16px] bg-gradient-to-r from-gradient-start to-gradient-end"
            >
              Login
            </Link>

            <Link
              to={'/auth/signup'}
              className="md:w-[120px] w-[80px] md:h-[42px] h-[35px] md:rounded-[16px] rounded-[10px] font-[500] border flex justify-center items-center border-[#EE3A1B] to-[#D1234D] text-[#0A0A0A]"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
      <main>
        <Outlet />
      </main>

      <div className="bg-gradient-to-r from-gradient-start to-gradient-end   mt-6 py-6 flex flex-col justify-center w-full">
        <div className="mx-auto max-w-[1440px] w-full h-full flex justify-end flex-col">
          {/* <div className="relative h-[620px] w-full">
            <div className="absolute w-full h-[605px] bg-white rounded-tr-[1000px] clip-custom rounded-[200px]"></div>
            <div className='absolute -top-20 right-20'>
              <div className="h-[620px] bg-black w-[540.87px] rounded-[20px]">
                helo
              </div>
            </div>
          </div> */}
          <div className="grid text-white py-6 grid-cols-1 gap-6 md:px-0 px-6 md:grid-cols-3">
            <div>
              <h3 className="font-[700] mb-5">Company</h3>

              <ul className="space-y-4">
                <li
                  className="cursor-pointer"
                  onClick={() => navigation('mailto:theacctworld@gmail.com')}
                >
                  Contact Us
                </li>
                <li className="cursor-pointer">Work with us</li>

                <li
                  className="cursor-pointer"
                  onClick={() => navigation('/faqs')}
                >
                  Faqs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-[700] mb-5">Legal</h3>

              <ul className="space-y-4">
                <li
                  className="cursor-pointer"
                  onClick={() => navigation('/terms')}
                >
                  Terms and Conditions
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigation('/privacy')}
                >
                  Privacy Policy
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="font-[700] mb-5">Need Help?</h3>
              <p>
                We are here to help , Our Expert human-support team is at your
                service 24/7
              </p>

              <div className="flex gap-4 mt-12 relative z-50">
                <Link
                  to={'https://ig.me/m/acctworld_'}
                  className="cursor-pointer px-4 py-2 text-[#D1234D]  font-[500]  flex justify-center items-center rounded-[10px] bg-white"
                >
                  Let's Chat
                </Link>

                <Link
                  to="mailto:theacctworld@gmail.com"
                  className="px-4 py-2 md:rounded-[16px] rounded-[10px] font-[500] border flex justify-center items-center border-[#ffffff] bg-[#D1234D] text-[#ffffff]"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-4 justify-between px-6 md:px-0">
            <p className="flex items-center gap-2 text-white text-[16px] font-[500]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <g clip-path="url(#clip0_104_959)">
                  <path
                    d="M8.895 14.6666C12.5769 14.6666 15.5617 11.6818 15.5617 7.99992C15.5617 4.31802 12.5769 1.33325 8.895 1.33325C5.2131 1.33325 2.22833 4.31802 2.22833 7.99992C2.22833 11.6818 5.2131 14.6666 8.895 14.6666Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5617 5.87263C11.2623 5.26263 10.364 4.19563 8.56732 4.34796C6.77065 4.50063 5.42299 6.17796 5.57299 8.3123C5.72299 10.4466 7.36965 11.6666 8.86665 11.6666C10.6633 11.6666 11.5617 10.203 11.5617 10.203"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_959">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.89502)"
                    />
                  </clipPath>
                </defs>
              </svg>
              2024 AcctWorld. All Rights Reserved
            </p>

            <div className="flex">
              <Link
                to={'https://www.tiktok.com/@acctworld?_t=8rrE3GGTVKB&_r=1'}
              >
                <img src={Facebook} alt="" className="w-[67.95px] h-[60px]" />
              </Link>
              <Link
                to={
                  'https://www.instagram.com/acctworld_?igsh=NHptYzJ5NTNseng3'
                }
              >
                <img src={Insta} alt="" className="w-[67.95px] h-[60px]" />
              </Link>
              <Link
                to={'https://x.com/acctworld_?s=21&t=g2DQ09yQelHh8ewUH8bo0w'}
              >
                <img src={Twitter} alt="" className="w-[67.95px] h-[60px]" />
              </Link>
              <Link
                to={'https://t.me/acctworld'}
              >
                <img src={Telegram} alt="" className="w-[67.95px] h-[60px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
