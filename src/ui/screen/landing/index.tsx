import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeScreen from './homeScreen';
import ProfileScreen from './profileScreen';
import ScanScreen from './scanScreen';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {HOMETAB, PROFILETAB, SCANTAB} from '../../../constants';
import {tabAction} from '../../../redux/actions';
import {ApplicationState} from '../../../redux/reducers';
function LandingScreen() {
  const dispatch: Dispatch<any> = useDispatch();
  const tab: TabRoute = useSelector(
    (state: ApplicationState) => state.tabReducer,
  );

  return (
    <View style={{flex: 1}}>
      <TabScreen tab={tab.tab} />
      <Text>{tab.tab}</Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
        }}>
        <TabWidget
          name="Home"
          active={tab.tab == HOMETAB}
          onPress={() => dispatch(tabAction(HOMETAB))}
        />
        <TabWidget
          name="Scan"
          active={tab.tab == SCANTAB}
          onPress={() => dispatch(tabAction(SCANTAB))}
        />
        <TabWidget
          name="Profil"
          active={tab.tab == PROFILETAB}
          onPress={() => dispatch(tabAction(PROFILETAB))}
        />
      </View>
    </View>
  );
}
const styleSheet = StyleSheet.create({
  tabActive: {
    borderTopWidth: 2,
    borderColor: 'blue',
  },
  tabButton: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
  },
  textActive: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

const TabWidget = (value: TabValue) => {
  return (
    <TouchableOpacity
      style={[styleSheet.tabButton, value.active && styleSheet.tabActive]}
      onPress={value.onPress}>
      <Text style={[styleSheet.tabText, value.active && styleSheet.textActive]}>
        {value.name}
      </Text>
    </TouchableOpacity>
  );
};

const TabScreen = (tab: Itab) => {
  switch (tab.tab) {
    case PROFILETAB:
      return <ProfileScreen />;
    case SCANTAB:
      return <ScanScreen />;

    default:
      return <HomeScreen />;
  }
};

export default LandingScreen;
