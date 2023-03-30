import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { promjenaFavorita } from '../store/actions/radovi';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetaljiEkran = ({ route, navigation }) => {
  const idOsobe = Number(route.params.id);
  const sviRadovi = useSelector((state) => state.radovi.radovi);
  const rad = sviRadovi.find((r) => r.id === idOsobe);

  const dispatch = useDispatch();

  const akcijaFavorit = () => {
    dispatch(promjenaFavorita(idOsobe));
  };


  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>ID Rezervacije</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.id}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Ime osobe</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{ ...stil.ime }}>{rad.student}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Broj sobe:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.naslov}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Vrsta sobe:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>
              {rad.vrsta === 'D' ? 'Dvokrevetna' : 'Jednokrevetna'}
            </Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Datum dolaska:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.datumod}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Datum odlaska:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.datumdo}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Button title="Trenutni gost" onPress={akcijaFavorit} />
          </View>
        </View>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tablica: {
    width: '80%',
    flex: 1,
    backgroundColor: '#f78717',
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
  },
  ime: {
    fontFamily: 'RobotoMono',
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default DetaljiEkran;
