import React from 'react';
import {View} from 'react-native';
import {DatePickerComponent} from '../components/DatePickerComponent';
import {Button, Text} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {globalStyles} from '../styles/Global';

export const Details = ({navigation}) => {
  const {colors} = useTheme();
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>DETAILS PAGE</Text>
      </View>
      <DatePickerComponent />
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>
          This is just regular text for testing styles.
        </Text>
      </View>
      <Button
        mode="contained"
        color="#2196f3"
        onPress={handlePress}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
        }}>
        Back To Home Screen
      </Button>
    </View>
  );
};
