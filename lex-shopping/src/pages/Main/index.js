import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'

export default function Main({navigation}) {
  const useFirebase = useFirebasehook('GET')
  const data = Object.values(useFirebase[0])

    return (
      <View>
        {data?.map((e,i) => 
          <Text key={e.name + i}>{e.name}</Text>          
        )}
      <Button
      onPress={() => navigation.navigate('AdminArea')}
      title="Admin Area"
      color="#023456"
      accessibilityLabel=""
/>
<Button
      onPress={() => navigation.navigate('Cart')}
      title="Cart"
      color="#023456"
      accessibilityLabel=""
/>
      </View>
    )
}