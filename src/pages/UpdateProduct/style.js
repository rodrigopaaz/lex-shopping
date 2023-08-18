import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    margin: 10,
    padding: 10,
  },
  searchInput: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    margin: 10,
    padding: 10,
  },
  search: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08240F',
    padding: 10,
    width: 50,
    height: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
