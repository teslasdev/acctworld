import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import UsersTable from '../../components/Tables/Admin/UsersTable';



const Users = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <UsersTable />
      </div>
    </>
  );
};

export default Users;
