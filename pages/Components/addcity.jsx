import { useState } from "react";
import axios from "axios";
import styles from '../CssComponents/login.module.css'
const Addcity = ()=>{
    const [cityname, setCityname] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        const dataToSend = {"name":cityname};

        try{
            const response =  await axios.post('http://localhost:3000/admin/add',dataToSend,{
                withCredentials: true,
                headers:{"Content-Type":"application/json"},
            });

            console.log(response);

            if(response.data.message){
                setConfirmationMessage(response.data.message);
                setCityname('');
            }
            else{
                setConfirmationMessage(response.data);
                setCityname('');
            }
        }
        catch(error){
            console.log("Error While making the api request",error);
        }

    };
    return(
        <div className={styles.loginContainer}>
            <h1>Add City</h1>
            <form onSubmit={HandleSubmit}> 
                <input type="text" value={cityname} onChange={(e)=> setCityname(e.target.value)} className={styles.inputField} placeholder="City"/>

                <button type="submit" className={styles.submitButton}>Add</button>
            </form>
        {confirmationMessage && <p> {confirmationMessage} </p>}
        </div>
    );
}

export default Addcity;