import { useEffect, useState, useContext, createContext } from 'react';
import useLocation from '@/useLocation';

export const WeatherContext = createContext()

export const WeatherDataContext = ({children}) => {

 const [formattedDate, setFormattedDate] = useState('');
  const [city, setCity] = useState('');

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();




  useEffect(() => {


    const fetchWeatherData = async () => {
      try {
        let url = '';

        if (city) {
          url = `http://api.weatherapi.com/v1/forecast.json?key=f686f832203e4d269f954958230103&q=${city}`;
        } else if (location) {
          url = `http://api.weatherapi.com/v1/forecast.json?key=f686f832203e4d269f954958230103&q=${location && location.latitude},${location && location.longitude}`;
        } else {
          setError('Please provide a location or city');
          return;
        }

        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError('Error fetching weather data');
      }
    };

    fetchWeatherData();

    const date = new Date(); 
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    const formattedDate = date.toLocaleString('en-US', options);

    setFormattedDate(formattedDate);
  }, [location, city]);

  return (
    <WeatherContext.Provider value={{formattedDate, weatherData, setCity}}>
    {children}
    </WeatherContext.Provider>
  )
}

