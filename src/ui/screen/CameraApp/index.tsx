import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../root';

type CameraScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'camera'>;
  route?: RouteProp<RootStackParamList, 'camera'>;
};

const CameraScreen: React.FC<CameraScreenProps> = ({navigation, route}) => {
  const cameraRef = useRef<RNCamera | null>(null);

  return (
    <RNCamera
      ref={cameraRef}
      style={styles.camera}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    />
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  lastPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  labelText: {
    fontSize: 40,
    color: 'white',
  },
});
