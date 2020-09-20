import { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesApi = (apiUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);

  return { data, isLoading, isError };
};

export default CountriesApi;
