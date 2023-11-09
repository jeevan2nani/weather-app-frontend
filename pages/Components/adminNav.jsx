import axios from "axios";
import { useRouter } from "next/router";
import styles from '../CssComponents/login.module.css'
const AdminNav = ()=>{
    const router = useRouter();
    const HandleEvent = async (e)=>{
        try{
            const response = await axios.post('http://localhost:3005/admin/signout',{},{withCredentials: true,});
            console.log(response);
            router.replace('/login');
        }
        catch(error){
            console.log('Error while making api request',error);
        }
    };
    return(
        <div className={styles.navContainer}>
            <h1 className={styles.title}>Admin Page</h1>
            <button onClick={HandleEvent} style={{backgroundColor:"black", color:"white", padding:'10px 20px', borderRadius:'4px', fontWeight:'bold',fontSize:'20px'}} >Sign Out</button>
        </div>
    );
}


export default AdminNav;