import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';


import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
import { RADOVI } from '../data/test-podaci';

const PopisSvi = ({ route, navigation }) => {
  const radoviPrikaz = useSelector((state) => state.radovi.filterRadovi);

  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.student}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={radoviPrikaz}
          renderItem={prikazElelementa}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
        
  },
});

export default PopisSvi;
