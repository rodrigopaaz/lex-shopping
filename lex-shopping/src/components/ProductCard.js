import { View, Text, Button } from 'react-native';
import React from 'react';
import useAsyncStorage from '../hooks/AsyncStorageHook';

export default function ProductCard(data) {
  const { product } = data;
  const {
    name, price, currency, category,
  } = product;
  const { addData } = useAsyncStorage();
  return (
    <View>
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      <Text>{currency}</Text>
      <Button
        title="Add to cart"
        onPress={() => addData(product)}
      />
    </View>
  );
}
