import { useRouter } from "next/router";

const Navbar = ()=>{
    const router = useRouter();
    const HandleClick = ()=>{
        router.push('/login');
    }
    return(
        <div>
            <h1>Weather Data</h1>
            <button onClick={HandleClick}>Admin Login</button>
        </div>
    );
}


export default Navbar;