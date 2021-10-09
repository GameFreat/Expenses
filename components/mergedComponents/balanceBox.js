import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
export function BalanceBx({navigation, state}) {
  return (
    <View style={BalanceBox.DisplayCenter}>
      <View style={BalanceBox.BalanceYellowBG}>
        <View style={BalanceBox.BalanceBox}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('DetailsScreen', {
              //   values:
              //     state.details.length !== 0
              //       ? state.details
              //       : [
              //           {
              //             Details: '',
              //             Balance: 0,
              //             Amount: '',
              //             key: 0,
              //             IncDec: '',
              //           },
              //         ],
              // });
              console.log(state.details);
            }}
            style={BalanceBox.BalanceBoxInner}>
            <Text style={BalanceBox.BalanceBoxText}>₹{state.balance}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const BalanceBox = StyleSheet.create({
  Container: {
    backgroundColor: '#222831',
    height: '100%',
  },
  DisplayCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '43%',
  },
  BalanceYellowBG: {
    backgroundColor: '#FFD369',
    height: '84.5%',
    width: '94%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 20,
  },
  BalanceBox: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BalanceBoxInner: {
    height: '29%',
    width: '50%',
    backgroundColor: '#0A1931',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  BalanceBoxText: {
    color: '#EEEEEE',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
});
