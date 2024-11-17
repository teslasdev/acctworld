import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import Tables from './Tables';


const Transactions = () => {
  return (
    <>
      <Breadcrumb pageName="Transaction History" />

      <div className="flex flex-col gap-10">
        <TableThree />
       
      </div>
    </>
  );
};

export default Transactions;
