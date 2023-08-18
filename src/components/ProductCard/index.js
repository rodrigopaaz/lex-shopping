import { View, Text, Button } from 'react-native';
import React from 'react';
import useAsyncStorage from '../../hooks/AsyncStorageHook';
import styles from './style';

export default function ProductCard(data) {
  const { product } = data;
  const {
    name, price, currency, category,
  } = product;
  const { addData } = useAsyncStorage();
  return (
    <View style={styles.main}>
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      <Text>{currency}</Text>
      <Button
        title="Add to cart"
        activeOpacity={0.7}
        onPress={() => addData(product)}
      />
    </View>
  );
}
