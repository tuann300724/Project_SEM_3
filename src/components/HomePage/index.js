import classNames from "classnames/bind";
import React from "react";
import styles from './homepage.module.scss'
function HomePage() {
    const cx = classNames.bind(styles)
  return (
    <div className={cx("wrapper")}>This is Homepage</div>
  );
}

export default HomePage;
