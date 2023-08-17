import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  table: {
    backgroundColor: '#EEEAEC',
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  cellHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});

export default styles;
