import { PayPal } from 'react-native-paypal';

async function PayPalPayment() {
  try {
    const payment = PayPal.initialize({
      clientId: 'AY97lT-qDTJcQVWBNEKP1L4wS3bGrm_G-S0RQ-VfK-KT1TJ9xjxoD0kKDQGoqtJot2OBQJc9agwL-Sgo',
      environment: PayPal.SANDBOX
    })
    console.log(payment, 'ppppp')
    // Send payment.response.id to your server
  } catch (error) {
    console.log(error);
  }
}

export default PayPalPayment