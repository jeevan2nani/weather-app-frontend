import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from '../CssComponents/login.module.css';

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
        <div className={styles.loginContainer}>
            <h1>Log In</h1>
            <form onSubmit={HandleSubmit}> 
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className={styles.inputField} placeholder="Email"/>
                <input type="password" value ={password} onChange = {(e)=> setPassword(e.target.value)} className={styles.inputField} placeholder="Password" />

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default LoginForm;