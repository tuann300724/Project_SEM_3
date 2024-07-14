import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./router";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react";



function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout  === null ? Fragment :  DefaultLayout
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
