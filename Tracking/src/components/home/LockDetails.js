import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'


const LockDetails = () => {
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">Lock Details </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View className="flex justify-center items-center">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="font-sans text-black text-2xl  font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-xl font-bold font-sans">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="battery-alert" size={30} /></Text>
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
                                <Text className="font-sans text-black text-2xl  font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-xl font-bold font-sans">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="battery-alert" size={30} /></Text>
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
                                <Text className="font-sans text-black text-2xl  font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-xl font-bold font-sans">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="battery-alert" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Battery Status</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center mt-5 mb-24">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="font-sans text-black text-2xl  font-bold">Device Name : 345DNSDS</Text>
                                <Text className="text-xl font-bold font-sans">Device Type : HESDLSK</Text>
                            </View>
                            <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
                                <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                            </View>
                        </View>
                        <View className="flex flex-row align-middle justify-left my-5 ">
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="wifi" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon3 name="lock" size={30} /></Text>
                                    </View>
                                    <Text className="text-center">Lock Status</Text>
                                </View>
                            </View>
                            <View className="mx-3">
                                <View className="flex flex-col items-center">
                                    <View className="bg-cyan-500 px-5 py-4  mx-1">
                                        <Text className="text-white text-xl"><Icon name="battery-alert" size={30} /></Text>
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

export default LockDetails;