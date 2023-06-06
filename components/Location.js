import { useEffect, useState } from 'react';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error retrieving location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
    }
  }, []);

  return (
    <div>
      {location ? (
        <div>
          Latitude: {location.latitude}
          <br />
          Longitude: {location.longitude}
        </div>
      ) : (
        <div>Loading location...</div>
      )}
    </div>
  );
};

export default LocationComponent;
