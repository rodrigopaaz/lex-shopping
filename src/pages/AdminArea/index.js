import {
  View, Button, Image,
} from 'react-native';
import React from 'react';
import admin from '../../images/admin.jpg';
import styles from './style';

export default function AdminArea(fileData) {
  const { navigation } = fileData;
  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={admin}
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('CreateProduct')}
          title="Create Product"
          color="#023456"
          accessibilityLabel=""
        />
        <Button
          onPress={() => navigation.navigate('UpdateProduct')}
          title="Update/Delete Product"
          color="#023456"
          accessibilityLabel=""
        />
      </View>
    </View>
  );
}
