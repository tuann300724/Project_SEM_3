import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react";
import { DefaultLayoutsidebar } from "./components/UserPage";
import { AdminLayout } from "./Admin/Layout";

const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem('DataLogin'));
  return user?.Role === 'Admin';
};

const PrivateRoute = ({ element, role, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('DataLogin'));

  if (!user) {
    return <Navigate to="/login"/>;
  }

  if (role === 'Admin' && !isAdmin()) {
    return <Navigate to="/" />;
  }

  return element;
};
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
        })}
        {privateRoutes.map((route, index) => {
          const Layout = route.layout === null ? DefaultLayoutsidebar : AdminLayout;
          const Page = route.component;
          const role = route.role; 
          return (
            <Route 
              key={index} 
              path={route.path} 
              element={<PrivateRoute element={<Layout><Page /></Layout>} role={role} />} 
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
