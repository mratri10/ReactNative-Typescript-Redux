import * as React from 'react';
import {useController} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TypeInput} from '../../screen/root';

function InputApp(value: VInput) {
  const {field, fieldState} = useController({
    control: value.control,
    defaultValue: value.defaultValue,
    name: value.name,
  });

  return (
    <View>
      {value.isTitle ? (
        field.value ? (
          <Text style={styleInput.title}>{value.title}</Text>
        ) : null
      ) : null}
      <View style={[styleInput.view]}>
        {value.type == null || value.type == TypeInput?.TEXT ? (
          <TextInput
            style={[styleInput.input]}
            value={field.value}
            onChangeText={field.onChange}
            placeholder={value.title}
            ref={field.ref}
          />
        ) : null}
        {value.type == TypeInput?.EMAIL ? (
          <TextInput
            keyboardType="email-address"
            style={[styleInput.input]}
            value={field.value}
            onChangeText={field.onChange}
            placeholder={value.title}
            ref={field.ref}
          />
        ) : null}
        {value.type == TypeInput?.NUMBER ? (
          <TextInput
            keyboardType="number-pad"
            style={[styleInput.input]}
            value={field.value}
            onChangeText={field.onChange}
            placeholder={value.title}
            ref={field.ref}
          />
        ) : null}

        {value.type == TypeInput?.CHECKBOX_HORIZONTAL ? (
          <View style={styleInput.ch}>
            {value.chList?.map(item => {
              return (
                <TouchableOpacity
                  style={styleInput.chView}
                  key={item.id}
                  onPress={() => field.onChange(() => item.id.toString())}>
                  <View>
                    <Text style={styleInput.chTitle}>{item.value}</Text>
                  </View>
                  <View style={styleInput.chCircle}>
                    <View
                      style={
                        item.id == parseInt(field.value)
                          ? styleInput.chSelected
                          : styleInput.chDeselected
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </View>
      {fieldState.error ? (
        <Text style={styleInput.textError}>* {fieldState.error.message}</Text>
      ) : null}
    </View>
  );
}

const styleInput = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  title: {
    fontSize: 10,
    fontWeight: '600',
  },
  input: {
    paddingVertical: 2,
  },
  textError: {
    color: 'red',
    fontSize: 11,
    fontWeight: '600',
  },
  ch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chView: {flexDirection: 'row', alignItems: 'center', marginRight: 10},
  chCircle: {
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chSelected: {
    backgroundColor: 'blue',
    borderRadius: 6,
    height: 12,
    width: 12,
  },
  chDeselected: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 12,
    width: 12,
  },
  chTitle: {
    fontSize: 12,
    marginRight: 4,
  },
});
export default InputApp;
