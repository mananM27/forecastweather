import React,{useState,useEffect} from 'react';
import axios from 'axios';
import'./temp.css';

function Temp() {

    useEffect(()=>{
        async function getData()
        {
            const res =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=365e8db2417c9f107ff28070336f3d3d`);
            const resspon=await res;
            setCity(resspon.data.name);
            setTempr(resspon.data.main.temp);
            setTemp_min(resspon.data.main.temp_min);
            setTemp_max(resspon.data.main.temp_max);
            setWind(resspon.data.wind.speed);
            setWindD(resspon.data.wind.deg);
       }
        
        getData();
    })
    const[tempr,setTempr]=useState('');
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState('vadodara');
    const[temp_min,setTemp_min]=useState();
    const[temp_max,setTemp_max]=useState();
    const[wind,setWind]=useState('0')
    const[windD,setWindD]=useState('0');
      return (
        <div className='box'> 
            <div className='inputData'>
               <input 
                type='search'
                className='inputS'
                onChange={(e)=>setSearch(e.target.value)}
               />
            </div>
            <div className='info'>
                <h2 className='location'>
                <i className="fas fa-map-marker-alt"></i> {city}
                </h2>
            </div>
            <div className='temp'>   
                <h1 >
                    {tempr} °C
                </h1>
            </div> 
            <div className='tempmin_max'>
                <h3 >Min-Temp  :  {temp_min} °C | Max-Temp  :  {temp_max} °C</h3>
                <h3 id='Wind'>Wind Speed : {wind} M/s   | <i class="fas fa-location-arrow" style={{transform:`rotateZ(${windD}deg)` ,transition: '5s'}}></i></h3>  
            </div>
            
        </div>
    )
}
export default Temp;
