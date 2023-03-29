import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import Tipka from '../components/Tipka';
import Rad from '../models/rad';
import { RADOVI } from '../data/test-podaci';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';
const UnosEkran = () => {
  const [rtbCurrent, rtbSetCUrrent] = useState('');
  const [ime, postaviIme] = useState('');
  const [naslov, postaviNaslov] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [datePickerVisible1, setDatePickerVisible1] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
    console.log(date);
  };
  const showDatePicker1 = () => {
    setDatePickerVisible1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisible1(false);
  };
  const handleConfirm1 = (date) => {
    setSelectedDate1(date);
    hideDatePicker1();
    console.log(date);
  };
  const changeIme = (tekst) => {
    postaviIme(tekst);
  };

  const changeNaslov = (tekst) => {
    postaviNaslov(tekst);
  };

  const dodajNovi = () => {
    if (rtbCurrent === '' || ime === '' || naslov === '') {
      return;
    } else {
      const novi = new Rad(
        RADOVI.length,
        ime,
        naslov,
        rtbCurrent,
        selectedDate.toISOString(),
        selectedDate1.toISOString()
      );

      rtbSetCUrrent('');
      postaviIme('');
      postaviNaslov('');
      hideDatePicker();
      hideDatePicker1();
      Keyboard.dismiss();
      RADOVI.push(novi);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={stil.ekran}>
      <View style={stil.inputField}>
        <Text style={stil.tekst}>Ime i prezime:</Text>
        <TextInput style={stil.txtInput} value={ime} onChangeText={changeIme} />
      </View>
      <View style={stil.inputField}>
        <Text style={stil.tekst}>Broj sobe:</Text>
        <TextInput
          style={stil.txtInput}
          value={naslov}
          onChangeText={changeNaslov}
          keyboardType="numeric"
        />
      </View>
      <View>
        <RadioButtonGroup
          selected={rtbCurrent}
          onSelected={(value) => rtbSetCUrrent(value)}
          radioBackground={'grey'}
          containerOptionStyle={{ marginTop: 10 }}>
          <RadioButtonItem
            value="J"
            label={<Text style={{ color: 'black' }}>Jednokrevetna</Text>}
          />
          <RadioButtonItem
            value="D"
            label={<Text style={{ color: 'black' }}>Dvokrevetna</Text>}
          />
        </RadioButtonGroup>
      </View>

      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          
          
           <Text style={{ fontSize: 20 }}>
          Check-in:{' '}
          <MaterialIcons
            color="green"
            display="flex"
            justifyContent="center"
            alignItems="center"
            name="event"
            size={26}
            onPress={showDatePicker}
          />
        </Text>
          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 5,
              marginTop: 10,
              alignItems: 'center',
            }}>
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : 'No date selected'}
          </Text>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <Text style={{ fontSize: 20 }}>
          Check-out:{' '}
          <MaterialIcons
            color="red"
            display="flex"
            justifyContent="center"
            alignItems="center"
            name="event"
            size={26}
            onPress={showDatePicker1}
          />
        </Text>
        <DateTimePickerModal
          date={selectedDate1}
          isVisible={datePickerVisible1}
          mode="date"
          onConfirm={handleConfirm1}
          onCancel={hideDatePicker1}
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 5,
              marginTop: 10,
            }}>
            {selectedDate1
              ? selectedDate1.toLocaleDateString()
              : 'No date selected'}
          </Text>
        </View>
      </SafeAreaView>
      <View>
        <Tipka
          title="Spremi"
          style={{
            marginTop: 20,
            width: 300,
            height: 50,
            backgroundColor: '#0a7cf7',
          }}
          onPress={dodajNovi}></Tipka>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFCC'
  },
  txtInput: {
    height: 40,
    width: 150,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  inputField: {
    margin: 10,
  },
  tekst: {
    color: 'black',
  },
});

export default UnosEkran;
