import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { createStore, combineReducers } from 'redux';
import radReducer from './store/reducers/radovi';
import { Provider } from 'react-redux';

import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import UnosEkran from './screens/UnosEkran';

//instanca objekta za navigaciju
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

/*const tabEkrani = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Svi" component={PopisSvi} />
      <Tab.Screen name="Trenutni gosti" component={PopisFav} />
    </Tab.Navigator>
  );
};*/

const tabEkrani1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Svi"
        component={PopisEkran}
        initialParams={{ prikaz: 'svi' }}
        
      />
      <Tab.Screen
        name="Trenutni"
        component={PopisEkran}
        initialParams={{ prikaz: 'fav' }}
      />
    </Tab.Navigator>
  );
};

import { RADOVI } from './data/test-podaci';

const ucitajFontove = () => {
  return Font.loadAsync({
    Baloo: require('./assets/Baloo.ttf'),
    RobotoMono: require('./assets/RobotoMono-Regular.ttf'),
  });
};

// Spajanje svih reducera u jedan objekt
const glavniReducer = combineReducers({
  radovi: radReducer,
});
// Stvaramo centralni spremnik
const store = createStore(glavniReducer);

function App() {
  const [fontUcitan, ucitano] = useState(false);

  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => ucitano(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
          }}>
          <Stack.Screen
            name="Naslovna"
            component={PocetniEkran}
            options={{
              title: 'HOTEL BOOKING',
            }}
          />
          <Stack.Screen
            name="Popis"
            component={tabEkrani1}
            options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Unos')}>
                      <View>
                        <MaterialIcons
                          name="note-add"
                          size={26}
                          color="black"
                        />
                      </View>
                    </TouchableOpacity>   
                  );
                },
              };
            }}
          />
          <Stack.Screen
            name="Detalji"
            component={DetaljiEkran}
            options={({ route, navigation }) => {
              const idOsobe = Number(route.params.id);
              const rad = RADOVI.find((r) => r.id === idOsobe);
              return {
                headerTitle: rad?.student,
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Naslovna')}>
                      <View>
                        <MaterialIcons name="house" size={26} />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen name="Unos" component={UnosEkran} options={{headerTitle:"as"} }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
