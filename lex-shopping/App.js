import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/pages/Main';
import AdminArea from './src/pages/AdminArea';
import Cart from './src/pages/Cart';
import CreateProduct from './src/pages/CreateProduct';
import UpdateProduct from './src/pages/UpdateProduct';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name='Main'
        component={Main}
        />
        <Stack.Screen 
        name='AdminArea'
        component={AdminArea}
        />
        <Stack.Screen 
        name='Cart'
        component={Cart}
        />
        <Stack.Screen 
        name='CreateProduct'
        component={CreateProduct}
        />
        <Stack.Screen 
        name='UpdateProduct'
        component={UpdateProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
