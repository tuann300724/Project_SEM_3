import { useEffect} from "react";

import {useNavigate } from 'react-router-dom';
import classNames from "classnames/bind";
import style from "./Alert.module.scss";


const cx = classNames.bind(style);

function Alert() {
    const navigate = useNavigate();
  useEffect(()=>{
      setTimeout(()=>{
        navigate('/login');
      },1000)
  },[])
  return (
    <p>Thanh Cong</p>
  )
    
    
}
export default Alert;