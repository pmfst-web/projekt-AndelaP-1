import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
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

  const [searchText, setSearchText] = useState('');
  const data = radoviPrikaz;

  const filteredData = data.filter((item) =>
    item.student.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stil.ekran}>
        <View style={{ flex: 1, padding: 20 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            placeholder="Pretraži"
          />
          <View style={stil.lista}>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ margin: 5 }}
              data={filteredData}
              renderItem={prikazElelementa}
              keyExtractor={(item) => item.id}
              numColumns={1}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
