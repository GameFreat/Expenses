import React from 'react';
import {View} from 'react-native';
import {RadioButton, TextInput, Text} from 'react-native-paper';

export const RadioBtns = ({value, checked, setChecked}) => {
  return (
    <RadioButton
      value={value}
      color="#FFD369"
      uncheckedColor="#FFD369"
      status={checked === value ? 'checked' : 'unchecked'}
      onPress={() => setChecked(value)}
    />
  );
};
export function TextInpt({text, setText, placeholder, innerRef, keyboardType}) {
  return (
    <TextInput
      ref={innerRef}
      style={{
        backgroundColor: '#222831',
        color: '#fffasd',
        textAlign: 'center',
      }}
      fontFamily="Poppins-Regular"
      value={text}
      onChangeText={setText}
      underlineColor="#ffffff"
      placeholder={placeholder}
      selectionColor="#ffffff"
      outlineColor="#ffffff"
      keyboardType={keyboardType}
      theme={{
        colors: {text: '#ffffff', placeholder: '#ffffff'},
      }}
    />
  );
}
export const SubmitBtn = ({color, textColor}) => {
  return (
    <View
      style={{
        height: '35%',
        display: 'flex',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
      }}>
      <Text style={{color: textColor}}>Submit</Text>
    </View>
  );
};
