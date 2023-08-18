import {
  View, Button, ScrollView,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/Context';
import styles from './style';
import ProductCard from '../../components/ProductCard';

export default function Main(fileData) {
  const { navigation } = fileData;
  const { products } = useContext(AppContext);
  const [updatedData, setUpdatedData] = useState([]);
  useEffect(() => {
    setUpdatedData(products);
  }, [products]);

  return (
    <ScrollView>
      <View style={styles.main}>
        {updatedData?.map((e) => (
          <View>
            <ProductCard key={e.id + e.name} product={e} />
          </View>
        ))}
      </View>
      <View style={styles.secondary}>
        <Button
          onPress={() => navigation.navigate('AdminArea')}
          title="Admin Area"
          color="#023456"
          accessibilityLabel=""
        />
        <Button
          style={styles.cartBtn}
          onPress={() => navigation.navigate('Cart')}
          title="Cart"
          accessibilityLabel=""
        />
      </View>
    </ScrollView>
  );
}
