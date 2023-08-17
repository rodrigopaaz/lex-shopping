import { Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import usePayPalData from '../../utils/PayPal';
import useAsyncStorage from '../../hooks/AsyncStorageHook';

export default function AdminArea() {
  const navigation = useNavigation();
  const { getData } = useAsyncStorage();
  const totalValue = getData.reduce((acc, curr) => acc + Number(curr.price), 0);
  const handleNavigation = async () => {
    const url = await usePayPalData(totalValue);
    navigation.navigate('PaypalPage', {
      path: url.links[1].href,
    });
  };
  return (
    <View>
      {getData?.map((p) => (
        <View>
          <Text>{p.name}</Text>
          <Text>{p.price}</Text>
          <Text>{p.currency}</Text>
          <Text>{p.category}</Text>
        </View>
      ))}
      <Text>
        Total:
        {' '}
        {totalValue}
        {' '}
      </Text>
      <Button
        onPress={handleNavigation}
        title="Pay"
      />
    </View>
  );
}
