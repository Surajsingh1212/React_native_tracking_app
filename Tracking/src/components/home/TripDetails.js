import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'
import CustomHeader from '../utils/CustomHeader';


const TripDetails = ({ navigation }) => {
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="TripDetails" navigation={navigation} notificationCount={4} />
            <View className="p-5 text-white sm:mx-11 md:mx-11">
                <View className="mt-5 flex-row justify-between">
                    <Text className="from-neutral-950 text-white sm:text-xl md:text-xl text-md">Vehicle No : ABI454S</Text>
                    <Text className="from-neutral-950 text-white sm:text-xl md:text-xl text-md">Trip No : Trip3454</Text>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="sm:w-[80%] md:w-[80%] w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <Text className="text-cyan-500 sm:text-xl md:text-xl text-lg p-2 font-bold"><Icon className="" name="location-dot" size={30}></Icon > Vehicle No : 3434SDJ RAJ KOT</Text>
                    <Text className="text-start sm:text-xl md:text-xl text-lg font-semibold text-green-500">Ignition: On</Text>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="sm:w-[80%] md:w-[80%] w-[90%] bg-slate-100 p-5 rounded-xl">
                    <Text className="text-slate-950 sm:text-2xl md:text-2xl text-xl font-bold  mb-5 ">From</Text>
                    <Text className="sm:text-xl md:text-xl text-md text-slate-700">Lucknow Vibhuti Khand D77/3rd Floor</Text>
                    <Text className="text-slate-950 sm:text-2xl md:text-2xl text-xl font-bold mt-3 mb-5">To</Text>
                    <Text className="sm:text-xl md:text-xl text-md mb-4 text-slate-700">Ayodhya Ram Mandir </Text>
                </View>
            </View>
            <View className="flex-row justify-center items-center mt-5 space-x-3">
                <TouchableOpacity className="bg-red-500 text-white font-bold py-3 rounded-full text-center w-[28%]">
                    <Text className="text-white text-center sm:text-xl md:text-xl text-md"><Icon className="" name="pause" size={15}></Icon> Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-green-500 text-white font-bold py-3 rounded-full text-center w-[28%]">
                    <Text className="text-white text-center sm:text-xl md:text-xl text-md"><Icon className="" name="play" size={15}></Icon>  Start</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-yellow-500 font-bold py-3 rounded-full text-center w-[28%]">
                    <Text className="text-white text-center sm:text-xl md:text-xl text-md"><Icon className="" name="stop" size={15}></Icon> Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TripDetails;