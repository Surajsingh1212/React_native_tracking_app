import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ navigation, title, notificationCount }) => {
  const Navigation = useNavigation()
  const handleAlertsNavigation=()=>{
    Navigation.navigate('Alerts')
  }
  return (
    <View className="flex-row w-full p-4 justify-between bg-slate-100">
      <TouchableOpacity onPress={() => navigation.openDrawer()} className="flex items-center">
        <Icon name="menu" size={32} Text="text-cyan-500" />
      </TouchableOpacity>
      <View className="flex relative  w-1/2 justify-between">
        <TextInput placeholder="Search..." className="border w-full rounded-full border-cyan-500 px-4 py-1" />
        <TouchableOpacity className="rounded-full px-1 pt-2 absolute top-0 right-0">
          <Icon name="magnify" size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="flex items-center" onPress={handleAlertsNavigation}>
        <Icon name="bell" size={32} />
        {notificationCount > 0 && (
          <View className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            <Text className="text-white text-xs">{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
