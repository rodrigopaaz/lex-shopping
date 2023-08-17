import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ProductCard({product}) {
  const {name, price, currency, category} = product
  return (
    <View>
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      <Text>{currency}</Text>
      <Button 
      title='Add to cart'
      />
    </View>
  )
}