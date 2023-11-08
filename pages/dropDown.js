import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import axios from "axios";
import Dropdown from "./Components/dropdown";

const DropDown = ()=>{

    const [cities, setCities] = useState([]);
    useEffect(()=>{
        fetchCities();
    },[])

    const fetchCities = async()=>{
        try{
            const response = await axios.get('http://localhost:3005/user/all');
            setCities(response.data);
            console.log(cities);
            console.log("CHeck");
            console.log(response.data);

        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div>
            <Navbar/>
            <Dropdown cities = {cities} />
        </div>
    )
}

export default DropDown;