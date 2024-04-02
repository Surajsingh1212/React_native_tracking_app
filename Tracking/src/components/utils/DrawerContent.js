import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/MaterialIcons'

const DrawerContent = (props) => {
  const { activeScreen, setActiveScreen } = props
  return (
    <View  className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="pt-10 px-5 flex-1">
          <View className="flex flex-row items-center mb-5">
            <Image source={require('../../assets/avatar/avatar.jpg')} className="shadow-lg" style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View className="ml-4">
              <Text className="text-lg font-bold text-gray-700 shadow-lg">Suraj Singh</Text>
              <Text className="text-base text-gray-600 shadow-lg">text@gmail.com</Text>
            </View>
          </View>
        </View>
        <View className="mb-5 p-3">
          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'Home' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('Home'); props.navigation.navigate('Home') }}>
            <View className="transform translate-y-1">
              <Icon name="home-circle-outline" color={activeScreen === 'Home' ? '#ffffff' : 'rgb(75 85 99)'} size={28} />
            </View> Dashboard</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'LiveTracking' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('LiveTracking'); props.navigation.navigate('LiveTracking') }}>
            <View className="transform translate-y-1">
              <Icon3 name="track-changes" color={activeScreen === 'LiveTracking' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Live Tracking</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'CreateJob' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('CreateJob'); props.navigation.navigate('CreateJob') }}>
            <View className="transform translate-y-1">
              <Icon2 name="paperclip" color={activeScreen === 'CreateJob' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Create Job</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'ViewJobs' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('ViewJobs'); props.navigation.navigate('ViewJobs') }}>
            <View className="transform translate-y-1">
              <Icon name="newspaper-variant-outline" color={activeScreen === 'ViewJobs' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> View Jobs</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'LockDetails' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('LockDetails'); props.navigation.navigate('LockDetails') }}>
            <View className="transform translate-y-1">
              <Icon name="lock" color={activeScreen === 'LockDetails' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Lock Details</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'ManageTrip' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('ManageTrip'); props.navigation.navigate('ManageTrip') }}>
            <View className="transform translate-y-1">
              <Icon2 name="car" color={activeScreen === 'ManageTrip' ? '#ffffff' : 'rgb(75 85 99)'} size={26}  />
            </View> Manage Trip</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'TripDetails' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('TripDetails'); props.navigation.navigate('TripDetails') }}>
            <View className="transform translate-y-1">
              <Icon name="newspaper" color={activeScreen === 'TripDetails' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Trip Details</Text>

            <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'Zeofence' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('Zeofence'); props.navigation.navigate('Zeofence') }}>
            <View className="transform translate-y-1">
              <Icon2 name="map-location-dot" color={activeScreen === 'Zeofence' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Add Geofence</Text>

            <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'ViewGeofence' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('ViewGeofence'); props.navigation.navigate('ViewGeofence') }}>
            <View className="transform translate-y-1">
              <Icon2 name="magnifying-glass-location" color={activeScreen === 'ViewGeofence' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Geofence Details</Text>

            <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'Alerts' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('Alerts'); props.navigation.navigate('Alerts') }}>
            <View className="transform translate-y-1">
              <Icon3 name="notifications-active" color={activeScreen === 'Alerts' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Alerts</Text>

          <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'Profile' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('Profile'); props.navigation.navigate('Profile') }}>
            <View className="transform translate-y-1">
              <Icon2 name="circle-user" color={activeScreen === 'Profile' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Profile</Text>

          {/* <Text className={`py-3 px-3  shadow-2xl rounded-lg text-xl  ${activeScreen === 'polygonMap' ? 'bg-cyan-400 text-white' : 'bg-transparent text-gray-600'}`}
            onPress={() => { setActiveScreen('polygonMap'); props.navigation.navigate('polygonMap') }}>
            <View className="transform translate-y-1">
              <Icon2 name="circle-user" color={activeScreen === 'polygonMap' ? '#ffffff' : 'rgb(75 85 99)'} size={26} />
            </View> Polygon Map </Text> */}
        </View>
      </DrawerContentScrollView>
      <View className=" px-3 py-2">
        <Text className="bg-cyan-400 py-3 px-3 text-white shadow-2xl rounded-lg text-xl text-center" onPress={() => { }}>Logout <Icon name="logout" className="" size={30} /></Text>
      </View>
    </View>
  );
}

export default DrawerContent;
