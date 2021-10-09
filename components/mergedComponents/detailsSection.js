import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInpt} from '../elements';
import {RadioButtons} from '../mergedComponents';

export const DetailsSection = ({states, setState}) => {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState('Second');
  const [amount, setAmount] = useState('');
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      text: text,
      amount: amount,
      checked: checked,
    }));
    if (states.changed === true) {
      setText('');
      setAmount('');
      setState(prevState => ({
        ...prevState,
        changed: false,
      }));
    }
  }, [text, amount, checked, setState, states.changed]);
  return (
    <View>
      <View style={Details.Center}>
        <View style={Details.Details}>
          <TextInpt
            text={text}
            setText={setText}
            placeholder="Purchase Details"
            keyboardType="default"
          />
        </View>
      </View>
      {/*--------------------------------Radio Button----------------------------------*/}
      <RadioButtons checked={checked} setChecked={setChecked} />
      <View style={Details.Center}>
        <View style={Details.Details}>
          <TextInpt
            text={amount}
            setText={setAmount}
            placeholder="Cost"
            keyboardType="number-pad"
          />
        </View>
      </View>
    </View>
  );
};
const Details = StyleSheet.create({
  Details: {
    width: '80%',
  },
  Center: {
    display: 'flex',
    alignItems: 'center',
  },
});
