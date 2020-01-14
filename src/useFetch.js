import { useState, useEffect } from "react";

// React hook for fetching based on url/options then sorts data based on name
function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        data.sort((a, b) => {
          // sorts data alphabetically by name
          if (a.name > b.name || a.title > b.title) return 1;
          if (a.name < b.name || a.title < b.title) return -1;
          return 0;
        });
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url, options]);

  return { isLoading, data, error };
}

export default useFetch;
