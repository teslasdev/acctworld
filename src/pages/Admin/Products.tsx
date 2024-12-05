import { useNavigate } from 'react-router-dom';
import { useTypeQuery } from '../../api/fetch';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import ProductsTable from '../../components/Tables/Admin/ProductsTable';


const AdminProducts = () => {
  const { data: type } = useTypeQuery();
  const navigation = useNavigate()
  return (
    <>
      <Breadcrumb pageName="Products" />
      <div className='flex justify-end'>
      <button onClick={() => navigation('/admin/products/add-product')} className="px-4 py-2 bg-[#d50e3c] text-white rounded hover:bg-[#d50e3c] focus:outline-none">
        Add Product
      </button>
      </div>
      {type &&
        type.data?.map((item: any, index: number) => {
          return (
            <div className="flex flex-col gap-2 my-6" key={index}>
              <h2 className="font-semibold text-black dark:text-white">
                {item.name}
              </h2>
              <ProductsTable typeId={item.id} />
            </div>
          );
        })}
    </>
  );
};

export default AdminProducts;
