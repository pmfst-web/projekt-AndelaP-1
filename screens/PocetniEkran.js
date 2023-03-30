import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Tipka from '../components/Tipka'

const PocetniEkran = ({ navigation }) => {
  return (

    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.slikaOkvir}>
        <Image style={stil.slika} source={require('../assets/booking12.jpg')} />
      </View>
      <View style={stil.kontrole}>
        <Tipka
          title="Popis rezervacija"
          onPress={() => navigation.navigate('Popis')}
        />
        <Tipka
          title="Unos rezervacija"
          onPress={() => navigation.navigate('Unos')}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#FFFFCC',
  },
  slika: {
    width: 300,
    height: 200,
    flex: 1,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '70%',
    height: 200,
    borderRadius: 10,
    marginVertical: 20
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 100
  }
});

export default PocetniEkran;