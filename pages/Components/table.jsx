import styles from "../CssComponents/home.module.css"
export default function Table({data}){

    return(
        <table className={styles.table}>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperatur in Degree</th>
                        <th>Temp Min</th>
                        <th>Temp Max</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                        <th>Feels Like</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map( (task)=>(
                        <tr key = {task.id}>
                            <th>{task.name}</th>
                            <th>{task.temp}</th>
                            <th>{task.temp_min}</th>
                            <th>{task.temp_max}</th>
                            <th>{task.pressure} </th>
                            <th>{task.humidity}</th>
                            <th>{task.feels_like}</th>
                        </tr>
                    ) )}
                </tbody>
            </table>
    )
}