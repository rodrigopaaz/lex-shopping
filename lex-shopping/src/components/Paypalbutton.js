import React from 'react';
import { View, Button } from 'react-native';
import PayPalButton from 'react-native-paypal-wrapper';

const PayPalIntegration = () => {
  const onSuccess = (confirm) => {
    console.log('Pagamento confirmado: ', confirm);
  };

  const onCancel = (data) => {
    console.log('Pagamento cancelado: ', data);
  };

  const onError = (error) => {
    console.log('Erro no pagamento: ', error);
  };

  return (
    <View>
      {/* Seu conteúdo */}
      <PayPalButton
        amount="10.00"
        currency="USD"
        clientId="AY97lT-qDTJcQVWBNEKP1L4wS3bGrm_G-S0RQ-VfK-KT1TJ9xjxoD0kKDQGoqtJot2OBQJc9agwL-Sgo"
        onPaymentSuccess={onSuccess}
        onPaymentCancel={onCancel}
        onPaymentError={onError}
      />
    </View>
  );
};

export default PayPalIntegration;
