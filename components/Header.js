import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconButton} from 'react-native-paper';
export const Header = ({title, navigation}) => {
  const routeCheck = navigation.state.routeName;
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <IconButton
        icon="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
        color="#FFFFFF"
      />
      <View>
        {routeCheck === 'Home' ? (
          <Image
            source={require('../assets/icon_el.png')}
            style={styles.imageLogo}
          />
        ) : null}
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 24,
    color: 'white',
    letterSpacing: 1,
    fontFamily: 'roboto-medium',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  imageLogo: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    marginRight: 8,
    marginLeft: 48,
    borderRadius: 40,
  },
});
