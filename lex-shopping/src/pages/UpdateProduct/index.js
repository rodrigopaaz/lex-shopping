import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'

export default function UpdateProduct({navigation}) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [category, setCategory] = useState('')
  const [search, setSerch] = useState('')
  const [id, setID] = useState('')
  const useFirebase = useFirebasehook()
  
  const findItem = (productName) => {
    const allProducts = useFirebase[0];
  
    for (const productId in allProducts) {
      const product = allProducts[productId];
      if (product.name.toLowerCase() === productName.toLowerCase()) {
        setID(productId)
        setName(product.name);
        setPrice(product.price);
        setCurrency(product.currency);
        setCategory(product.category);
        return;
      }
    }
    console.log("not found");
  };
  
  const deleteData = async (itemId) => {
    const URL = `https://lexartshopping-db-default-rtdb.firebaseio.com/products/${itemId}.json/`
      try {
        const response = await fetch(URL, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const req = await response.json();
        setID('')
        setName('');
        setPrice(0);
        setCurrency('');
        setCategory('');
        return req
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
      }
  }

  const updateData = async ({id, name, price, category, currency}) => {
    const URL = `https://lexartshopping-db-default-rtdb.firebaseio.com/products/${id}.json/`
    const updated = {
      name,
      price,
      category,
      currency
    }  
    try {
        const response = await fetch(URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updated),
        });

        const req = await response.json();
        setID('')
        setName('');
        setPrice(0);
        setCurrency('');
        setCategory('');
        return req
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
      }
  }

    return (
      <View>
        <TextInput
        /* style={styles.input} */
        onChangeText={(target) =>  setSerch(target)}
        value={search}
        placeholder="Type the name of the item you want to edit or delete"
        keyboardType="string"
      />
            <Button
      onPress={() => findItem(search.toLowerCase())}
      title="Ok"
      color="#623"
      accessibilityLabel=""
/>
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
      <Button
      onPress={() => updateData({id, name, price, category, currency})}
      title="Save changes"
      color="#345"
      accessibilityLabel=""
/>
<Button
      onPress={async () => {
        await deleteData(id)
        setID('')
      }}
      title="Delete item"
      color="#896887"
      accessibilityLabel=""
      disabled={!id}
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