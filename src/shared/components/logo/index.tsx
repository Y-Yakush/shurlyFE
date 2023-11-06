import { Link } from "react-router-dom";
import classes from './logo.module.css';


export const Logo= () =>{
    return <Link className={classes.title} to={'/'}>SH.URLY</Link>
}