import React from 'react';
import { View, Text, TextInput, ScrollView, } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../utils/CustomHeader';

const Home = ({navigation}) => {

    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="Home" navigation={navigation} notificationCount={5}/>
            <ScrollView>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <View className="flex flex-row align-middle justify-between">
                        <View>
                            <Text className="text-black text-2xl font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md text-slate-500">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className=" text-cyan-500 text-xl font-bold w-[10%] sm:px-3 md:px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className=" text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between md:px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
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
                            <Text className="text-black text-2xl font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md text-slate-500">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className=" text-cyan-500 text-xl font-bold w-[10%] sm:px-3 md:px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className=" text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between md:px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
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
                            <Text className=" text-black text-2xl font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md text-slate-500">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className=" text-cyan-500 text-xl font-bold w-[10%] sm:px-3 md:px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className=" text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between md:px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
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
                            <Text className=" text-black text-2xl font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md text-slate-500">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className=" text-cyan-500 text-xl font-bold w-[10%] sm:px-3 md:px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className=" text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between md:px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center text-slate-700 sm:text-md md:text-xl text-xs">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 sm:px-5 md:px-5 px-4 sm:py-4 md:py-4 py-3 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
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

export default Home;