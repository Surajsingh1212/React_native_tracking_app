import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, TextInput } from 'react-native';
import Fields from '../common/Fields';
import { useNavigation } from '@react-navigation/native';



const Zeofence = () => {
    const Navigation = useNavigation()
    const handleAddZeofence = () => {
        Navigation.navigate('ZeofenceDetails')
    }
    const handlePolygonMap = () => {
        Navigation.navigate('GeofencePolygonMap')
    }
    return (
        <View className="flex flex-1 justify-center items-center bg-cyan-500">
            <View className="relative flex justify-center items-center z-40">
                <Image 
                    source={require("../../assets/zeofence/Zeofence.png")}
                    className="h-28 w-28 rounded-full absolute bottom-[-50] left-150  shadow-3xl"
                />
            </View>
            <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[80%] py-8">
                <ScrollView>
                    <View className="px-10 w-full">
                        <Text className="text-lg text-slate-700">Company Name</Text>
                        <View className=" w-full">
                            <Fields placeholder="#2343df45" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Geofence Category</Text>

                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Geofence Type</Text>
                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Contact</Text>
                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Address</Text>
                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Tolarance</Text>
                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Color Code</Text>
                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <Text className="text-lg text-slate-700">Description</Text>
                        <View>
                            <Fields placeholder="+9123232332" />
                        </View>
                    </View>
                    <View className="px-10">
                        <View className="rounded-xl mt-4 w-100">
                            <Button title="Geofence Polygon Map" onPress={handlePolygonMap} />
                        </View>
                    </View>
                    <View className="px-10">
                        <View className="rounded-xl mt-4 w-100">
                            <Button title="Create Now" onPress={handleAddZeofence} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Zeofence;