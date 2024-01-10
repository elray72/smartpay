import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {Tabs} from "expo-router";
import Colors from '@/constants/Colors';

const HomeLayout = () => {

  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{tabBarActiveTintColor:Colors[colorScheme ?? 'light'].tint}} />
    </Tabs>
  );
};

export default HomeLayout;
