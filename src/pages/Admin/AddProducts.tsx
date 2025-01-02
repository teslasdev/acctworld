import { useEffect, useState } from 'react';
import { useGetTypesByIdQuery, useTypeQuery } from '../../api/fetch';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';

import DynamicAccordionForm from './AddAcount';
import { useProductsMutation } from '../../api/postToken';
import Alerts from '../UiElements/Alerts';

const AddProducts = () => {
  const [file, setFile] = useState<File | null>(null);
  // const [preview, setPreview] = useState<string>('');
  // const { data: category } = useCategoryQuery();
  const { data: type } = useTypeQuery();
  const types = type?.data || [];

  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [fields, setFields] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    previewLink: '',
    accountFormat: fields,
  });

  useEffect(() => {
    setFormData({ ...formData, accountFormat: fields });
  }, [fields]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [message]);

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //     // Generate file preview
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.result) {
  //         setPreview(reader.result.toString());
  //       }
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [products, { isLoading }] = useProductsMutation();

  const { data: typeData, isLoading: isLoadingType } = useGetTypesByIdQuery(
    formData?.type as any,
  );
  const categories = typeData?.type?.categories || [];

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('type', formData?.type);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('previewLink', formData.previewLink);
    data.append('accountFormat', fields.toString());
    if (file) {
      data.append('file', file);
    }

    await products(formData)
      .unwrap()
      .then((data) => {
        console.log(data);
        setMessage('Product Uploaded Successfully');
        setStatus('success');
      })
      .catch((err) => {
        console.log(err);
        setStatus('error');
        setMessage(err.data.message);
      });
  };

  setTimeout(() => {
    if (status == 'error') {
      setMessage('');
      setStatus('');
    }
  }, 5000);

  return (
    <>
      <Breadcrumb pageName="Products" />
      <form onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col gap-9 justify-center">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border md:w-1/2 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Products
              </h3>
            </div>

            <div className="p-6.5">
              <div className="mb-4.5 mt-4">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="E.g Boost Account | Aged Account "
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <SelectGroupOne
                name="type"
                handleInputChange={handleInputChange}
                options={types}
                label={'Type'}
                required={true}
              />

              <SelectGroupOne
                name="category"
                handleInputChange={handleInputChange}
                options={categories}
                label={'Catogory'}
                required={false}
              />

              {/* <div className="pb-6">
                <label className="mb-3 block text-black dark:text-white">
                  Attach file(if no file uploaded it picks the type image by
                  default)
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                {preview && (
                  <div className="mt-4">
                    <p className="text-sm mb-2 text-gray-500">Preview:</p>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-[80px] h-[80px] object-cover rounded"
                    />
                  </div>
                )}
              </div> */}

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Account Price
                </label>
                <input
                  type="number"
                  name="price"
                  min={100}
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Price"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  placeholder="Type your message"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Account Preview Link
                </label>
                <input
                  type="text"
                  name="previewLink"
                  value={formData.previewLink}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Preview link"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="md:w-[40%] w-full">
            <DynamicAccordionForm textInput={[]} setFields={setFields} />
            <div className="py-4">
              <Alerts status={status} message={message} />
            </div>
            <button
              type="submit"
              className="flex px-6 mt-3 justify-center rounded bg-[#d50e3c] p-3 font-medium text-gray hover:bg-opacity-90"
            >
              {isLoading ? 'Processing...' : 'Add Product'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProducts;
