import React from 'react';
import { View, Text, TextInput, ScrollView, } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';


const Home = () => {

    return (
        <View className="w-full bg-cyan-400 h-screen">
            <View className="flex justify-center items-center mt-5">
                <View className="w-[90%] shadow-lg rounded-full border bg-white border-white px-12  relative">
                    <TextInput className="ms-4" />
                </View>
                <View className="absolute right-14 ">
                    <Icon2 name="search" size={20} />
                </View>
            </View>
            <ScrollView>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <View className="flex flex-row align-middle justify-between">
                        <View>
                            <Text className="font-sans text-black text-2xl  font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[10%] px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
                                </View>
                                <Text className="text-center">Battery Status</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <View className="flex flex-row align-middle justify-between">
                        <View>
                            <Text className="font-sans text-black text-2xl  font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[10%] px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
                                </View>
                                <Text className="text-center">Battery Status</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <View className="flex flex-row align-middle justify-between">
                        <View>
                            <Text className="font-sans text-black text-2xl  font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[10%] px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
                                </View>
                                <Text className="text-center">Battery Status</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <View className="flex flex-row align-middle justify-between">
                        <View>
                            <Text className="font-sans text-black text-2xl  font-bold">3434SDJ RAJ/TRIPO</Text>
                            <Text className="text-md">29/03/2024 , 13:00</Text>
                        </View>
                        <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                            <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                            <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                        </View>
                    </View>
                    <View className="my-4 flex flex-row align-middle justify-between">
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[10%] px-3"><Icon name="location-on" size={30} /></Text>
                        <Text className="font-sans text-cyan-500 text-xl font-bold w-[90%]">
                            Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                    </View>
                    <View className="flex flex-row align-middle justify-between px-5">
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="wifi-calling-3" size={20} /></Text>
                                </View>
                                <Text className="text-center">Call Driver</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="update" size={20} /></Text>
                                </View>
                                <Text className="text-center">Trip Details</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon3 name="navigation-variant-outline" size={20} /></Text>
                                </View>
                                <Text className="text-center">Navigation</Text>
                            </View>
                        </View>
                        <View>
                            <View className="flex flex-col items-center">
                                <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                    <Text className="text-white text-xl"><Icon name="battery-alert" size={20} /></Text>
                                </View>
                                <Text className="text-center">Battery Status</Text>
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