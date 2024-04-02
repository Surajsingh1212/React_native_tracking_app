import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Table, Row } from 'react-native-table-component'
import CustomHeader from '../utils/CustomHeader';


const AlertDetails = ({navigation}) => {
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="AlertDetails" navigation={navigation} notificationCount={2}/>
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">Alerts Details </Text>
                    </View>
                </View>
            </View>
            <View className=" items-center ">
                <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl h-fit">
                    <View className="flex justify-center items-center text-center ">
                        <Image source={require('../../assets/notification/alert.png')} className="h-72 w-72" />
                    </View>
                    <View className="mt-5 px-5">
                        <Text className="text-2xl font-bold text-cyan-600 mb-2 ">Trip Id: 12345</Text>
                        <Text className="text-xl font-bold text-cyan-600 mb-2 ">Trip Name: Eample Trip</Text>
                        <Text className="text-xl font-bold text-cyan-600 mb-2">Trip Type: Business</Text>
                        <Text className="text-xl text-gray-700 ">Trip Status: In Progress</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default AlertDetails;