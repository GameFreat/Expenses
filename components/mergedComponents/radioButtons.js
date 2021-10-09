import React from 'react';
import {RadioBtns} from '../elements';
import {StyleSheet, View, Text} from 'react-native';
export const RadioButtons = ({checked, setChecked}) => {
  return (
    <View style={{marginTop: 30, marginBottom: 20}}>
      <View style={Details.RadioBtnsFirstRow}>
        <View style={Details.RadiondText}>
          <RadioBtns value="First" checked={checked} setChecked={setChecked} />
          <Text style={Details.RadioText}>Income</Text>
        </View>
        <View style={Details.RadiondText}>
          <RadioBtns value="Second" checked={checked} setChecked={setChecked} />
          <Text style={Details.RadioText}>Spend</Text>
        </View>
      </View>
      <View style={Details.CardBtn}>
        <View style={Details.RadiondText}>
          <RadioBtns value="Third" checked={checked} setChecked={setChecked} />
          <Text style={Details.RadioText}>Card Payment</Text>
        </View>
      </View>
    </View>
  );
};
const Details = StyleSheet.create({
  Details: {
    width: '80%',
  },
  RadioBtnsFirstRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 30,
  },
  RadiondText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '10%',
  },
  RadioText: {
    color: '#EEEEEE',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  CardBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubmitBtn: {
    width: '40%',
    marginTop: 20,
  },
});
