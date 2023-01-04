import { useState, useEffect } from 'react';

import { API_KEY } from '../settings';

export const useWeather = (city) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(setData);
    }, [city]);
    return data;
}