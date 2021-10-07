import { useState, useEffect } from 'react';

import { API_URL } from '../constants';
import { USERNAME } from '../constants';

const createUrlSearchParams = (country) => {
    return `${API_URL}country=${country}${USERNAME}`;
}

const useApiData = (country) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    const apiUrl = createUrlSearchParams(country);

    useEffect(() => {
        const getcountryData = async () => {
            const res = await fetch(apiUrl);

            try {
                if (!res.ok) {
                    throw new Error(`${res.status}`);
                }

                const data = await res.json();

                if (data.geonames.length < 1) {
                    setError('Error: No country by that name')
                }

                const dataArr = data.geonames.map((d) => {
                    const areaInSqKm = d.areaInSqKm;
                    const capital = d.capital;
                    const continentName = d.continentName;
                    const countryName = d.countryName;
                    const currency = d.currencyCode;
                    const population = d.population;

                    return { areaInSqKm, capital, continentName, countryName, currency, population };
                });

                console.log(data);
                setData(dataArr);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
                console.log(err);
            }
        }
        getcountryData();
    }, [apiUrl])
    
    return {
        data,
        loading: isLoading,
        error,
    }
}

export { useApiData };