import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome6'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/AntDesign'
import MapView from 'react-native-maps';


const LiveTracking = () => {
    const [bottomVisible, setBottomVisible] = useState(false)
    const [topVisible, setTopVisible] = useState(false)
    return (
        <View className="w-full h-screen relative">
            <MapView
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                initialRegion={{
                    latitude: 26.850000,
                    longitude: 80.949997,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View className="flex justify-center items-center mt-5">
                <View className="w-[80%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <View className="flex-row justify-between">
                        <View className="flex-row space-x-3 space-y-2">
                            <View className="border rounded-full p-1 border-cyan-500">
                                <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                            </View>
                            <View>
                                <Text className="font-sans text-cyan-500 text-xl font-bold ">45J.SDXS.WRWS/TRIPONE</Text>
                                <Text className="text-xl font-semibold text-green-500">01/04/2024 12:00</Text>
                            </View>
                        </View>
                        <View className="flex">
                            <View className="rounded-xl px-3 py-1 bg-slate-200"><Text className="text-md font-bold text-cyan-500"><Icon2 name="location-dot" size={15} /> 150KM</Text></View>
                            <View className="rounded-xl px-3 py-1 bg-slate-200 mt-3"><Text className="text-md font-bold text-cyan-500"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="absolute top-24 rounded-full p-1 right-auto border-cyan-500 border" onPress={() => setTopVisible(!topVisible)}>
                    <Text className="text-cyan-500">{topVisible ? <Icon2 name="circle-arrow-up" size={20} /> : <Icon2 name="circle-arrow-down" size={20} />}</Text>
                </TouchableOpacity>
            </View>
            {topVisible && (
                <View className="flex justify-center items-center mt-5 ">
                    <View className="w-[80%] bg-slate-100 p-5 rounded-xl">
                        <Text className="font-sans text-black text-2xl font-bold  mb-5 ">From</Text>
                        <Text className="text-xl">Lucknow Vibhuti Khand D77/3rd Floor</Text>
                        <Text className="font-sans text-black text-2xl font-bold mt-3 mb-5">To</Text>
                        <Text className="text-xl mb-4">Ayodhya Ram Mandir </Text>
                    </View>
                </View>
            )}
            <TouchableOpacity className="absolute top-[80%] right-5" onPress={() => setBottomVisible(!bottomVisible)}>
                <View className="bg-cyan-400 p-5 rounded-full">
                    <Text className="text-white text-md">{bottomVisible ? <Icon4 className="" name="menu-unfold" size={20} /> : <Icon4 className="" name="menu-fold" size={20} />}</Text>
                </View>
            </TouchableOpacity>
            {bottomVisible && (
                <View className=" absolute bottom-28 left-5 w-[80%]">
                    <View className=" bg-slate-100 p-5 rounded-xl">
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
                        <View className="flex flex-row align-middle justify-between px-5 mt-4">
                            <View>
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="transit-connection-variant" size={20} /></Text>
                                    </View>
                                    <Text className="text-center">Theft</Text>
                                </View>
                            </View>
                            <View>
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                        <Text className="text-white text-xl"><Icon name="share-location" size={20} /></Text>
                                    </View>
                                    <Text className="text-center">Geofence </Text>
                                </View>
                            </View>
                            <View>
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="connection" size={20} /></Text>
                                    </View>
                                    <Text className="text-center">Engine OFF</Text>
                                </View>
                            </View>
                            <View>
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4 rounded-full mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="share-variant" size={20} /></Text>
                                    </View>
                                    <Text className="text-center">Share </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

export default LiveTracking;