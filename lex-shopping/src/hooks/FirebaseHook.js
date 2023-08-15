import { useEffect, useState } from 'react';

const useFirebasehook = (METHOD, DATA) => {
  const [data, setData] = useState([]);
  const URL = 'https://lexartshopping-db-default-rtdb.firebaseio.com/products.json'

  async function connection() {
    try {
      const response = await fetch(URL, {
        method: METHOD,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(DATA),
      });
  
      const req = await response.json();
      return req;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  }
  


  useEffect(() => {
    try {
      const request = async () => {
        const req = await fetch(URL);
        const response = await req.json()
        setData(response);
      };
      request();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [data];
};

export default useFirebasehook;
