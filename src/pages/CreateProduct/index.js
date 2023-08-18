import {
  View, TextInput, Button,
} from 'react-native';
import React, { useState } from 'react';
import useFirebasehook from '../../hooks/FirebaseHook';
import styles from './style';

export default function CreateProduct(fileData) {
  const { navigation } = fileData;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [category, setCategory] = useState('');
  const { postData, getAllData } = useFirebasehook();

  const clearData = () => {
    setName('');
    setCategory('');
    setPrice('');
    setCurrency('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(target) => setName(target)}
        value={name}
        placeholder="Product Name"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPrice(value)}
        value={price.toString()}
        placeholder="Product Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setCategory(value)}
        value={category}
        placeholder="Product Category"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setCurrency(value)}
        value={currency}
        placeholder="Product Currency"
        keyboardType="string"
      />
      <Button
        onPress={async () => {
          await postData({
            name, price: Number(price), category, currency,
          });
          await getAllData();
          clearData();
        }}
        title="Create Product"
        color="#023456"
        accessibilityLabel=""
      />
      <Button
        onPress={() => navigation.navigate('Main')}
        title="Main"
        color="#023456"
        accessibilityLabel=""
      />

    </View>
  );
}
