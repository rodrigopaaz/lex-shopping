import { useEffect, useState } from 'react';

const useFirebasehook = () => {
  const [data, setData] = useState([]);
  const URL = 'https://lexartshopping-db-default-rtdb.firebaseio.com/products.json'

  async function connection() {
    try {
      const response = await fetch(URL);
      const req = await response.json();
      return req
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  }

  useEffect(() => {
    try {
      const request = async () => {
        const req = await connection();
        setData(req);
      };
      request();
    } catch (error) {
      console.error(error);
    }
  },[]);

  return [data];
};

export default useFirebasehook;
