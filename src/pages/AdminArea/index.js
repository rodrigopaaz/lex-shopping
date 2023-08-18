import {
  View, Button,
} from 'react-native';
import React from 'react';

export default function AdminArea(fileData) {
  const { navigation } = fileData;
  return (
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
  );
}
