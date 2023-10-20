import axios from "axios";
import { useRouter } from "next/router";
const AdminNav = ()=>{
    const router = useRouter();
    const HandleEvent = (e)=>{
        try{
            const response = axios.post('http://localhost:3000/admin/signout',{},{withCredentials: true,});
            console.log(response);
            router.replace('/login');
        }
        catch(error){
            console.log('Error while making api request',error);
        }
    };
    return(
        <div>
            <h1>Admin Page</h1>
            <button onClick={HandleEvent}>Sign Out</button>
        </div>
    );
}


export default AdminNav;