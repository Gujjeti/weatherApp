import { useEffect, useState } from 'react';

const useLocation = () => {
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

  return location;
};

export default useLocation;
