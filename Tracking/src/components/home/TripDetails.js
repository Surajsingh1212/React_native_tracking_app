import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'
import CustomHeader from '../utils/CustomHeader';


const TripDetails = ({navigation}) => {
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="TripDetails" navigation={navigation} notificationCount={4}/>
            <View className="p-5 text-white  mx-11">
                <View className="mt-5 flex-row justify-between">
                    <Text className="font-sans from-neutral-950 text-white text-xl">Vehicle No : ABI454S</Text>
                    <Text className="font-sans from-neutral-950 text-white text-xl">Trip No : Trip3454</Text>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[80%] bg-slate-100 shadow-lg p-5 rounded-xl">
                    <Text className="font-sans text-cyan-500 text-xl p-2 font-bold"><Icon className="" name="location-dot" size={30}></Icon > Vehicle No : 3434SDJ RAJ KOT</Text>
                    <Text className="text-start text-xl font-semibold text-green-500">Ignition: On</Text>
                </View>
            </View>
            <View className="flex justify-center items-center mt-5">
                <View className="w-[80%] bg-slate-100 p-5 rounded-xl">
                    <Text className="font-sans text-black text-2xl font-bold  mb-5 ">From</Text>
                    <Text className="text-xl">Lucknow Vibhuti Khand D77/3rd Floor</Text>
                    <Text className="font-sans text-black text-2xl font-bold mt-3 mb-5">To</Text>
                    <Text className="text-xl mb-4">Ayodhya Ram Mandir </Text>
                </View>
            </View>
            <View className="flex-row justify-center items-center mt-5 space-x-3">
                <TouchableOpacity className="bg-red-500 text-white font-bold py-3 rounded-full text-center w-[28%]">
                    <Text className="text-white text-center text-xl"><Icon className="" name="pause" size={20}></Icon> Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-green-500 text-white font-bold py-3 rounded-full text-center w-[28%]">
                    <Text className="text-white text-center text-xl"><Icon className="" name="play" size={20}></Icon>  Start</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-yellow-500 font-bold py-3 rounded-full text-center w-[28%]">
                    <Text className="text-white text-center text-xl"><Icon className="" name="stop" size={20}></Icon> Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TripDetails;