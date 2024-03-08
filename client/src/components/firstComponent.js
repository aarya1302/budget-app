import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Replace '/api/data' with your actual backend endpoint

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      {data ? (
        <ul>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;