import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'

export default function CreateProduct({navigation}) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [category, setCategory] = useState('')

  const postData = async (data) => {
    const URL = 'https://lexartshopping-db-default-rtdb.firebaseio.com/products.json'
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const req = await response.json();
        console.log(req)
        return req
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
      }
  }

    return (
      <View>
        <TextInput
        /* style={styles.input} */
        onChangeText={(target) =>  setName(target)}
        value={name}
        placeholder="Product Name"
        keyboardType="string"
      />
              <TextInput
/*         style={styles.input}*/
        onChangeText={(value) => setPrice(value)}
        value={price} 
        placeholder="Product Price"
        keyboardType="numeric"
      />
              <TextInput
/*         style={styles.input}*/
        onChangeText={(value)=>setCategory(value)}
        value={category} 
        placeholder="Product Category"
        keyboardType="string"
      />
              <TextInput
/*         style={styles.input}*/
        onChangeText={(value)=> setCurrency(value)}
        value={currency} 
        placeholder="Product Currency"
        keyboardType="string"
      />
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{currency}</Text>
      <Text>{price}</Text>
      <Button
      onPress={() => postData({name, price, category, currency})}
      title="Create Product"
      color="#green"
      accessibilityLabel=""
/>
      <Button
      onPress={() => navigation.navigate('Main')}
      title="Main"
      color="#023456"
      accessibilityLabel=""
/>

      </View>
    )
}