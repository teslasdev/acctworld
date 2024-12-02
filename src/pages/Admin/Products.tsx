import { useTypeQuery } from '../../api/fetch';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import ProductsTable from '../../components/Tables/ProductsTable';

const AdminProducts = () => {
  const { data: type } = useTypeQuery();
  return (
    <>
      <Breadcrumb pageName="Products" />
      {type &&
        type.data?.map((item : any, index : number) => {
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
