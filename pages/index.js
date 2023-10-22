import { useState,useEffect } from "react";
import axios from 'axios';
import Table from "./Components/table";
import Navbar from "./Components/navbar";
import { useRouter } from "next/router";
import styles from "./CssComponents/home.module.css"
export default function Home(){

    const data = [
        {id:1,feels_like: 30.51,humidity: 54,name: "Hyderabad",pressure: 1019,temp: 29.23,temp_max: 29.73,temp_min: 29.23},
        {id:2,feels_like: 30.51,humidity: 54,name: "Hyderabad",pressure: 1019,temp: 29.23,temp_max: 29.73,temp_min: 29.23},
        {id:3,feels_like: 30.51,humidity: 54,name: "Hyderabad",pressure: 1019,temp: 29.23,temp_max: 29.73,temp_min: 29.23},
    ]
    

    const [tasks,setTasks] = useState([]);

    useEffect( ()=>{
        fetchTasks();
    } ,[]);

    const fetchTasks = async ()=>{
        try{
            const response = await axios.get('http://localhost:3000/user/weather');
            setTasks(response.data);
            console.log(tasks);
        } catch(error){
            console.error(error);
        }
    };
    const router = useRouter();
    const HandleSubmit = (e)=>{
        router.reload();
    }
    return(
        <div>
            <Navbar/>
            <Table data = {tasks}/>
            <button onClick={HandleSubmit} className={styles.submit}>Refresh</button>
        </div>
    );


}