import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { firebase } from '@firebase/app'; // Import from the new modular Firebase
import '@firebase/database'; // Import other Firebase services as needed

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = firebase.database();
    const ref = database.ref('products'); // Replace with your database reference

    ref.on('value', (snapshot) => {
      const products = snapshot.val();
      setData(products);
    });
  }, []);

  return (
    <View>
      <Text>Data from Firebase:</Text>
      {data.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </View>
  );
};

export default App;
