import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  secondary: {
    margin: 1,
  },
  cartBtn: {
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
});

export default styles;
