import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'

export default function AdminArea() {
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
      onPress={(handleProduct)}
      title="Pay with Paypal"
      color="#023456"
      accessibilityLabel=""
/>
      </View>
    )
}