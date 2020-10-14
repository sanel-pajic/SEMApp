import * as React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import {StyleSheet, Image} from 'react-native';
import {Container, Content, Header, Body, Text} from 'native-base';
import {globalStyles} from '../styles/Global';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Text style={(globalStyles.text, styles.text)}>
          Smart Electric Meter
        </Text>
        <Image
          style={styles.drawerImage}
          source={require('../assets/icon_logo.png')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

const styles = StyleSheet.create({
  drawerHeader: {
    height: 250,
    backgroundColor: 'white',
  },
  drawerImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#dd2c00',
    fontWeight: '700',
    marginBottom: 15,
  },
});

export default createAppContainer(RootDrawerNavigator);
