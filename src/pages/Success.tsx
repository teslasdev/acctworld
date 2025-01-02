import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { useSearchParams } from 'react-router-dom';
import { useVerificationMutation } from '../api/postToken';

const Success: React.FC = () => {
    const [searchParams] = useSearchParams();
  // Extracting parameters
  const transRef = searchParams.get("transRef");
  const ref = searchParams.get("reference");
  const [verification] = useVerificationMutation();
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const data = await verification({ txnref : transRef ?? ref }).unwrap();
        if (data.success) {
          window.close();
        } else {
          console.error('Verification failed', data);
        }
      } catch (err) {
        console.error('Error during verification:', err);
      }
    };

    if (transRef ?? ref) {
      verifyPayment();
    }
  }, [transRef, ref , verification]);

  return (
    <>
      <Breadcrumb pageName="Success" />

      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="bg-white flex flex-col justify-center items-center w-[300px] h-[300px]">
          <svg
            width="200px"
            height="200px"
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
                <g id="4" transform="translate(50.000000, 1871.000000)">
                  <path
                    d="M714.442949,40.6265241 C715.185684,41.4224314 715.185684,42.6860985 714.442949,43.4820059 L697.746773,61.3734759 C697.314529,61.8366655 696.704235,62.0580167 696.097259,61.9870953 C695.539848,62.0082805 694.995328,61.7852625 694.600813,61.3625035 L685.557051,51.6712906 C684.814316,50.8753832 684.814316,49.6117161 685.557051,48.8158087 C686.336607,47.9804433 687.631056,47.9804433 688.410591,48.8157854 L696.178719,57.1395081 L711.589388,40.6265241 C712.368944,39.7911586 713.663393,39.7911586 714.442949,40.6265241 Z"
                    id="check"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <h3>Payment Successful</h3>
        </div>
      </div>
    </>
  );
};

export default Success;
