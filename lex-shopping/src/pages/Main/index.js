import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'
import ProductCard from '../../components/ProductCard'

export default function Main({navigation}) {
  const useFirebase = useFirebasehook('GET')
  const data = Object.values(useFirebase[0])

    return (
      <View>
        {data?.map((e,i) =>
        <View> 
          <ProductCard key={e.name + i} product={e}/>  
          </View>        
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