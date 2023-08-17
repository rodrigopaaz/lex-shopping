import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'
import PayPalIntegration from '../../components/Paypalbutton'
import usePayPalData from '../../utils/PayPal'

export default function AdminArea() {
  const useFirebase = useFirebasehook('GET')
  const data = Object.values(useFirebase[0])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [category, setCategory] = useState('')

    return (
      <View>
      <Button
      onPress={() => usePayPalData()}
      title='Pay'
      >

      </Button>
      </View>
    )
}