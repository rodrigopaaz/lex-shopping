import {
  View, Button, ImageBackground,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/Context';
import styles from './style';
import ProductCard from '../../components/ProductCard';
import useFirebasehook from '../../hooks/FirebaseHook';
import drinksImage from '../../images/drinks.jpg';

export default function Main(fileData) {
  const { navigation } = fileData;
  const { products } = useContext(AppContext);
  const { getAllData } = useFirebasehook();
  const [updatedData, setUpdatedData] = useState([]);
  useEffect(() => {
    const data = getAllData;
    console.log(data);
    setUpdatedData(products);
  }, [products]);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={drinksImage}
    >
      <View style={styles.main}>
        <View style={styles.products}>
          {updatedData?.map((e, i) => (
            <View>
              <ProductCard key={e.id + Number(i)} product={e} />
            </View>
          ))}
        </View>
        <View style={styles.secondary}>
          <Button
            onPress={() => navigation.navigate('AdminArea')}
            title="Admin Area"
            color="#321503"
            activeOpacity={0.7}
            accessibilityLabel=""
          />
          <Button
            style={styles.cartBtn}
            onPress={() => navigation.navigate('Cart')}
            title="Cart"
            color="#6A4108"
            activeOpacity={0.2}
            accessibilityLabel=""
          />
        </View>
      </View>
    </ImageBackground>
  );
}
