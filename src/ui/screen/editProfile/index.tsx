import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  EMAILVALIDATION,
  PHONEVALIDATION,
  USIAVALIDATION,
  NAMAVALIDATION,
} from '../../../constants';
import InputApp from '../../widget/InputApp';
import {RootStackParamList, TypeInput} from '../root';

type prop = NativeStackNavigationProp<RootStackParamList, 'edit_profile'>;
function EditProfileScreen() {
  const navigation = useNavigation<prop>();
  const {control, handleSubmit, register} = useForm();
  const onSubmit = (v: any) => {
    console.log(JSON.stringify(v));
  };
  return (
    <View style={[styleProfile.backgroundApp]}>
      <FlatList
        data={[]}
        renderItem={({item, index}) => <View />}
        ListHeaderComponent={
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('camera')}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                }}>
                {/* <CameraApp /> */}
              </View>
            </TouchableOpacity>

            <View style={[styleProfile.cardInput]}>
              <Text style={styleProfile.cardTitle}>Profil Saya</Text>
              <View style={{height: 10}} />
              <InputApp
                title="Name"
                isTitle={true}
                defaultValue=""
                name="name"
                control={control}
                register={register('name', NAMAVALIDATION)}
              />
              <View style={styleProfile.lineHorizontal} />
              <View style={{height: 10}} />
              <InputApp
                title="Usia"
                isTitle={true}
                defaultValue=""
                name="usia"
                control={control}
                type={TypeInput.NUMBER}
                register={register('usia', USIAVALIDATION)}
              />
              <View style={styleProfile.lineHorizontal} />
              <View style={{height: 10}} />
              <InputApp
                title="Jenis Kelamin"
                defaultValue=""
                name="gendet"
                control={control}
                chList={[
                  {value: 'Laki-Laki', id: 1},
                  {value: 'Perempuan', id: 2},
                ]}
                type={TypeInput.CHECKBOX_HORIZONTAL}
              />
            </View>
            <View style={{height: 10}} />
            <View style={[styleProfile.cardInput]}>
              <Text style={styleProfile.cardTitle}>Kontak Saya</Text>
              <View style={{height: 10}} />
              <InputApp
                title="Email"
                defaultValue=""
                name="email"
                isTitle={true}
                control={control}
                type={TypeInput.EMAIL}
                register={register('email', EMAILVALIDATION)}
              />
              <View style={styleProfile.lineHorizontal} />

              <View style={{height: 10}} />
              <InputApp
                title="Phone"
                defaultValue=""
                name="phone"
                isTitle={true}
                control={control}
                type={TypeInput.NUMBER}
                register={register('phone', PHONEVALIDATION)}
              />
              <View style={styleProfile.lineHorizontal} />
              <View style={{height: 10}} />
              <InputApp
                title="Facebook"
                defaultValue=""
                name="facebook"
                isTitle={true}
                control={control}
                type={TypeInput.TEXT}
              />
            </View>
            <View style={{height: 40}} />
          </View>
        }
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styleProfile.buttonApp}>
        <Text style={styleProfile.textButton}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styleProfile = StyleSheet.create({
  backgroundApp: {
    backgroundColor: '#f2f2f2',
    margin: 20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardInput: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  lineHorizontal: {
    height: 1,
    backgroundColor: '#ddd',
  },
  buttonApp: {
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
