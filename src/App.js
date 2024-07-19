import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react";
import { DefaultLayoutsidebar } from "./components/UserPage";
import { AdminLayout } from "./Admin/Layout";
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout  === null ? DefaultLayoutsidebar :  DefaultLayout
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />;
        })}
        {privateRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : AdminLayout;
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={ <Layout> <Page /> </Layout>} />);
          })}
      </Routes>
    </Router>
  );
}

export default App;
