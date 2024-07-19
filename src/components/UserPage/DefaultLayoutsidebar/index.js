import React from "react";
import Headers from "../../Layout/DefaultLayout/Header";
import Footer from "../../Layout/DefaultLayout/Footer";
import Sidebar from "./Sidebar";
import  styles from './DefaultLayoutsidebar.module.scss'
import classNames from "classnames/bind"; 
function DefaultLayoutsidebar({ children }) {
    const cx = classNames.bind(styles);
  return (
    <div>
      <Headers />
      <div className="container-fluid">
        <div className={cx("content")}>
          <Sidebar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayoutsidebar;
