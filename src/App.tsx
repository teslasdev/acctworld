import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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

function App() {
  const [isAuth, setAuth] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeQuery();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle authentication status
  useEffect(() => {
    if (data?.success) {
      setAuth(true);
      navigate('/dashboard');
    } else {
      setAuth(false);
      navigate('/');
    }
  }, [data]);

  // Show loader while fetching authentication data
  if (isLoading) return <Loader />;

  return (
    <>
      {!isAuth ? (
        // Public Routes (Non-Authenticated)
        <Routes>
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
          <Route path="/auth" element={<AuthLayout children={undefined} />}>
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
        </Routes>
      ) : (
        // Private Routes (Authenticated)
        <DefaultLayout>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <>
                  <PageTitle title="Dashboard" />
                  <Overview />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <PageTitle title="Products" />
                  <Products />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <PageTitle title="Orders" />
                  <Orders />
                </>
              }
            />
            <Route
              path="/transactions"
              element={
                <>
                  <PageTitle title="Transactions" />
                  <Transactions />
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <PageTitle title="Settings" />
                  <Settings />
                </>
              }
            />
            <Route
              path="/chart"
              element={
                <>
                  <PageTitle title="Basic Chart" />
                  <Chart />
                </>
              }
            />
          </Routes>
        </DefaultLayout>
      )}
    </>
  );
}

export default App;
