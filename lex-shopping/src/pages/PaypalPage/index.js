import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';

export default function PaypalPage() {
  const route = useRoute();
  const {path} = route.params
  return (
    <WebView
      style={styles.container}
      source={{ uri: path }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
