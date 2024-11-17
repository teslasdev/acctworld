import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import OrdersTable from '../components/Tables/OrdersTable';


const Orders = () => {
  return (
    <>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        <OrdersTable />
      </div>
    </>
  );
};

export default Orders;
