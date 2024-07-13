import React, { useEffect, useRef } from 'react';
import styles from "./homepage.module.scss";
import classNames from 'classnames/bind';

function Listitem({ children }) {
    const ref = useRef();
    const cx = classNames.bind(styles);
    const handleredline = () => {
        const listitem = ref.current.querySelectorAll("#list-item")
        listitem.forEach(item => {
            if (item === ref.current) {
                item.classList.add(styles.active);
            } else {
                item.classList.remove(styles.active);
            }
            console.log(item)
            console.log(ref.current)
        });
    }
    useEffect(() => {

    })
    return (
        <li ref={ref}>
            <div  id="list-item" onClick={handleredline}>{children}</div>
        </li>
    );
}

export default Listitem;