import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../utils/CustomHeader';


const ViewJobs = ({navigation}) => {
    const Navigation = useNavigation();
    const handleViewJobsDetails=()=>{
        Navigation.navigate('JobsDetails')
    }
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="ViewJobs" navigation={navigation} notificationCount={4}/>
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold text-3xl text-white text-center ">View Latest Jobs</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleViewJobsDetails}>
                    <View className="flex justify-center items-center" >
                        <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl">
                            <View className="flex flex-row align-middle justify-between">
                                <View>
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
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
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
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
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
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
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
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
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
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
                                    <Text className="font-sans text-black text-2xl  font-bold">Job Name : 345DNSDS</Text>
                                    <Text className="text-xl font-bold font-sans">Job Type : HESDLSK</Text>
                                </View>
                                <View className="h-16 border-2 border-cyan-500 w-16 rounded-full p-3 relative">
                                    <Text className="text-xl font-bold  text-center pt-2">45 <Text className="text-xs">Km/h</Text></Text>
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