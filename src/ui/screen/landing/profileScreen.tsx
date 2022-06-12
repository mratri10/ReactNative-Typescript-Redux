import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {RootStackParamList} from '../root';

type prop = NativeStackNavigationProp<RootStackParamList, 'landing'>;
function ProfileScreen() {
  const navigation = useNavigation<prop>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('edit_profile');
        }}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
