import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import Settings from './pages/Settings';
import DefaultLayout from './layout/DefaultLayout';
import AuthLayout from './layout/AuthLayout';
import Overview from './pages/Dashboard/Overview';
import Transactions from './pages/Transactions';
import Products from './pages/Products';
import Orders from './pages/Orders';
import { useGetMeQuery } from './api/fetch';
import Home from './pages/Home';
import Layout from './layout/Layout';
import Success from './pages/Success';
import OverviewDashboard from './pages/Admin/Dashboard';
import AdminTransactions from './pages/Admin/Transactions';
import AdminOrders from './pages/Admin/Orders';
import AdminProducts from './pages/Admin/Products';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

function App() {
  const { pathname } = useLocation();
  const { data, isLoading } = useGetMeQuery();

  console.log(data?.user)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) return <Loader />;
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <PageTitle title="Home" />
              <Home />
            </>
          }
        />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route
          path="signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
      </Route>

      <Route
        path="dashboard"
        element={
          <ProtectedRoute isAuthenticated={data?.success}>
            <DefaultLayout />
          </ProtectedRoute>
        }
      >
        {/* Private Routes */}
        <Route
          path=""
          element={
            <>
              <PageTitle title="Dashboard" />
              <Overview />
            </>
          }
        />
        <Route
          path="products"
          element={
            <>
              <PageTitle title="Products" />
              <Products />
            </>
          }
        />
        <Route
          path="orders"
          element={
            <>
              <PageTitle title="Orders" />
              <Orders />
            </>
          }
        />
        <Route
          path="transactions"
          element={
            <>
              <PageTitle title="Transactions" />
              <Transactions />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="payment/success"
          element={
            <>
              <PageTitle title="Payment Initiated" />
              <Success />
            </>
          }
        />
      </Route>

      <Route
        path="admin"
        element={
          <ProtectedRoute isAuthenticated={data?.success && data?.user.is_admin}>
            <DefaultLayout />
          </ProtectedRoute>
        }
      >
        {/* Private Routes */}
        <Route
          path=""
          element={
            <>
              <PageTitle title="Dashboard" />
              <OverviewDashboard />
            </>
          }
        />
        <Route
          path="products"
          element={
            <>
              <PageTitle title="Products" />
              <AdminProducts />
            </>
          }
        />
        <Route
          path="orders"
          element={
            <>
              <PageTitle title="Orders" />
              <AdminOrders />
            </>
          }
        />
        <Route
          path="transactions"
          element={
            <>
              <PageTitle title="Transactions" />
              <AdminTransactions />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="payment/success"
          element={
            <>
              <PageTitle title="Payment Initiated" />
              <Success />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
