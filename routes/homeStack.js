import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../screens/Home';
import {Details} from '../screens/Details';
import {Header} from '../components/Header';
// import {CameraComponent} from '../components/CameraComponent';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Smart Electric Meter" />
        ),
      };
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    },
  },
  // CameraScreen: {
  //   screen: CameraComponent,
  //   navigationOptions: {
  //     title: 'Camera',
  //   },
  // },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: '#2196f3', height: 60},
    headerTintColor: 'white',
    headerBackTitleStyle: {
      fontWeight: '600',
      fontSize: 28,
      color: 'white',
      letterSpacing: 1,
      fontFamily: 'roboto-medium',
    },
  },
});

export default HomeStack;
