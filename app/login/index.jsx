import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function LaunchScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('./../../assets/images/Launch Screen - Premium/Image 112.png')}
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Image source={require('./../../assets/images/Launch Screen - Premium/Image 113.png')}
          style={{
            width: 100,
            height: 100,
            marginBottom: 300,
          }}
        />
        <Image source={require('./../../assets/images/Launch Screen - Premium/Welcome toPremium.png')}
          style={{
            marginBottom: 100,
          }}
        />
        <Pressable onPress={() => navigation.navigate('(tabs)', { screen: 'home' })}>
          <Image source={require('./../../assets/images/Launch Screen - Premium/Button 14.png')} />
        </Pressable>
      </View>
    </ImageBackground >

  )
}