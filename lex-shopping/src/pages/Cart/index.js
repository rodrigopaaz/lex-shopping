import { View,Button } from 'react-native'
import React, { useState } from 'react'
import usePayPalData from '../../utils/PayPal'
import { useNavigation } from '@react-navigation/native'

export default function AdminArea() {
  const navigation = useNavigation();
  const handleNavigation = async () => {
    const url = await usePayPalData('16')
    navigation.navigate('PaypalPage', {
      path: url.links[1]['href']
    })
  }
    return (
      <View>
      <Button
      onPress={handleNavigation}
      title='Pay'
      >

      </Button>
      </View>
    )
}