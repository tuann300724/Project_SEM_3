import React from "react";
import styles from './Header.module.scss'
import classNames from "classnames/bind";
function Headers(props) {
  const cx = classNames.bind(styles)
  return (
    <div className={cx("wrapper")}>Headers</div>
  );
}

export default Headers;
