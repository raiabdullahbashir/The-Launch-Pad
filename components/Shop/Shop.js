import React, { useEffect } from 'react';
import {

  View,
  StyleSheet,
 
  Linking,
} from 'react-native';

export default function Shops({navigation}) {
  useEffect(() => {
    Linking.openURL('https://thelaunchpad.store/');
    navigation.navigate('HOME')
  },[]);

  return (
    <View>
    </View>
  );
}
