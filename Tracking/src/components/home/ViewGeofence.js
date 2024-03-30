import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ViewGeofence = () => {
    const Navigation = useNavigation();
    const handleViewGeofence = () => {
        Navigation.navigate('ZeofenceDetails')
    }
    const handleCreateGeofence = () => {
        Navigation.navigate('Zeofence')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <View className="flex justify-center items-center my-5">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">Geofence Details List</Text>
                    </View>
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center "><Button onPress={handleCreateGeofence} title='Create Geofence' color="#fd453f" /></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleViewGeofence}>
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Geofence Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Geofence Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 bg-green-500 w-16 p-3 relative border-green-600">
                                    <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewGeofence} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Geofence Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Geofence Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 bg-red-500 w-16 p-3 relative border-orange-500">
                                    <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewGeofence} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Geofence Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Geofence Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 bg-pink-500 w-16 p-3 relative border-red-500">
                                    <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewGeofence} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Geofence Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Geofence Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 bg-yellow-500 w-16 p-3 relative border-orange-500">
                                    <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewGeofence} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Geofence Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Geofence Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 bg-green-500 w-16 p-3 relative border-green-500">
                                    <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewGeofence} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Geofence Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Geofence Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 bg-red-500 w-16 p-3 relative border-orange-500">
                                    <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default ViewGeofence;