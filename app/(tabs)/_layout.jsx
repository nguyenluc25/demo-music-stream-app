import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Octicons name="search" size={24} color={color} />
                }}
            />
            <Tabs.Screen name='feed'
                options={{
                    title: 'Feed',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="feed" size={24} color={color} />
                }} />
            <Tabs.Screen name='library'
                options={{
                    title: 'Library',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="library" size={24} color={color} />
                }} />
        </Tabs>
    )
}