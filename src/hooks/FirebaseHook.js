import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Context';

const useFirebasehook = () => {
  const [data, setData] = useState([]);
  const { setProducts } = useContext(AppContext);

  async function connection() {
    const URL = 'https://lexartshopping-db-default-rtdb.firebaseio.com/products.json';
    try {
      const response = await fetch(URL);
      const req = await response.json();
      return req;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      return null;
    }
  }

  const getAllData = async () => {
    const newArr = [];
    const req = await connection();
    setData(req);
    const productKeys = Object.keys(req);
    productKeys.forEach((productId) => {
      const product = req[productId];
      newArr.push({ id: productId, ...product });
    });
    setProducts(newArr);
    return newArr;
  };

  useEffect(() => {
    try {
      getAllData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteData = async (itemId) => {
    const URL = `https://lexartshopping-db-default-rtdb.firebaseio.com/products/${itemId}.json/`;
    try {
      const response = await fetch(URL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const req = await response.json();
      return req;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      return null;
    }
  };

  const updateData = async ({
    id, name, price, category, currency,
  }) => {
    const URL = `https://lexartshopping-db-default-rtdb.firebaseio.com/products/${id}.json/`;
    const updated = {
      name,
      price,
      category,
      currency,
    };
    try {
      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updated),
      });

      const req = await response.json();
      return req;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      return null;
    }
  };

  const postData = async (product) => {
    const URL = 'https://lexartshopping-db-default-rtdb.firebaseio.com/products.json';
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const req = await response.json();
      return req;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      return null;
    }
  };

  return {
    data, postData, deleteData, updateData, getAllData,
  };
};

export default useFirebasehook;
