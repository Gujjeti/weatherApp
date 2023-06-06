import { useEffect, useState, useContext } from 'react';
import { WeatherContext } from '@/WeatherDataContext';
import Loader from '@/components/Loader';

const Home = () => {

const {formattedDate, weatherData} = useContext(WeatherContext);

const getTime = (time) =>{
const timeString = time;
const date = new Date(timeString);
const hours = date.getHours();
const ampm = hours >= 12 ? "PM" : "AM";
const formattedHours = (hours % 12) || 12;

return `${formattedHours}:00 ${ampm}`;
}






if(!weatherData){
  return <Loader/>
}


  return (

    <>
   <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-12'>
         <div className='card weather-card'>
    <div className='card-body d-flex align-items-center'>
      <div className='d-flex h-100 align-items-center leftW'>
        <span className='weatherIocn'>
          <img src={weatherData && weatherData?.current?.condition.icon} alt={weatherData && weatherData?.current?.condition?.text} />
        </span>
        <div className='d-flex flex-column ms-4'>
          <span className='temp'>{weatherData && weatherData?.current?.temp_c}<sup>o</sup> C</span>
            <span className='location'>{weatherData && weatherData?.location?.region}</span>
        </div>
      </div>


      <div className='m-auto'>
        <p>{formattedDate} </p>
         <p className='mb-0'>Last Updated: {weatherData && new Date(weatherData?.current?.last_updated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} </p>
       
      </div>
    </div>
    </div>
      </div>
    </div>


    <ul className='row mt-5 list-unstyled'>

    {
      weatherData && weatherData?.forecast?.forecastday[0]?.hour?.slice(0,4).map((item,index) =>{
        return (
            <li className='col-md-2' key={index}>
            <div className='w-card-s'>
             <div className='icon'>
        <img src={item.condition.icon} alt='' />
        </div>

        <div className='d-flex flex-column'>
        <span>
          {item.temp_c} <sup>o</sup>
        </span>

          <span>
          {getTime(item.time)}
          
        </span>

        </div>
            </div>
       
      </li>
        )
      })
    }
    
    </ul>
   </div>


  
    </>
          /* <div>
      {location ? (
        <div>
          Latitude: {location.latitude}
          <br />
          Longitude: {location.longitude}
        </div>
      ) : (
        <div>Loading location...</div>
      )}
    </div> */
  )
}

export default Home