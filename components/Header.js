import { useContext } from 'react';
import { WeatherContext } from '@/WeatherDataContext';

const Header = () => {

  const {setCity, weatherData} = useContext(WeatherContext);

 const handleSearch = (e) => {
    e.preventDefault();
    const inputCity = e.target.city.value;
    setCity(inputCity);
  };




  return (

    
   <header className="mb-4">


    
    <div className='container-fluid'>
        <div className='row justify-content-between align-items-center'>
            <div className="col-md-4">
                <i className="bi bi-geo-alt-fill"></i>
                <span className='ms-2'>{weatherData && weatherData?.location?.name}</span>
            </div>

            <div className="col-md-8">
               <div className='form-group weatherSearchInput'>
              <form onSubmit={handleSearch}>
                 <input type="text" name="city" className="form-control"  />
                <button type='submit' className='btn searchBtn'><i className="bi bi-search"></i></button>
               </form>
               </div>
            </div>

        </div>
    </div>
   </header>
  )
}

export default Header