import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 560,
  },
  table: {
    padding: 2,
    margin: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  cellHeader: {
    fontWeight: 'bold',
    fontSize: 10,
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
