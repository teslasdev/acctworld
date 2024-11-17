import Logo from '../images/logo/acctworld_logo.png';
import Facebook from '../images/logo/facebook.svg';
import Insta from '../images/logo/instagram.svg';
import Twitter from '../images/logo/twitter.svg';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="">
      <div className="w-[100vw] justify-between mx-auto max-w-[1440px] h-[87px] flex  items-center">
        <div className="">
          <img src={Logo} alt="" className="w-[89px]  h-[64px]" />
        </div>

        <div>
          <ul className="flex gap-4 font-[500] text-black">
            <Link to={'/'}>About Us</Link>
            <Link to={'/'}>Service</Link>
            <Link to={'/'}>Features</Link>
            <Link to={'/'}>How it works</Link>
            <Link to={'/'}>Testimonial</Link>
            <Link to={'/'}>Contact Us</Link>
          </ul>
        </div>

        <div className="flex gap-4 relative z-50">
          <Link
            to={'/auth/signin'}
            className="cursor-pointer w-[120px] text-white h-[42px] font-[500] rounded-[16px] flex justify-center items-center ounded-[16px] bg-gradient-to-r from-gradient-start to-gradient-end"
          >
            Login
          </Link>

          <Link
            to={'/auth/signup'}
            className="w-[120px] h-[42px] rounded-[16px] font-[500] border flex justify-center items-center border-[#EE3A1B] to-[#D1234D] text-[#0A0A0A]"
          >
            Sign up
          </Link>
        </div>
      </div>
      <main><Outlet /></main>
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
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-white text-[18px] font-[500]">
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

            <div className="flex gap-3">
              <Link to={'/'}>
                <img src={Facebook} alt="" className="w-[47.95] h-[50px]" />
              </Link>
              <Link to={'/'}>
                <img src={Insta} alt="" className="w-[47.95] h-[50px]" />
              </Link>
              <Link to={'/'}>
                <img src={Twitter} alt="" className="w-[47.95] h-[50px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
