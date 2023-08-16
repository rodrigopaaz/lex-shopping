import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'

export default function AdminArea({navigation}) {
  const useFirebase = useFirebasehook('GET')
  const data = Object.values(useFirebase[0])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [category, setCategory] = useState('')


  const handleProduct = () => {

  }

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
      title="Update Product"
      color="#023456"
      accessibilityLabel=""
/>
<Button
      onPress={handleProduct}
      title="Delete Product"
      color="#023456"
      accessibilityLabel=""
/>
      </View>
    )
}