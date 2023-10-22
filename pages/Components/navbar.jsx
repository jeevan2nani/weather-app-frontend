import { useRouter } from "next/router";
import styles from "../CssComponents/login.module.css"
import Link from "next/link";
const Navbar = ()=>{
    return(
        <div className={styles.navContainer}>
            <h1 className={styles.title}>Weather Data</h1>
            <Link href={'/login'}>Admin Login</Link>
        </div>
    );
}


export default Navbar;