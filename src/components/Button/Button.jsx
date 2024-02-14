import { BiSolidMessageSquareDetail } from "react-icons/bi";
import styles from './Button.module.css';
// you can also write as const Button = (props) => {}
const Button = ({isOutline,icon,text,...rest}) => {
    // console.log(props);
    return ( 
        <>
        {/* props.isoutline means that if isoutline is true then put outline_btn class otherwise put primary_btn */}
        <button  {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn} >
            {icon}
            {text}
        </button>
        {/* <button className={styles.outline_btn}>
        {props.icon}
            {props.text}
        </button> */}
        </>
       
     );
}
 
export default Button;