import { Typewriter } from 'react-simple-typewriter';
import Bg from '../images/cover/bg1.png';
import Bg2 from '../images/cover/bg2.png';
import People from '../images/cover/people.png';
import Mobile from '../images/cover/mobile.png';
import Chart from '../images/cover/chart.png';
import banner1 from '../images/brand/Banners-02.jpg';
import banner2 from '../images/brand/Banners-03.jpg';
import banner3 from '../images/brand/Banners-04.jpg';
import banner4 from '../images/brand/Banners-05.jpg';
import feature from '../images/brand/feature.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

const Home = () => {
  return (
    <>
      <div className="w-full relative min-h-[450px] py-12">
        <div className="absolute -top-30 right-0">
          <img src={Bg} alt="" className="lg:w-[598px] md:w-[400px]" />
        </div>
        <div className="mx-auto lg:px-0 px-4 relative z-50 max-w-[1440px] flex md:flex-row flex-col justify-between items-center w-full">
          <div>
            <div className="flex gap-4 items-center">
              <div className="bg-[#EEE6E6] p-2 rounded-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.5 2C13.6 2 14.5 2.9 14.5 4C14.5 5.1 13.6 6 12.5 6C11.4 6 10.5 5.1 10.5 4C10.5 2.9 11.4 2 12.5 2ZM16.4 8.1C16 7.7 15.3 7 14 7H11.5C8.7 7 6.5 4.8 6.5 2H4.5C4.5 5.2 6.6 7.8 9.5 8.7V22H11.5V16H13.5V22H15.5V10.1L19.5 14L20.9 12.6L16.4 8.1Z"
                    fill="#EE3A1B"
                  />
                </svg>
              </div>

              <div className="bg-[#EEE6E6] font-[600] text-[#000000] p-2 rounded-[8px]">
                <p>
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-gradient-start bg-clip-text text-transparent to-gradient-end">
                    AcctWorld
                  </span>
                </p>
              </div>
            </div>

            <div className="my-6 w-full md:w-[70%]">
              <h3 className="lg:text-[50px] text-[30px] lg:leading-[40px] font-[800] text-[#000000]">
                One world, many accounts
              </h3>
              <h3 className="lg:text-[40px] text-[25px] leading-[70px] font-[700] text-[#000000] md:mt-3 bg-gradient-to-r from-gradient-start bg-clip-text text-transparent to-gradient-end">
                <Typewriter
                  words={[
                    'Want to learn more?',
                    'Have questions?',
                    'Let us know!',
                  ]}
                  loop={0} // Infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
              <p className="text-[#000000] font-[500] text-[18px]">
                Effortlessly manage all your social media accounts in one place.
                Schedule, track, and engage – all with a single, powerful
                platform.
              </p>
              <button
                onClick={() => (window.location.href = '/auth/signup')}
                className="text-white px-4 py-2 mt-6 font-[500] rounded-[16px] bg-gradient-to-r from-gradient-start to-gradient-end"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img src={Bg2} alt="" className="lg:w-[459.35px] w-[600px]" />
          </div>
        </div>
      </div>
      <div id='about' className="mx-auto max-w-[1440px] lg:px-0 px-4 flex md:flex-row flex-col gap-4  justify-between items-center lg:py-24 py-12 w-full">
        <div className="md:w-[50%]">
          <img src={People} alt="" className="w-[598px]" />
        </div>
        <div className="md:w-[50%] md:mt-0 mt-4">
          <h3 className="text-[20px] leading-[50px] font-[700] text-[#D50E3C]">
            About Us
          </h3>
          <h3 className="lg:text-[40px] text-[20px] lg:leading-[50px] leading-[25px] font-[700] text-[#000000]">
            Simplifying Digital Onboarding, One Account at a Time.
          </h3>
          <p className="text-[18px] text-[#475569] mt-2 leading-[28.8px]">
            Acctworld was founded with a clear goal: to make accessing social
            media accounts easy, fast, and stress-free. We know the digital
            world is always moving, and the demand for a seamless social media
            start has never been higher. Our solution eliminates the hassle of
            signing up, verifying, and setting up new profiles, allowing you to
            jump right in—whether you're an individual or a business.
          </p>
        </div>
      </div>
      <div className="bg-[#FEFEFE]">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-0 py-24 w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-24 gap-6 lg:gap-12">
            <div className="flex flex-col gap-6 bg-white shadow-3 p-6 rounded-md">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#d50e3c11]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3Z"
                    fill="#D50E3C"
                  />
                </svg>
              </div>
              <h3 className="text-[30px]  font-[800] text-[#D50E3C] mt-2">
                350.000+
              </h3>
              <h3 className="text-[20px]  font-[700] text-[#000000]">
                Users we Empowered Dashboard
              </h3>
              <p className="text-[18px]  text-[#000] leading-[28.8px]">
                Proudly serving a thriving community of passionate users!
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-white shadow-3 p-6 rounded-md">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#d50e3c11]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z"
                    fill="#D50E3C"
                  />
                </svg>
              </div>
              <h3 className="text-[30px]  font-[800] text-[#D50E3C] mt-2">
                480.000+
              </h3>
              <h3 className="text-[20px]  font-[700] text-[#000000]">
                Orders Completed
              </h3>
              <p className="text-[18px]  text-[#000] leading-[28.8px]">
                Accounts , Boosting, Coaching and we're just getting started
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-white shadow-3 p-6 rounded-md">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#d50e3c11]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 3C4 2.73478 3.89464 2.48043 3.70711 2.29289C3.51957 2.10536 3.26522 2 3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V20.2C2 20.6774 2.18964 21.1352 2.52721 21.4728C2.86477 21.8104 3.32261 22 3.8 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20H4V3ZM21.707 7.707C21.8892 7.5184 21.99 7.2658 21.9877 7.0036C21.9854 6.7414 21.8802 6.49059 21.6948 6.30518C21.5094 6.11977 21.2586 6.0146 20.9964 6.01233C20.7342 6.01005 20.4816 6.11084 20.293 6.293L14 12.586L10.707 9.293C10.5195 9.10553 10.2652 9.00021 10 9.00021C9.73484 9.00021 9.48053 9.10553 9.293 9.293L5.293 13.293C5.19749 13.3852 5.12131 13.4956 5.0689 13.6176C5.01649 13.7396 4.9889 13.8708 4.98775 14.0036C4.9866 14.1364 5.0119 14.2681 5.06218 14.391C5.11246 14.5139 5.18671 14.6255 5.2806 14.7194C5.3745 14.8133 5.48615 14.8875 5.60905 14.9378C5.73194 14.9881 5.86362 15.0134 5.9964 15.0123C6.12918 15.0111 6.2604 14.9835 6.3824 14.9311C6.50441 14.8787 6.61475 14.8025 6.707 14.707L10 11.414L13.293 14.707C13.4805 14.8945 13.7348 14.9998 14 14.9998C14.2652 14.9998 14.5195 14.8945 14.707 14.707L21.707 7.707Z"
                    fill="#D50E3C"
                  />
                </svg>
              </div>
              <h3 className="text-[30px]  font-[800] text-[#D50E3C] mt-2">
                2024
              </h3>
              <h3 className="text-[20px]  font-[700] text-[#000000]">
                Operating Since
              </h3>
              <p className="text-[18px]  text-[#000] leading-[28.8px]">
                Thats all it took us to revolutionalize the account logs
                industry
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-white shadow-3 p-6 rounded-md">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#d50e3c11]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D50E3C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="text-[30px]  font-[800] text-[#D50E3C] mt-2">
                150.000+
              </h3>
              <h3 className="text-[20px]  font-[700] text-[#000000]">
                Partners
              </h3>
              <p className="text-[18px]  text-[#000] leading-[28.8px]">
                The very best partners stand ready to fulfill your orders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-container py-6 px-6 mx-auto max-w-[1440px]">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              src={banner1}
              alt="Slide 1"
              className="w-full h-[150px] md:h-[500px]"
              onClick={() => window.location.href="/auth/sigin"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner2}
              alt="Slide 2"
              className="w-full h-[150px] md:h-[500px]"
              onClick={() => window.location.href="https://ig.me/m/acctworld_"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner3}
              alt="Slide 2"
              className="w-full h-[150px] md:h-[500px]"
              onClick={() => window.location.href="https://t.me/@acctworld"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner4}
              alt="Slide 2"
              className="w-full h-[150px] md:h-[500px]"
              onClick={() => window.location.href="https://engainsmedia.com/"}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mx-auto lg:px-0 px-4 max-w-[1440px] flex md:flex-row-reverse flex-col-reverse justify-between items-center py-24 w-full">
        <div className="md:w-[50%] w-full">
          <div className="lg:w-[600px] w-full md:h-[500px] bg-white">
            <img src={feature} className='w-full h-full' />
          </div>
        </div>
        <div className="md:w-[40%]">
          <h3 className="text-[20px] leading-[50px] font-[700] text-[#D50E3C]">
            How It Works
          </h3>
          <h3 className="lg:text-[18px] mb-6 text-[14px] leading-9">
            <b>
              Follow simple steps to get your ready-to-use social media account
              instantly!{' '}
            </b>
            <p>1. Take a few minutes to sign up. It's totally free!</p>
            <p>2. Fund your wallet, easily </p>
            <p>3. Choose the service you want to purchase </p>
            <p>4. Enterthe quantity </p>
            <p>5. Click on place order button </p>
            <p>6. Tell your friends about Acctworld!!!</p>
          </h3>
        </div>
      </div>

      <div className="bg-[#d50e3c20]">
        <div className="mx-auto md:px-0 px-4 max-w-[1440px] py-24 w-full">
          <div className="w-[100%] flex justify-center items-center flex-col">
            <h3 className="lg:text-[20px] leading-[50px] font-[700] text-[#D50E3C]">
              TESTIMONIAL
            </h3>
            <h3 className="md:text-[40px] text-[20px] md:leading-[50px] leading-[25px]">
              What Our Clients say!
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 py-24 lg:gap-12 md:gap-0 gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="gap-2 flex justify-center items-center rounded-[8px] mb-2">
                {/* Star */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M9.08699 8.736L11.685 3.504C11.7606 3.35259 11.8769 3.22523 12.0209 3.13622C12.1648 3.04721 12.3307 3.00006 12.5 3.00006C12.6692 3.00006 12.8351 3.04721 12.9791 3.13622C13.1231 3.22523 13.2394 3.35259 13.315 3.504L15.913 8.736L21.721 9.58C21.8885 9.60323 22.0461 9.67309 22.1759 9.78161C22.3056 9.89013 22.4022 10.0329 22.4546 10.1937C22.5071 10.3545 22.5133 10.5268 22.4725 10.691C22.4317 10.8551 22.3456 11.0045 22.224 11.122L18.022 15.192L19.014 20.942C19.141 21.68 18.361 22.242 17.694 21.894L12.5 19.178L7.30499 21.894C6.63899 22.243 5.85899 21.68 5.98599 20.941L6.97799 15.191L2.77599 11.121C2.65498 11.0034 2.56939 10.8542 2.52896 10.6903C2.48852 10.5265 2.49487 10.3546 2.54726 10.1941C2.59966 10.0337 2.69601 9.89122 2.82536 9.78284C2.95471 9.67445 3.11188 9.60452 3.27899 9.581L9.08699 8.736Z"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-[18px] h-[250px] w-[80%] text-center text-[#000] leading-[28.8px]">
                As a small business owner, I was struggling to reach new
                customers online. This platform completely turned things around!
                Within weeks, my engagement skyrocketed, and I gained hundreds
                of new followers. It’s like having a dedicated marketing team
                working 24/7 to boost my online presence. Highly recommended!
              </p>
              <h3 className="text-[20px] mt-6  font-[700] text-[#000000]">
                Omolola T.
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="gap-2 flex justify-center items-center rounded-[8px] mb-2">
                {/* Star */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M9.08699 8.736L11.685 3.504C11.7606 3.35259 11.8769 3.22523 12.0209 3.13622C12.1648 3.04721 12.3307 3.00006 12.5 3.00006C12.6692 3.00006 12.8351 3.04721 12.9791 3.13622C13.1231 3.22523 13.2394 3.35259 13.315 3.504L15.913 8.736L21.721 9.58C21.8885 9.60323 22.0461 9.67309 22.1759 9.78161C22.3056 9.89013 22.4022 10.0329 22.4546 10.1937C22.5071 10.3545 22.5133 10.5268 22.4725 10.691C22.4317 10.8551 22.3456 11.0045 22.224 11.122L18.022 15.192L19.014 20.942C19.141 21.68 18.361 22.242 17.694 21.894L12.5 19.178L7.30499 21.894C6.63899 22.243 5.85899 21.68 5.98599 20.941L6.97799 15.191L2.77599 11.121C2.65498 11.0034 2.56939 10.8542 2.52896 10.6903C2.48852 10.5265 2.49487 10.3546 2.54726 10.1941C2.59966 10.0337 2.69601 9.89122 2.82536 9.78284C2.95471 9.67445 3.11188 9.60452 3.27899 9.581L9.08699 8.736Z"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-[18px] h-[250px] w-[80%] text-center text-[#000] leading-[28.8px]">
                This platform has been a game-changer for my music career. It
                helped me reach thousands of new fans and boosted my streams on
                every platform. The growth was organic, and now I feel more
                confident releasing new music because I know the audience is
                there. Thank you for helping me grow!
              </p>
              <h3 className="text-[20px] mt-6 font-[700] text-[#000000]">
                Adekunle R., Independent Musician
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="gap-2 flex justify-center items-center rounded-[8px] mb-2">
                {/* Star */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                >
                  <path
                    d="M8.08699 6.736L10.685 1.504C10.7606 1.35259 10.8769 1.22523 11.0209 1.13622C11.1648 1.04721 11.3307 1.00006 11.5 1.00006C11.6692 1.00006 11.8351 1.04721 11.9791 1.13622C12.1231 1.22523 12.2394 1.35259 12.315 1.504L14.913 6.736L20.721 7.58C20.8885 7.60323 21.0461 7.67309 21.1759 7.78161C21.3056 7.89013 21.4022 8.03294 21.4546 8.19373C21.5071 8.35452 21.5133 8.52682 21.4725 8.69096C21.4317 8.85509 21.3456 9.00446 21.224 9.122L17.022 13.192L18.014 18.942C18.141 19.68 17.361 20.242 16.694 19.894L11.5 17.178L6.30499 19.894C5.63899 20.243 4.85899 19.68 4.98599 18.941L5.97799 13.191L1.77599 9.121C1.65498 9.00338 1.56939 8.85416 1.52896 8.69032C1.48852 8.52647 1.49487 8.35457 1.54726 8.19415C1.59966 8.03373 1.69601 7.89122 1.82536 7.78284C1.95471 7.67445 2.11188 7.60452 2.27899 7.581L8.08699 6.736Z"
                    fill="#FFB30C"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M9.08699 8.736L11.685 3.504C11.7606 3.35259 11.8769 3.22523 12.0209 3.13622C12.1648 3.04721 12.3307 3.00006 12.5 3.00006C12.6692 3.00006 12.8351 3.04721 12.9791 3.13622C13.1231 3.22523 13.2394 3.35259 13.315 3.504L15.913 8.736L21.721 9.58C21.8885 9.60323 22.0461 9.67309 22.1759 9.78161C22.3056 9.89013 22.4022 10.0329 22.4546 10.1937C22.5071 10.3545 22.5133 10.5268 22.4725 10.691C22.4317 10.8551 22.3456 11.0045 22.224 11.122L18.022 15.192L19.014 20.942C19.141 21.68 18.361 22.242 17.694 21.894L12.5 19.178L7.30499 21.894C6.63899 22.243 5.85899 21.68 5.98599 20.941L6.97799 15.191L2.77599 11.121C2.65498 11.0034 2.56939 10.8542 2.52896 10.6903C2.48852 10.5265 2.49487 10.3546 2.54726 10.1941C2.59966 10.0337 2.69601 9.89122 2.82536 9.78284C2.95471 9.67445 3.11188 9.60452 3.27899 9.581L9.08699 8.736Z"
                    stroke="#FFB30C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p className="text-[18px] h-[250px] w-[80%] text-center text-[#000] leading-[28.8px]">
                As a content creator, staying relevant on social media is tough,
                but this platform made it so much easier! I’ve seen my followers
                grow consistently, and the engagement on my posts has tripled.
                It’s the perfect tool for anyone looking to take their social
                media game to the next level!
              </p>
              <h3 className="text-[20px] mt-6  font-[700] text-[#000000]">
                Ogunatayo C., Lifestyle Blogger
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FCFBFF]">
        <div className="mx-auto lg:px-0 px-4 max-w-[1440px] py-24 w-full">
          <div className="w-[100%] flex justify-center items-center flex-col">
            <h3 className="lg:text-[20px] lg:leading-[50px] font-[700] text-[#D50E3C]">
              Features
            </h3>
            <h3 className="text-[16px] w-[400px] text-[#787878] text-center font-[500]">
              You always get fast, friendly support in record time (much faster
              than the competition).
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-24 gap-12">
            <div className="flex flex-col justify-around bg-[#F9F8F9] gap-2 py-10 px-4">
              <div className="w-[64px]  h-[64px] flex justify-center items-center rounded-[8px] bg-[#FCFBFF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6249 6.75C17.4884 6.75 17.1524 6.7875 16.9739 7.1445L14.2349 12.621C13.8014 13.4865 12.9659 14.088 11.9999 14.226L5.86787 15.1095C5.46287 15.168 5.32487 15.468 5.28287 15.594C5.24537 15.7155 5.18537 16.0245 5.46437 16.2915L9.89838 20.5515C10.6049 21.231 10.9259 22.2105 10.7579 23.169L9.71387 29.184C9.64937 29.5605 9.88487 29.7795 9.98987 29.8545C10.1009 29.9385 10.3979 30.105 10.7654 29.913L16.2479 27.0705C17.1119 26.625 18.1409 26.625 19.0019 27.0705L24.4829 29.9115C24.8519 30.102 25.1489 29.9355 25.2614 29.8545C25.3664 29.7795 25.6019 29.5605 25.5374 29.184L24.4904 23.169C24.3224 22.2105 24.6434 21.231 25.3499 20.5515L29.7839 16.2915C30.0644 16.0245 30.0044 15.714 29.9654 15.594C29.9249 15.468 29.7869 15.168 29.3819 15.1095L23.2499 14.226C22.2854 14.088 21.4499 13.4865 21.0164 12.6195L18.2744 7.1445C18.0974 6.7875 17.7614 6.75 17.6249 6.75ZM10.4204 32.25C9.80087 32.25 9.18587 32.055 8.65937 31.671C7.75037 31.005 7.30487 29.9055 7.49837 28.7985L8.54237 22.7835C8.58137 22.56 8.50487 22.3335 8.33987 22.1745L3.90587 17.9145C3.08987 17.133 2.79737 15.978 3.14237 14.9055C3.49037 13.821 4.41137 13.0455 5.54687 12.8835L11.6789 12C11.9159 11.967 12.1199 11.8215 12.2219 11.6145L14.9624 6.1365C15.4679 5.127 16.4879 4.5 17.6249 4.5C18.7619 4.5 19.7819 5.127 20.2874 6.1365L23.0294 11.613C23.1329 11.8215 23.3354 11.967 23.5709 12L29.7029 12.8835C30.8384 13.0455 31.7594 13.821 32.1074 14.9055C32.4524 15.978 32.1584 17.133 31.3424 17.9145L26.9084 22.1745C26.7434 22.3335 26.6684 22.56 26.7074 22.782L27.7529 28.7985C27.9449 29.907 27.4994 31.0065 26.5889 31.671C25.6664 32.3475 24.4649 32.439 23.4464 31.908L17.9669 29.0685C17.7524 28.9575 17.4959 28.9575 17.2814 29.0685L11.8019 31.9095C11.3639 32.1375 10.8914 32.25 10.4204 32.25Z"
                    fill="url(#paint0_linear_104_887)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_104_887"
                      x1="3"
                      y1="18.3753"
                      x2="32.2495"
                      y2="18.3753"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EE3A1B" />
                      <stop offset="0.99" stop-color="#D1234D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[24px] leading-[30px] font-[700] text-[#000000]">
                24hrs support
              </h3>
              <p className="text-[16px] w-[80%] h-[120px] flex items-start mt-4 text-[#787878] leading-[28.8px]">
                We reply at record-breaking speed. Most companies take an
                average of 12 hours to reply. Not ours!
              </p>
            </div>

            <div className="flex flex-col  justify-around bg-[#F9F8F9] gap-2 py-10 px-4">
              <div className="w-[64px]  h-[64px] flex justify-center items-center rounded-[8px] bg-[#FCFBFF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 2.25C7.9695 2.25 2.25 7.9695 2.25 15C2.25 22.0305 7.9695 27.75 15 27.75C22.0305 27.75 27.75 22.0305 27.75 15C27.75 7.9695 22.0305 2.25 15 2.25ZM15 30C6.729 30 0 23.271 0 15C0 6.729 6.729 0 15 0C23.271 0 30 6.729 30 15C30 23.271 23.271 30 15 30Z"
                    fill="url(#paint0_linear_166_97)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.1468 20.5386C19.9503 20.5386 19.7523 20.4876 19.5708 20.3811L13.9158 17.0076C13.5768 16.8036 13.3668 16.4361 13.3668 16.0401V8.76813C13.3668 8.14713 13.8708 7.64313 14.4918 7.64313C15.1143 7.64313 15.6168 8.14713 15.6168 8.76813V15.4011L20.7243 18.4461C21.2568 18.7656 21.4323 19.4556 21.1143 19.9896C20.9028 20.3421 20.5293 20.5386 20.1468 20.5386Z"
                    fill="url(#paint1_linear_166_97)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_166_97"
                      x1="0"
                      y1="15"
                      x2="30"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EE3A1B" />
                      <stop offset="0.99" stop-color="#D1234D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_166_97"
                      x1="13.3668"
                      y1="14.0909"
                      x2="21.2729"
                      y2="14.0909"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EE3A1B" />
                      <stop offset="0.99" stop-color="#D1234D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[24px] leading-[30px] font-[700] text-[#000000]">
                Instant payment
              </h3>
              <p className="text-[16px] w-[80%] h-[120px] flex items-start mt-4 text-[#787878] leading-[28.8px]">
                Agorapulse customers are happy customers. Our customers give us
                a 96% user satisfaction score.
              </p>
            </div>

            <div className="flex flex-col justify-around bg-[#fff] gap-2 py-10 px-4">
              <div className="w-[64px]  h-[64px] flex justify-center items-center rounded-[8px] bg-gradient-to-r from-gradient-start to-gradient-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="31"
                  viewBox="0 0 26 31"
                  fill="none"
                >
                  <mask
                    id="mask0_166_31"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="26"
                    height="31"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.000278473 0.000610352H25.4505V30.534H0.000278473V0.000610352Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_166_31)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7254 2.25C11.4534 2.25 3.4284 5.076 2.5029 5.8485C2.2299 6.123 2.2194 6.6 2.2779 9.7935C2.3049 11.3325 2.3424 13.4235 2.3424 16.3185C2.3424 24.12 10.9254 27.5835 12.7239 28.221C14.5209 27.5805 23.1084 24.0975 23.1084 16.3185C23.1084 13.4205 23.1459 11.328 23.1744 9.789C23.2314 6.5985 23.2209 6.1215 22.9314 5.8335C22.0239 5.076 13.9974 2.25 12.7254 2.25ZM12.7254 30.534C12.6159 30.534 12.5064 30.519 12.3999 30.486C11.8974 30.3345 0.0924003 26.6415 0.0924003 16.3185C0.0924003 13.443 0.0549003 11.3625 0.0279003 9.8355C-0.0410997 6.021 -0.0560998 5.226 0.9294 4.242C2.1069 3.0615 11.0244 0 12.7254 0C14.4249 0 23.3424 3.0615 24.5229 4.242C25.5069 5.226 25.4919 6.021 25.4229 9.831C25.3959 11.358 25.3584 13.4385 25.3584 16.3185C25.3584 26.6415 13.5534 30.3345 13.0509 30.486C12.9444 30.519 12.8349 30.534 12.7254 30.534Z"
                      fill="#FCFBFF"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6656 18.7793C11.3671 18.7793 11.0806 18.6607 10.8691 18.4492L8.03115 15.6083C7.59315 15.1688 7.59315 14.4548 8.03265 14.0168C8.47065 13.5773 9.18465 13.5773 9.62415 14.0168L11.6656 16.0613L16.7176 11.0093C17.1571 10.5698 17.8681 10.5698 18.3076 11.0093C18.7471 11.4488 18.7471 12.1613 18.3076 12.6008L12.4606 18.4492C12.2506 18.6607 11.9641 18.7793 11.6656 18.7793Z"
                    fill="#FCFBFF"
                  />
                </svg>
              </div>
              <h3 className="text-[24px] leading-[30px] font-[700] text-[#000000]">
                Time saving convenience
              </h3>
              <p className="text-[16px] h-[120px] flex items-start mt-4 w-[80%]  text-[#787878] leading-[28.8px]">
                We reply at record-breaking speed. Most companies take an
                average of 12 hours to reply. Not ours!
              </p>
            </div>

            <div className="flex flex-col justify-around bg-[#F9F8F9] gap-2 py-10 px-4">
              <div className="w-[64px]  h-[64px] flex justify-center items-center rounded-[8px] bg-[#FCFBFF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.82446 21.0043C7.58446 21.0043 7.34296 20.9278 7.13896 20.7718C6.64696 20.3923 6.55396 19.6858 6.93346 19.1938L11.423 13.3588C11.606 13.1203 11.8775 12.9658 12.1745 12.9283C12.4775 12.8893 12.7745 12.9733 13.01 13.1608L17.24 16.4833L20.9405 11.7088C21.3215 11.2153 22.0265 11.1238 22.5185 11.5078C23.0105 11.8888 23.1005 12.5953 22.7195 13.0858L18.3245 18.7558C18.1415 18.9928 17.8715 19.1473 17.5745 19.1833C17.2745 19.2238 16.9775 19.1368 16.7405 18.9523L12.5135 15.6313L8.71696 20.5648C8.49496 20.8528 8.16196 21.0043 7.82446 21.0043Z"
                    fill="url(#paint0_linear_166_103)"
                  />
                  <mask
                    id="mask0_166_103"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="22"
                    y="0"
                    width="9"
                    height="9"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.943 0.00012207H30.959V8.01747H22.943V0.00012207Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_166_103)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.951 2.25C25.982 2.25 25.193 3.0375 25.193 4.008C25.193 4.977 25.982 5.7675 26.951 5.7675C27.92 5.7675 28.709 4.977 28.709 4.008C28.709 3.0375 27.92 2.25 26.951 2.25ZM26.951 8.0175C24.7415 8.0175 22.943 6.219 22.943 4.008C22.943 1.797 24.7415 0 26.951 0C29.162 0 30.959 1.797 30.959 4.008C30.959 6.219 29.162 8.0175 26.951 8.0175Z"
                      fill="url(#paint1_linear_166_103)"
                    />
                  </g>
                  <mask
                    id="mask1_166_103"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="30"
                    height="31"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1.26312H29.7929V31.0546H0V1.26312Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_166_103)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3493 31.0546H8.44335C3.39285 31.0546 -0.000152588 27.5071 -0.000152588 22.2271V10.1041C-0.000152588 4.81662 3.39285 1.26312 8.44335 1.26312H19.3453C19.9663 1.26312 20.4703 1.76712 20.4703 2.38812C20.4703 3.00912 19.9663 3.51312 19.3453 3.51312H8.44335C4.68135 3.51312 2.24985 6.09912 2.24985 10.1041V22.2271C2.24985 26.2846 4.62285 28.8046 8.44335 28.8046H21.3493C25.1113 28.8046 27.5428 26.2231 27.5428 22.2271V11.6686C27.5428 11.0476 28.0468 10.5436 28.6678 10.5436C29.2888 10.5436 29.7928 11.0476 29.7928 11.6686V22.2271C29.7928 27.5071 26.3998 31.0546 21.3493 31.0546Z"
                      fill="url(#paint2_linear_166_103)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_166_103"
                      x1="6.69986"
                      y1="16.1372"
                      x2="22.9554"
                      y2="16.1372"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EE3A1B" />
                      <stop offset="0.99" stop-color="#D1234D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_166_103"
                      x1="22.943"
                      y1="4.00875"
                      x2="30.959"
                      y2="4.00875"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EE3A1B" />
                      <stop offset="0.99" stop-color="#D1234D" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_166_103"
                      x1="-0.000152588"
                      y1="16.1589"
                      x2="29.7928"
                      y2="16.1589"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EE3A1B" />
                      <stop offset="0.99" stop-color="#D1234D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[24px] leading-[30px] font-[700] text-[#000000]">
                Documentation
              </h3>
              <p className="text-[16px] w-[80%] h-[120px] flex items-start mt-4 text-[#787878] leading-[28.8px]">
                Users rate our support higher than Hootsuite and Sprout Social
                on these leading review sites.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-[1440px] flex flex-col-reverse md:flex-row-reverse bg-[#FBFAE8] justify-between items-center md:px-12 px-4 w-full">
          <div className="md:w-[40%] relative flex items-center justify-center">
            <img
              src={Mobile}
              alt=""
              className="relative z-50 w-[310px] md:mt-0 mt-2 "
            />
            <img
              src={Chart}
              alt=""
              className="hidden md:block absolute z-20 md:w-[412px] left-1/2 -translate-x-1/2 -top-25 lg:h-[412px]"
            />
          </div>
          <div className="md:w-[60%]">
            <h3 className="lg:text-[20px] leading-[50px] font-[700] text-[#D50E3C]">
              TRY IT NOW
            </h3>
            <h3 className="lg:text-[40px] text-[20px] lg:leading-[50px] leading-[25px] font-[700] text-[#000000]">
              Ready to level up your social media accounts management ?
            </h3>
            <p className="text-[18px] text-[#000] mt-3">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
