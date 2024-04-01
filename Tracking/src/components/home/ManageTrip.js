import React from 'react';
import { View, Text, ScrollView, TouchableOpacity,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ManageTrip = () => {
    const Navigation = useNavigation();
    const handleTripDetails=()=>{
        Navigation.navigate('TripDetails')
    }
    const handleAddTrip = ()=>{
        Navigation.navigate('CreateTrip')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
             <View className="flex justify-center items-center my-5">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">All Trip Lists</Text>
                    </View>
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center "><Button onPress={handleAddTrip} title='Create Trip' color="#fd453f" /></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleTripDetails}>
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Trip Name : LKO TO UK</Text>
                                    <Text className="text-xl font-bold font-sans">Created Date : 01/04/2024</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 px-3 py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center my-2">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className=" border-2 bg-yellow-500 w-24 px-3 py-3  relative border-orange-500">
                                    <Text className="text-xs font-bold text-white text-center my-2">Running</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className=" border-2 bg-yellow-500 w-24 px-3 py-3  relative border-orange-500">
                                    <Text className="text-xs font-bold text-white text-center my-2">Running</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 px-3 py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center my-2">Completed</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className=" border-2 bg-yellow-500 w-24 px-3 py-3  relative border-orange-500">
                                    <Text className="text-xs font-bold text-white text-center my-2">Running</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTripDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className=" border-2 bg-green-500 w-24 px-3 py-3  relative border-green-700">
                                    <Text className="text-xs font-bold text-white text-center my-2">Completed</Text>
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