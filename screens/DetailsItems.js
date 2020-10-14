import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {globalStyles} from '../styles/Global';
import {Card} from '../components/Card';

export const DetailsItems = ({navigation}) => {
  const {colors} = useTheme();
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{marginTop: 20}}>
        <Text style={{color: 'red', fontSize: 16}}>
          Here you can see details.
        </Text>
      </View>
      <View
        style={{
          padding: 4,
          borderColor: '#333',
          backgroundColor: '#3334',
          margin: 10,
        }}>
        <Card>
          <Text style={globalStyles.text}>ID: {navigation.getParam('id')}</Text>
          <Text style={globalStyles.text}>
            TITLE: {navigation.getParam('title')}
          </Text>
          <Text style={globalStyles.text}>
            USER ID: {navigation.getParam('userId')}
          </Text>
          <Text style={globalStyles.text}>
            TEXT: {navigation.getParam('body')}
          </Text>
        </Card>
      </View>

      <View style={globalStyles.container}>
        <Text style={{color: 'red', fontSize: 16}}>THANK YOU!</Text>
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
        Back
      </Button>
    </View>
  );
};
