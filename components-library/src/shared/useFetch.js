import React from 'react';

const useFetch = (url) => {
  const [data, setData] = React.useState([]);

  const getData = React.useCallback(async () => {
    if (url !== '') {
      const response = await fetch(url, {});
      const resultData = await response.json();
      setData(resultData);
    }
  }, [url]);

  React.useEffect(() => {
    getData();
  }, [url, getData]);
  return data;
};

export default useFetch;
