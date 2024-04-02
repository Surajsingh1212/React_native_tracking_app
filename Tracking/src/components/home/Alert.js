import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome6'
import CustomHeader from '../utils/CustomHeader';

const Alert = ({navigation}) => {
    const Navigation = useNavigation();
    const handleAlertsDetails = () => {
        Navigation.navigate('AlertDetails')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="Alert" navigation={navigation} notificationCount={1}/>
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">View Latest Alerts</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleAlertsDetails}>
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2">
                                    <View className="border rounded-full p-1 border-cyan-500">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                                    </View>
                                    <View>
                                        <Text className="font-sans text-cyan-500 text-xl font-bold ">45J.SDXS.WRWS/TRIPONE</Text>
                                        <Text className="text-xl font-semibold text-green-500">01/04/2024 06:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-red-500"><Text className="text-md font-bold text-white">Pending</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="text-md font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2">
                                    <View className="border rounded-full p-1 border-cyan-500">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                                    </View>
                                    <View>
                                        <Text className="font-sans text-cyan-500 text-xl font-bold ">0945J.SDXS.WRWS/MangoTech</Text>
                                        <Text className="text-xl font-semibold text-green-500">01/04/2024 02:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-yellow-500"><Text className="text-md font-bold text-white">Updating</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="text-md font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2">
                                    <View className="border rounded-full p-1 border-cyan-500">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                                    </View>
                                    <View>
                                        <Text className="font-sans text-cyan-500 text-xl font-bold ">7845J.SDXS.WRWS/Tripo</Text>
                                        <Text className="text-xl font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-green-500"><Text className="text-md font-bold text-white">Resolve</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="text-md font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2">
                                    <View className="border rounded-full p-1 border-cyan-500">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                                    </View>
                                    <View>
                                        <Text className="font-sans text-cyan-500 text-xl font-bold ">4545J.SDXS.WRWS/Worldwide</Text>
                                        <Text className="text-xl font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-red-500"><Text className="text-md font-bold text-white">Pending</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="text-md font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2">
                                    <View className="border rounded-full p-1 border-cyan-500">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                                    </View>
                                    <View>
                                        <Text className="font-sans text-cyan-500 text-xl font-bold ">2345J.SDXS.WRWS/MangoTech</Text>
                                        <Text className="text-xl font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-red-500"><Text className="text-md font-bold text-white">Pending</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="text-md font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2">
                                    <View className="border rounded-full p-1 border-cyan-500">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full h-16 w-16" />
                                    </View>
                                    <View>
                                        <Text className="font-sans text-cyan-500 text-xl font-bold ">467J.SDXS.WRWS/TRIPONE</Text>
                                        <Text className="text-xl font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-green-500"><Text className="text-md font-bold text-white">Resolve</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="text-md font-bold text-white"><Icon2 name="clock" size={15} /> 01:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Alert;