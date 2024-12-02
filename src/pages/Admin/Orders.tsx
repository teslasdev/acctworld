import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import OrdersTable from '../../components/Tables/Admin/OrdersTable';



const AdminOrders = () => {
  return (
    <>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        <OrdersTable />
      </div>
    </>
  );
};

export default AdminOrders;
