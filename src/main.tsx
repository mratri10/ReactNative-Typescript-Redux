import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
import CheckoutScreen from './ui/screen/checkout';
import LandingScreen from './ui/screen/landing';
import SplashScreen from './ui/screen/splashScreen';

function Telehealth() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {}, []);
  const backPressed = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exitttt?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  };

  const backAction = (data: RListener) => {
    if (data.state.index == 1) {
      BackHandler.addEventListener('hardwareBackPress', backPressed);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backPressed);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenListeners={{
          state: e => backAction(e.data as RListener),
        }}>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Group>
          <Stack.Screen
            name="landing"
            component={LandingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="checkout" component={CheckoutScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Telehealth;
