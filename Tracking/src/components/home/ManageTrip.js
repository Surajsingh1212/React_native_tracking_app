import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../utils/CustomHeader';


const ManageTrip = ({ navigation }) => {
    const Navigation = useNavigation();
    const handleTripDetails = () => {
        Navigation.navigate('TripDetails')
    }
    const handleAddTrip = () => {
        Navigation.navigate('CreateTrip')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="ManageTrip" navigation={navigation} notificationCount={4} />
            <View className="flex justify-center items-center my-5">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center ">All Trip Lists</Text>
                    </View>
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center "><Button onPress={handleAddTrip} title='Create Trip' color="#fd453f" /></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black sm:text-2xl md:text-2xl text-lg font-extrabold">Trip Name : LKO TO UK</Text>
                                    <Text className="sm:text-xl md:text-xl font-bold text-md text-slate-500">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 sm:px-3 md:px-3 sm:py-3 md:py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center sm:my-2 md:my-2 my-auto">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center mt-5">
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black sm:text-2xl md:text-2xl text-lg font-extrabold">Trip Name : LKO TO UK</Text>
                                    <Text className="sm:text-xl md:text-xl font-bold text-md text-slate-500">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 sm:px-3 md:px-3 sm:py-3 md:py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center sm:my-2 md:my-2 my-auto">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center mt-5" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black sm:text-2xl md:text-2xl text-lg font-extrabold">Trip Name : LKO TO UK</Text>
                                    <Text className="sm:text-xl md:text-xl font-bold text-md text-slate-500">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 sm:px-3 md:px-3 sm:py-3 md:py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center sm:my-2 md:my-2 my-auto">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center mt-5" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black sm:text-2xl md:text-2xl text-lg font-extrabold">Trip Name : LKO TO UK</Text>
                                    <Text className="sm:text-xl md:text-xl font-bold text-md text-slate-500">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 sm:px-3 md:px-3 sm:py-3 md:py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center sm:my-2 md:my-2 my-auto">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center mt-5" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black sm:text-2xl md:text-2xl text-lg font-extrabold">Trip Name : LKO TO UK</Text>
                                    <Text className="sm:text-xl md:text-xl font-bold text-md text-slate-500">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 sm:px-3 md:px-3 sm:py-3 md:py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center sm:my-2 md:my-2 my-auto">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center mt-5 mb-5" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black sm:text-2xl md:text-2xl text-lg font-extrabold">Trip Name : LKO TO UK</Text>
                                    <Text className="sm:text-xl md:text-xl font-bold text-md text-slate-500">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 sm:px-3 md:px-3 sm:py-3 md:py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center sm:my-2 md:my-2 my-auto">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default ManageTrip;