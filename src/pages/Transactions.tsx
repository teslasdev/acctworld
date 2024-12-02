import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TransactionsTable from '../components/Tables/TransactionsTable';



const Transactions = () => {
  return (
    <>
      <Breadcrumb pageName="Transaction History" />

      <div className="flex flex-col gap-10">
        <TransactionsTable />
      </div>
    </>
  );
};

export default Transactions;
