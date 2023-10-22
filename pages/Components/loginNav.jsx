import Link from "next/link";
import styles from "../CssComponents/login.module.css";
const LoginNav = ()=>{

    return (
        <div className={styles.navContainer}>
            <h1 className={styles.title}>Weather Data</h1>
            <div className={styles.link}>
            <Link href= '/'> Home </Link>
            </div>
        </div>
    );
}

export default LoginNav;