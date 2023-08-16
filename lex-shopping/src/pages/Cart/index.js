import { Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import useFirebasehook from '../../hooks/FirebaseHook'
import PayPalBtn from '../../components/PaypalButton'

export default function Cart() {
  const useFirebase = useFirebasehook('GET')
  const data = Object.values(useFirebase[0])

      const handlePaymentSuccess = () => {
        // Handle successful payment
      };
    
      const handlePaymentCancel = () => {
        // Handle payment cancellation
      };

    return (
      <View>
            <PayPalBtn amount={20} onSuccess={handlePaymentSuccess} onCancel={handlePaymentCancel} />
      <Button
      onPress={'handleProduct'}
      title="Cart"
      color="#023456"
      accessibilityLabel=""
/>
      </View>
    )
}