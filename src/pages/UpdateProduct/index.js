import {
  View, TextInput, Button, Text, TouchableHighlight,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useFirebasehook from '../../hooks/FirebaseHook';
import AppContext from '../../context/Context';
import styles from './style';

export default function UpdateProduct(fileData) {
  const { navigation } = fileData;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSerch] = useState('');
  const [id, setID] = useState('');
  const { products } = useContext(AppContext);
  const {
    deleteData, updateData, getAllData,
  } = useFirebasehook();

  const resetFields = () => {
    setID('');
    setName('');
    setPrice('');
    setCurrency('');
    setCategory('');
  };

  const findItem = async (productName) => {
    const product = products.find((e) => e.name.toLowerCase() === productName.toLowerCase());
    if (product) {
      setID(product.id);
      setName(product.name);
      setPrice(product.price);
      setCurrency(product.currency);
      setCategory(product.category);
    }
  };
  return (
    <View>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(target) => setSerch(target)}
          value={search}
          placeholder="Find Item"
          keyboardType="string"
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#FF0000"
          onPress={() => findItem(search.toLowerCase())}
          title="Ok"
          accessibilityLabel=""
        >
          <Text style={styles.buttonText}>Ok</Text>
        </TouchableHighlight>
      </View>
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
          await updateData({
            id, name, price: Number(price), category, currency,
          });
          resetFields();
          await getAllData();
        }}
        title="Save changes"
        color="#05FC80"
        accessibilityLabel=""
        disabled={!id}
      />
      <Button
        onPress={async () => {
          await deleteData(id);
          resetFields();
          await getAllData();
        }}
        title="Delete item"
        color="#FF032F"
        accessibilityLabel=""
        disabled={!id}
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
