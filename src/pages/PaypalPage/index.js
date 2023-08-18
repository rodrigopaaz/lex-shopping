/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import {
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import queryString from 'query-string';
import usePayPalData from '../../utils/PayPal';
import AppContext from '../../context/Context';

export default function PaypalPage(data) {
  const { setPaymentStatus } = useContext(AppContext);
  const { navigation } = data;
  const [accessToken, setAccessToken] = useState(null);

  const clearPaypalState = () => {
    setAccessToken(null);
  };
  const paymentSucess = async (id) => {
    try {
      usePayPalData.capturePayment(id, accessToken);
      alert('Payment Done!');
      clearPaypalState();
    } catch (error) {
      console.log(error);
    }
  };

  const onUrlChange = (webviewState) => {
    if (webviewState.url.includes('https://example.com/cancel')) {
      navigation.navigate('Cart');
      alert('Payment Refused');
      return;
    }
    if (webviewState.url.includes('https://example.com/return')) {
      const urlValues = queryString.parseUrl(webviewState.url);
      const { token } = urlValues.query;
      if (token) {
        const { token: urlToken } = urlValues.query;
        if (urlToken) {
          setPaymentStatus(true);
          paymentSucess(urlToken);
        }
        navigation.navigate('Cart');
      }
    }
  };

  const route = useRoute();
  const { path } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        /* style={styles.container} */
        source={{ uri: path }}
        onNavigationStateChange={onUrlChange}
      />
    </View>
  );
}
