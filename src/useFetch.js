import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchData(url) {
    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function refetch() {
    setData(null);
    fetchData(url);
  }

  return {
    data,
    loading,
    error,
    refetch,
  };
}

export default useFetch;
