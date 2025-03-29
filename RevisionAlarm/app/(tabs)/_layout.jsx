import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color }) => {
    return(
        <View className="items-center justify-center">
            <Image 
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6"
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#FFFFFF",
            tabBarInactiveTintColor: "#000000",
            tabBarStyle: {
                backgroundColor: "#95E4FE",
                height: 80
            }
        }}
    >
        <Tabs.Screen 
            name="alarm"
            options={{
                title: "Alarm",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <TabIcon icon={icons.alarmIcon} color={color}/>
                )
            }}
        />
        <Tabs.Screen 
            name="flashcard"
            options={{
                title: "Flashcards",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <TabIcon icon={icons.flashcards} color={color}/>
                )
            }}
        />
        <Tabs.Screen 
            name="profile"
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <TabIcon icon={icons.profile} color={color}/>
                )
            }}
        />
    </Tabs>
    </>
  )
}

export default TabsLayout