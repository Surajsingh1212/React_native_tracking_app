import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ZeofenceDetails = () => {
    const Navigation = useNavigation()
    const handleViewGeofence = () => {
        Navigation.navigate('ViewGeofence')
    }
    const tableData = [
        ["Category", "Testing"],
        ["Contact No ", "4564565634"],
        ["Latitude", "23.23,234,2.422342.3.42,.232.,24"],
        ["Longitude", "234.234,.23,23.3,443.34,.334,34.34"]

    ];
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <View className="flex justify-center items-center my-5">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">Geofence Full Details</Text>
                    </View>
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center "><Button onPress={handleViewGeofence} title='View All Geofence' color="#fd453f" /></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View className="flex justify-center items-center">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                        <View className="flex flex-row align-middle justify-between">
                            <View>
                                <Text className="font-sans text-black text-2xl  font-bold">COMPANY : DIZITAL DREAMS</Text>
                                <Text className="text-xl">TYPE : DIZIBIZZ</Text>
                                
                            </View>
                            <View className="h-16 border-2 bg-cyan-500 w-16 p-3 relative border-green-500">
                                <Text className="text-xs font-bold text-white text-center ">Color #d54fg </Text>
                            </View>
                        </View>
                            <View className=" py-4">
                                <View className="flex flex-row justify-between border-b border-gray-300">
                                    <Text className="text-black text-lg font-bold">Attribute</Text>
                                    <Text className="text-black text-lg font-bold">Value</Text>
                                </View>
                                {tableData.map((row, rowIndex) => (
                                    <View key={rowIndex} className="flex flex-row justify-between py-2 border-b border-gray-300">
                                        <Text className="text-gray-700 text-lg">{row[0]}</Text>
                                        <Text className="text-gray-700 text-lg">{row[1]}</Text>
                                    </View>
                                ))}
                            </View>
                        <View className="my-4 flex flex-col align-middle justify-between">
                            <Text className="font-bold w-100 mb-2 text-xl text-black">Description : </Text>
                            <Text className=" font-bold w-100">
                                Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                        </View>
                        <View className="my-4 flex flex-col align-middle justify-between">
                            <Text className="font-bold w-100 mb-2 text-xl text-black">Address : </Text>
                            <Text className=" font-sans text-cyan-500 text-xl font-bold w-100">
                                Mango Traveler , Lucknow Vibhuti Khand D77 Building 3rd Floor 226010</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ZeofenceDetails;