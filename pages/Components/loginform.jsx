import { useState } from "react";
import axios from "axios";
import { headers } from "@/next.config";
import { useRouter } from "next/router";

const LoginForm = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');

    const router = useRouter();
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        const dataToSend = {"email":email, "password":password};

        try{
            const response = await axios.post("http://localhost:3000/admin/signin", dataToSend, {
                withCredentials: true,
                headers:{
                    'Content-Type':'application/json'
                },
            })
            console.log(response);
            if(response.data){
                router.replace('/admin');
            }
            else{
                setErrorMessage('Invalid Credentials');
            }
        }
        catch(error){
            console.log("Error while Making API Request",error);
        }
    }

    return(
        <div>
            <form onSubmit={HandleSubmit}> 
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  />

                <label>Password</label>
                <input type="password" value ={password} onChange = {(e)=> setPassword(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default LoginForm;