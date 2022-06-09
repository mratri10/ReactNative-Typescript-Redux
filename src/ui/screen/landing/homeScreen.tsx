import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../root';

type prop = NativeStackNavigationProp<RootStackParamList, 'landing'>;
function HomeScreen() {
  const navigation = useNavigation<prop>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('checkout');
        }}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
