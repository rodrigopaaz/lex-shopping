import { Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import usePayPalData from '../../utils/PayPal';
import useAsyncStorage from '../../hooks/AsyncStorageHook';
import styles from './style';

export default function Cart() {
  const navigation = useNavigation();
  const { getData } = useAsyncStorage();
  const [cart, setCart] = useState([]);
  const { removeData, clearData } = useAsyncStorage();
  const [totalValue, setTotalValue] = useState(0);
  const handleNavigation = async () => {
    const url = await usePayPalData(totalValue);
    navigation.navigate('PaypalPage', {
      path: url.links[1].href,
    });
  };
  useEffect(() => {
    setCart(getData);
    const value = getData.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotalValue(value);
  }, [getData]);

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cellHeader}>Product</Text>
        <Text style={styles.cellHeader}>Price</Text>
        <Text style={styles.cellHeader}>Currency</Text>
        <Text style={styles.cellHeader}>Category</Text>
        <Text style={styles.cellHeader}>Remove</Text>
      </View>
      {cart?.map((p) => (
        <View key={p.id} style={styles.row}>
          <Text style={styles.cell}>{p.name}</Text>
          <Text style={styles.cell}>{p.price}</Text>
          <Text style={styles.cell}>{p.currency}</Text>
          <Text style={styles.cell}>{p.category}</Text>
          <Button
            style={styles.cell}
            title="x"
            onPress={() => {
              const removed = cart.filter((e) => e.id !== p.id);
              setTotalValue(totalValue - p.price);
              setCart(removed);
              removeData(p.id);
            }}
          />
        </View>
      ))}
      <Text style={styles.total}>
        Total:
        {' '}
        {totalValue}
        {' '}
      </Text>
      <Button
        onPress={handleNavigation}
        title="Pay"
      />
      <Button
        onPress={() => {
          clearData();
          setTotalValue(0);
          setCart([]);
        }}
        title="Clear"
      />
    </View>
  );
}
