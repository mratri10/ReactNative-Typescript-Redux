export const MAIN_SCREEN = 'MainScreen';
export const CAMERA_SCREEN = 'CameraScreen';

export type RootStackParamList = {
  MainScreen: undefined;
  CameraScreen: {id: number} | undefined;
};
