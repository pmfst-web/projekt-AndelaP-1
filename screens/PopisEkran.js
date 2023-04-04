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

const PopisEkran = ({ route, navigation }) => {
  const prikaz = route.params.prikaz;
  const radoviPrikaz = useSelector((state) => {
    if (prikaz === 'svi') {
      return state.radovi.filterRadovi;
    } else if (prikaz === 'fav') {
      return state.radovi.favoritRadovi;
    }
    return null;
  });

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
          style={{ margin: 5,}}
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
    backgroundColor: '#FFFFCC',
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default PopisEkran;
