import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomHeader from '../utils/CustomHeader';


const LockDetails = ({ navigation }) => {
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="LockDetails" navigation={navigation} notificationCount={4} />
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className="font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center ">Lock Details </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View className="flex justify-center items-center">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="text-black text-lg sm:text-2xl md:text-2xl font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-md sm:text-xl md:text-xl font-bold text-slate-500">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2 mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="battery-alert" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Battery Status</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="text-black text-lg sm:text-2xl md:text-2xl font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-md sm:text-xl md:text-xl font-bold text-slate-500">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2 mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="battery-alert" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Battery Status</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="text-black text-lg sm:text-2xl md:text-2xl font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-md sm:text-xl md:text-xl font-bold text-slate-500">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2 mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="battery-alert" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Battery Status</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5 mb-5">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="text-black text-lg sm:text-2xl md:text-2xl font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-md sm:text-xl md:text-xl font-bold text-slate-500">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2 mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 sm:px-5 md:px-5 sm:py-4 md:py-4 px-3 py-2  mx-1">
                                        <Text className="text-white text-md sm:text-xl md:text-xl"><Icon name="battery-alert" size={30} /></Text>
                                    </View>
                                    <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Battery Status</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

export default LockDetails;