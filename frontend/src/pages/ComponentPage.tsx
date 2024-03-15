import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ComponentPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.example.com/data';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Component Page</h1>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Fetched Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ComponentPage;