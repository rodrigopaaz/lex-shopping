import { View } from 'react-native'
import React, { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function Paypalbutton (props) {
    const { invoice, totalValue } = props;
    const [paypaldata, setPaypaldata] = useState('')
    const paypal = async () => {
      const data = await fetch("https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons")
      setPaypaldata(data)
    }
    return (
      <View>
         {paypaldata.Buttons({
           style: {
            layout: 'vertical',
            color:  'blue',
            shape:  'rect',
            label:  'paypal'
          }
         })}
      </View>
    )
  }