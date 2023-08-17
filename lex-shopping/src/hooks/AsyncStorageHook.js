import AsyncStorage from '@react-native-async-storage/async-storage';

const { useEffect, useState } = require('react');

const useAsyncStorage = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const data = await AsyncStorage.getItem('products');
        if (data !== null) {
          setGetData(JSON.parse(data));
        }
      } catch (error) {
        console.log('The cart is empty');
      }
    };

    getAllData();
  }, []);
  const addData = (product) => {
    try {
      const id = getData.length + 1;
      const addToStorage = [...getData, { id, ...product }];
      AsyncStorage.setItem('products', JSON.stringify(addToStorage));
    } catch (error) {
      console.log('there is an error', error);
    }
  };

  const updateData = (product) => {
    try {
      const index = getData.findIndex((p) => p.id === product.id);
      const update = getData;
      update[index] = product;
      setGetData(getData.splice(index, 1));
      AsyncStorage.setItem('products', JSON.stringify(update));
    } catch (error) {
      console.log('there is an error', error);
    }
  };

  const removeData = (id) => {
    try {
      const removeItem = getData.filter((p) => p.id !== id);
      setGetData(removeItem);
      AsyncStorage.setItem('products', JSON.stringify(removeItem));
    } catch (error) {
      console.log('there is an error', error);
    }
  };

  return {
    getData, addData, removeData, updateData,
  };
};

export default useAsyncStorage;
