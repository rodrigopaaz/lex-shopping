import {
  View, TextInput, Button,
} from 'react-native';
import React, { useContext, useState } from 'react';
import useFirebasehook from '../../hooks/FirebaseHook';
import AppContext from '../../context/Context';

export default function UpdateProduct(fileData) {
  const { navigation } = fileData;
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
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
    setPrice(0);
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
      <TextInput
        /* style={styles.input} */
        onChangeText={(target) => setSerch(target)}
        value={search}
        placeholder="Type the name of the item you want to edit or delete"
        keyboardType="string"
      />
      <Button
        onPress={() => findItem(search.toLowerCase())}
        title="Ok"
        color="#623"
        accessibilityLabel=""
      />
      <TextInput
        /* style={styles.input} */
        onChangeText={(target) => setName(target)}
        value={name}
        placeholder="Product Name"
        keyboardType="string"
      />
      <TextInput
/*         style={styles.input} */
        onChangeText={(value) => setPrice(value)}
        value={price.toString()}
        placeholder="Product Price"
        keyboardType="numeric"
      />
      <TextInput
/*         style={styles.input} */
        onChangeText={(value) => setCategory(value)}
        value={category}
        placeholder="Product Category"
        keyboardType="string"
      />
      <TextInput
/*         style={styles.input} */
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
        color="#345"
        accessibilityLabel=""
      />
      <Button
        onPress={async () => {
          await deleteData(id);
          resetFields();
          await getAllData();
        }}
        title="Delete item"
        color="#896887"
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
