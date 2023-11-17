import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./table";
import styles from '../CssComponents/dropdown.module.css';

const Dropdown = ({cities})=>{
    const [selectedOption,setSelectedOption] = useState('');
    const [data,setData] = useState([]);
    
    //Updating the option selected
    const handleChange = (e)=>{
        setSelectedOption(e.target.value);    
    }

    const fetchData = async (city)=>{
        try{
            const response = await axios.get(`http://localhost/backend/user/city?city=${city}`);
            console.log("Response",response.data);
            setData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    //Fetching the Data when ever the selected option is updated
    useEffect( ()=>{
        if(selectedOption){
        fetchData(selectedOption);
        }
    },[selectedOption] ); 

    return(
        <div>
            <div className={styles.box}>
                <select value={selectedOption} onChange={handleChange}>
                    <option value="">Select the city</option>
                    {
                        cities && cities.map((city)=>(
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))
                    }
                </select>
            </div>
            {selectedOption && <Table data={[data]}/>}
        </div>
    );
}

export default Dropdown;