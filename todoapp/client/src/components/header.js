import  React, {useEffect} from "react";
import { logOutUser } from "../modal/todos";
import  styles from "./all.scss";

function Header(props){

    console.log(props,'pp')

    const setLogout = () =>{
        logOutUser()
        props.setUser(false)
    }
    
    return (
         <div className={styles['headerclass']}>
            <div className={styles['headersection']}>
                <h2>Todo App</h2>
            </div>
            <div className={styles['headersection']}>
                {((props.user && props.user.username)? (
                    <a onClick={setLogout}>{props.user.username} (Logout)</a>
                )  : 'login')}
            </div>
        </div>
    )
}

export default Header;