import {createStackNavigator} from 'react-navigation-stack';
import {About} from '../screens/About';
import React from 'react';
import {Header} from '../components/Header';
import {DetailsItems} from '../screens/DetailsItems';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title={navigation.state.routeName} />
        ),
      };
    },
  },
  DetailsItems: {
    screen: DetailsItems,
    navigationOptions: {
      title: 'Details Items',
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#2196f3', height: 60},
    headerTintColor: 'white',
  },
});

export default AboutStack;
