import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useForGotMutation, useSignInMutation } from '../../api/post';
import Alerts from '../UiElements/Alerts';
import Cookies from 'js-cookie';

interface ForgotFormValues {
  email: string;
}

const Forgot: React.FC = () => {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState(null);
  const initialValues: ForgotFormValues = {
    email: '',
  };

  // Validation function
  const validate = (values: ForgotFormValues) => {
    const errors: Partial<ForgotFormValues> = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    return errors;
  };

  // Submit handler for the form
  const [Forgot] = useForGotMutation();
  const handleSubmit = async (values: ForgotFormValues) => {
    setMessage(null);
    setStatus('');
    await Forgot(values)
      .unwrap()
      .then((data: any) => {
        setStatus('success');
        setMessage(data.message);
      })
      .catch((err: any) => {
        setStatus('error');
        setMessage(err ? err.data.message : 'Server Error , Try Again');
      });
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Confirm Email
              </h2>
              <Alerts status={status} message={message} />
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
              >
                {({ isValid, isSubmitting }) => (
                  <Form>
                    <div className="my-4">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Email
                      </label>
                      <div className="relative">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#d50e3c] focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />

                        <span className="absolute right-4 top-4">
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.5">
                              <path
                                d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mb-5">
                      <input
                        type="submit"
                        value={isSubmitting ? 'Loading...' : 'Confirm'}
                        disabled={!isValid}
                        className="w-full cursor-pointer rounded-lg border border-[#d50e3c] bg-[#d50e3c] p-4 text-white transition hover:bg-opacity-90"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
