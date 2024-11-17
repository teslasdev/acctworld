import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ProductsTable from '../components/Tables/ProductsTable';


const Products = () => {
  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-2 my-6">
        <h2 className="font-semibold text-black dark:text-white">FACEBOOK</h2>
        <ProductsTable />
      </div>

      <div className="flex flex-col gap-2 my-6">
        <h2 className="font-semibold text-black dark:text-white">FACEBOOK</h2>
        <ProductsTable />
      </div>

      <div className="flex flex-col gap-2 my-6">
        <h2 className="font-semibold text-black dark:text-white">FACEBOOK</h2>
        <ProductsTable />
      </div>
    </>
  );
};

export default Products;
