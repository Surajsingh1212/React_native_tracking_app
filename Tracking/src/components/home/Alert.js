import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome6'
import CustomHeader from '../utils/CustomHeader';

const Alert = ({ navigation }) => {
    const Navigation = useNavigation();
    const handleAlertsDetails = () => {
        Navigation.navigate('AlertDetails')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="Alert" navigation={navigation} notificationCount={1} />
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center ">View Latest Alerts</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleAlertsDetails}>
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-2 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View className="flex">
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md  font-bold ">45J.SDX.WRWS/TRIPONE</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">01/04/2024 06:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-red-500"><Text className="sm:text-md md:text-md text-xs font-bold text-white">Pending</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="sm:text-md md:text-md text-xs font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View>
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md font-bold ">0945J.SDXS.WRWS/MangoTech</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">01/04/2024 02:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-yellow-500"><Text className="sm:text-md md:text-md text-xs font-bold text-white">Updating</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="sm:text-md md:text-md text-xs font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View>
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md font-bold ">7845J.SDXS.WRWS/Tripo</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-green-500"><Text className="sm:text-md md:text-md text-xs font-bold text-white">Resolve</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="sm:text-md md:text-md text-xs font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View>
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md font-bold ">4545J.SDXS.WRWS/Worldwide</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-red-500"><Text className="sm:text-md md:text-md text-xs font-bold text-white">Pending</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="sm:text-md md:text-md text-xs font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View>
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md font-bold ">2345J.SDXS.WRWS/MangoTech</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-red-500"><Text className="sm:text-md md:text-md text-xs font-bold text-white">Pending</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="sm:text-md md:text-md text-xs font-bold text-white"><Icon2 name="clock" size={15} /> 12:00</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlertsDetails} className="mt-5 mb-5">
                    <View className="flex justify-center items-center">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex-row justify-between">
                                <View className="flex-row space-x-3 space-y-2 w-2/3">
                                    <View className="border rounded-full p-1 border-cyan-500 my-auto">
                                        <Image source={require("../../assets/trip/trip1.png")} className="rounded-full sm:h-16 sm:w-16 md:h-16 md:w-16 h-12 w-12" />
                                    </View>
                                    <View>
                                        <Text className="text-cyan-500 sm:text-xl md:text-xl text-md font-bold ">467J.SDXS.WRWS/TRIPONE</Text>
                                        <Text className="sm:text-xl md:text-xl text-md font-semibold text-green-500">01/04/2024 12:00</Text>
                                    </View>
                                </View>
                                <View className="flex">
                                    <View className="rounded-md px-3 py-1 bg-green-500"><Text className="sm:text-md md:text-md text-xs font-bold text-white">Resolve</Text></View>
                                    <View className="rounded-md px-3 py-1 bg-blue-500 mt-3"><Text className="sm:text-md md:text-md text-xs font-bold text-white"><Icon2 name="clock" size={15} /> 01:00</Text></View>
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