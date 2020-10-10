// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// import {Camera} from 'expo-camera';

// import {Header, Item, Icon, Input} from 'native-base';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export const CameraComponent = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const {status} = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={{flex: 1}}>
//       <Camera style={{flex: 1, justifyContent: 'space-between'}} type={type}>
//         <Header
//           searchBar
//           rounded
//           style={{
//             position: 'absolute',
//             backgroundColor: 'transparent',
//             left: 0,
//             top: 0,
//             right: 0,
//             zIndex: 100,
//             alignItems: 'center',
//           }}>
//           <View style={{flexDirection: 'row', flex: 4}}>
//             <Icon name="logo-snapchat" style={{color: 'white'}} />
//             <Item style={{backgroundColor: 'transparent'}}>
//               <Icon
//                 name="ios-search"
//                 style={{
//                   color: 'white',
//                   fontSize: 24,
//                   fontWeight: 'bold',
//                 }}
//               />

//               <Input placeholder="Search" placeholderTextColor="white" />
//             </Item>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               flex: 2,
//               justifyContent: 'space-around',
//             }}>
//             <Icon
//               name="ios-flash"
//               style={{color: 'white', fontWeight: 'bold'}}
//             />
//             <Icon
//               onPress={() => {
//                 setType(
//                   type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back,
//                 );
//               }}
//               name="ios-reverse-camera"
//               style={{color: 'white', fontWeight: 'bold'}}
//             />
//           </View>
//         </Header>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             paddingHorizontal: 10,
//             marginBottom: 15,
//             alignItems: 'flex-end',
//           }}>
//           <MaterialCommunityIcons
//             name="message-reply"
//             style={{color: 'white', fontSize: 36}}
//           />

//           <View style={{alignItems: 'center'}}>
//             <MaterialCommunityIcons
//               name="circle-outline"
//               style={{
//                 color: 'white',
//                 fontSize: 100,
//                 position: 'relative',
//                 bottom: 8,
//               }}
//             />
//             <Icon name="ios-images" style={{color: 'white', fontSize: 36}} />
//           </View>
//           <MaterialCommunityIcons
//             name="google-circles-communities"
//             style={{color: 'white', fontSize: 36}}
//           />
//         </View>
//       </Camera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
