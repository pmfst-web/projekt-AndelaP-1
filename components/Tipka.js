import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f78717',
    borderColor: '#black',
    borderWidth: 2,
    width: 150,
    height: 35,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3,
  },
  naslov:{
    color: 'black',
    fontFamily: "Baloo",
  }
});

export default Tipka;
