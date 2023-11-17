import Navbar from "./Components/navbar";
import { useRouter} from "next/router";
import { useState,useEffect } from "react";
import axios from "axios";
import Table from "./Components/table";
const CityWithParam = ()=>{
    const router = useRouter();
    
    const [data,setData] = useState([]);

    const fetchTask = async (name)=>{
        try{
            console.log(name);
            const URL = `http://localhost/backend/user/city?city=${name.name}`;
            console.log(URL);
            const response = await axios.get(URL);
            setData(response.data);
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect( ()=>{
        console.log(router.isReady)
        if(router.isReady){
            const name = router.query;
            fetchTask(name);
        }
    },[router.isReady]);

    return(
        <div>
            <Navbar/>
            <Table data = {[data]} />
        </div>
    );
}

export default CityWithParam;