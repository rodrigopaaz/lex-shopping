import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fffc',
    width: 150,
    margin: 10,
    borderRadius: 4,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default styles;
