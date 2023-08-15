import { Text, View,TextInput } from 'react-native'
import React from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'

export default function Main() {
  const useFirebase = useFirebasehook('GET')
  const data = Object.values(useFirebase[0])

    return (
      <View>
        {data?.map((e,i) => 
          <Text key={e.name + i}>{e.name}</Text>          
        )}
        <TextInput
/*         style={styles.input}
        onChangeText={onChangeNumber}
        value={number} */
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
              <TextInput
/*         style={styles.input}
        onChangeText={onChangeNumber}
        value={number} */
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
              <TextInput
/*         style={styles.input}
        onChangeText={onChangeNumber}
        value={number} */
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
              <TextInput
/*         style={styles.input}
        onChangeText={onChangeNumber}
        value={number} */
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </View>
    )
}