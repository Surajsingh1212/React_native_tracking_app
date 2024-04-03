import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../utils/CustomHeader';


const ViewJobs = ({ navigation }) => {
    const Navigation = useNavigation();
    const handleViewJobsDetails = () => {
        Navigation.navigate('JobsDetails')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="ViewJobs" navigation={navigation} notificationCount={4} />
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center ">View Latest Jobs</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleViewJobsDetails}>
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black text-lg sm:text-2xl md:text-2xl font-extrabold">Job Name : 345DNSDS</Text>
                                    <Text className="text-md font-bold sm:text-xl md:text-xl text-slate-500">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                    <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewJobsDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black text-lg sm:text-2xl md:text-2xl font-extrabold">Job Name : 345DNSDS</Text>
                                    <Text className="text-md font-bold sm:text-xl md:text-xl text-slate-500">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                    <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewJobsDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black text-lg sm:text-2xl md:text-2xl font-extrabold">Job Name : 345DNSDS</Text>
                                    <Text className="text-md font-bold sm:text-xl md:text-xl text-slate-500">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                    <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewJobsDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black text-lg sm:text-2xl md:text-2xl font-extrabold">Job Name : 345DNSDS</Text>
                                    <Text className="text-md font-bold sm:text-xl md:text-xl text-slate-500">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                    <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewJobsDetails} className="mt-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black text-lg sm:text-2xl md:text-2xl font-extrabold">Job Name : 345DNSDS</Text>
                                    <Text className="text-md font-bold sm:text-xl md:text-xl text-slate-500">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                    <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleViewJobsDetails} className="mt-5 mb-5">
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="text-black text-lg sm:text-2xl md:text-2xl font-extrabold">Job Name : 345DNSDS</Text>
                                    <Text className="text-md font-bold sm:text-xl md:text-xl text-slate-500">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2 text-slate-900">45 <Text className="text-xs text-slate-700">Km/h</Text></Text>
                                    <View className="absolute bg-green-500 h-4 w-4 rounded-full right-0"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default ViewJobs;