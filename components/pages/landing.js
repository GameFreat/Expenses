import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Key, SubmitBtn} from '../elements';
import {BalanceBx, DetailsSection} from '../mergedComponents';
import {useSetState} from 'react-use';
export function Landing({navigation}) {
  const [state, setState] = useSetState({
    text: '',
    amount: '',
    balance: 0,
    incDec: '',
    details: {},
    checked: 'Second',
    changed: false,
    key: 0,
  });
  useEffect(() => {
    if (state.text.length !== 0 && state.amount.length !== 0) {
      let CurrentDate = Key();
      if (state.details[CurrentDate] === undefined) {
        setState(prevState => ({
          ...prevState,
          details: {...prevState.details, [CurrentDate]: []},
        }));
      }
      setState(prevStates => ({
        ...prevStates,
        details: {
          ...prevStates.details,
          [CurrentDate]: [
            {
              Details: state.text,
              Amount: state.amount,
              Balance: state.balance,
              IncDec: state.incDec,
            },
            ...prevStates.details[CurrentDate],
          ],
        },
      }));
    }
  }, [state.balance, state.incDec]);

  function Submit() {
    switch (state.checked) {
      case 'First':
        setState(prevState => ({
          ...prevState,
          balance: Number(state.balance) + Number(state.amount),
          incDec: '+',
        }));
        break;
      case 'Second':
        setState(prevState => ({
          ...prevState,
          balance: Number(state.balance) - Number(state.amount),
          incDec: '-',
        }));
        break;
      case 'Third':
        setState(prevState => ({
          ...prevState,
          balance: state.balance,
          incDec: '#',
        }));
        break;
      default:
        console.log('No match');
    }
    setState(prevState => ({
      ...prevState,
      changed: true,
    }));
  }
  return (
    <View style={BalanceBox.Container}>
      <BalanceBx navigation={navigation} state={state} />
      {/*--------------------------------Details----------------------------------*/}
      <View>
        <DetailsSection states={state} setState={setState} />
        {/*--------------------------------Submit Button----------------------------------*/}
        <TouchableOpacity style={Details.SubmitButton} onPress={Submit}>
          <View style={Details.SubmitBtn}>
            <SubmitBtn color="#444C59" textColor="#EEEEEE" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Landing;
const BalanceBox = StyleSheet.create({
  Container: {
    backgroundColor: '#222831',
    height: '100%',
  },
});
const Details = StyleSheet.create({
  SubmitBtn: {
    width: '40%',
    marginTop: 20,
  },
  SubmitButton: {
    display: 'flex',
    height: '60%',
    alignItems: 'flex-end',
    marginRight: 35,
  },
});
