import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
              title: 'Home',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#F4511E',
              },
              headerTintColor: '#FFF',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({route}) => ({
              title: route.params.nombre,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
