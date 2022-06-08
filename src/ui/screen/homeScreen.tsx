import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('+++ HOME');
        }}>
        <Text>Hello</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={() => console.log('+++ HHHHH')}>
        <Text>HHH</Text>
      </TouchableHighlight>
    </View>
  );
}

export default HomeScreen;
