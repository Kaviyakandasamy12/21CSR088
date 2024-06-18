import React, { useEffect, useState } from 'react';

const NumberDisplay = () => {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkxNjg1LCJpYXQiOjE3MTg2OTEzODUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI3N2E1MThiLWE5OTYtNDY1Yy1iMmVkLWMwZmVmNWI2YzlhMyIsInN1YiI6Imthdml5YWsuMjFjc2VAa29uZ3UuZWR1In0sImNvbXBhbnlOYW1lIjoiS29uZ3UgRW5naW5lZXJpbmcgQ29sbGVnZSIsImNsaWVudElEIjoiMjc3YTUxOGItYTk5Ni00NjVjLWIyZWQtYzBmZWY1YjZjOWEzIiwiY2xpZW50U2VjcmV0IjoidUV1Qm9DUVBSaVRYSFFNbyIsIm93bmVyTmFtZSI6Ikthdml5YSIsIm93bmVyRW1haWwiOiJrYXZpeWFrLjIxY3NlQGtvbmd1LmVkdSIsInJvbGxObyI6Ijg4In0.QUZLQzjylj7ii2C-LqQTVGY7X0I9L5m-dBRr8nM6d_U'; // Replace with your actual token

    fetch('http://20.244.56.144/test/primes', {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data from API:', data.numbers); // Log the numbers array
        setNumbers(data.numbers); // Update state with the 'numbers' array
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberDisplay;
