import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useChangePasswordMutation } from '../api/postToken';

const ChangePasswordForm = () => {
  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('New Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const [ChangePassword] = useChangePasswordMutation();
  const handleSubmit = async (
    values: { newPassword: any },
    { setSubmitting, resetForm }: any,
  ) => {
    try {
      await ChangePassword(values)
        .unwrap()
        .then((data) => {
          alert('Password changed successfully! , Login');
          window.location.href = '/auth/signin';
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error('Error changing password', error);
      alert('Failed to change password. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="col-span-5 xl:col-span-2">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Change Password
          </h3>
        </div>
        <div className="p-7">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="newPassword"
                  >
                    New Password
                  </label>
                  <Field
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="Enter new password"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <Field
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex justify-end gap-4.5">
                  <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="reset"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center rounded bg-[#d50e3c] py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
