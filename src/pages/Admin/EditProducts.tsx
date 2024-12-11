import { useEffect, useState } from 'react';
import {
  useCategoryQuery,
  useGetProductByIdQuery,
  useTypeQuery,
} from '../../api/fetch';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DynamicAccordionForm from './AddAcount';
import Alerts from '../UiElements/Alerts';
import { useParams } from 'react-router-dom';
import { useUpdateProductsMutation } from '../../api/postToken';

const EditProducts = () => {
  const { id } = useParams<{ id: string }>(); // Explicitly typing the id
  const { data: productData, isLoading: isFetching } = useGetProductByIdQuery(id as any)

  const { data: category } = useCategoryQuery();
  const { data: type } = useTypeQuery();

  const categories = category?.categories || [];
  const types = type?.data || [];

  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [fields, setFields] = useState([]);
  const [file, setFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    type: '',
    price: '',
    description: '',
    previewLink: '',
    accountFormat: fields,
  });

  const [updateProduct, { isLoading }] = useUpdateProductsMutation();

  useEffect(() => {
    if (productData) {
      // Prefill form data with fetched product data
      setFormData({
        name: productData.product.name,
        category: productData.product.category.name,
        type: productData.product.type.name,
        price: productData.product.price,
        description: productData.product.description,
        previewLink: productData.product.previewLink,
        accountFormat: productData.product.accountFormats || [],
      });
      setFields(productData.product.accountFormats || []);
    }
  }, [productData]);


  useEffect(() => {
    setFormData({ ...formData, accountFormat: fields });
  }, [fields]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log('Updated Form Data:', formData);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('type', formData.type);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('previewLink', formData.previewLink);
    data.append('accountFormat', fields.toString());
    if (file) {
      data.append('file', file);
    }

    await updateProduct({ id, ...formData })
      .unwrap()
      .then(() => {
        setMessage('Product Updated Successfully');
        setStatus('success');
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
        setMessage(err.data.message);
      });
  };

  setTimeout(() => {
    if (status === 'error') {
      setMessage('');
      setStatus('');
    }
  }, 5000);
  return (
    <>
      <Breadcrumb pageName="Edit Product" />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-9 justify-center">
            <div className="rounded-sm border md:w-1/2 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Edit Product
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
                  name="category"
                  handleInputChange={handleInputChange}
                  options={categories}
                  label={'Category'}
                  value={formData.category}
                />

                <SelectGroupOne
                  name="type"
                  handleInputChange={handleInputChange}
                  options={types}
                  label={'Type'}
                  value={formData.type}
                />

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
              <DynamicAccordionForm textInput={productData?.product.accountFormats ?? []} setFields={setFields} />
              <div className="py-4">
                <Alerts status={status} message={message} />
              </div>
              <button
                type="submit"
                className="flex px-6 mt-3 justify-center rounded bg-[#d50e3c] p-3 font-medium text-gray hover:bg-opacity-90"
              >
                {isLoading ? 'Processing...' : 'Update Product'}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditProducts;
