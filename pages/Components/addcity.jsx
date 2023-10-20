import { useState } from "react";
import axios from "axios";
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

            console.log(response.data.message);

            if(response.data.message){
                setConfirmationMessage(response.data.message);
            }
            else{
                setConfirmationMessage(`City is added to the DataBase Sucessfully!`);
            }
        }
        catch(error){
            console.log("Error While making the api request",error);
        }

    };
    return(
        <div>
        <form onSubmit={HandleSubmit}>
            <label>City</label>
            <input type="text" value={cityname} onChange={(e)=> setCityname(e.target.value) } />
            <button type="submit"> Add</button>
        </form>
        {confirmationMessage && <p> {confirmationMessage} </p>}
        </div>
    );
}

export default Addcity;