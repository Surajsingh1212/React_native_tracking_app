import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component'
import CustomHeader from '../utils/CustomHeader';


const JobsDetails = ({navigation}) => {
    const tableData = [
        ["Company Name", "345DNSDS"],
        ["Branch Id", "43FDG5"],
        ["Trip Start Date", "12/03/24"],
        ["Trip End Date", "23/03/24"],
        ["Trip Vehicle Number", "455FG4"],
        ["Material Id", "4500"],
        ["Material Qty", "4533"],
        ["Vehicle Type Id", "23"],
        ["Transit Type Id", "233D3"],
        ["Source Hub Id", "43D44"],
        ["Via Hub Id", "23422WE"],
        ["Destination Hub Id", "REW32SS"],
        ["Device Id", "234234"],
        ["Driver Name", "JACK"],
        ["Alert Number", "00000000"],
        ["Alert Email", "ALERT@GMAIL.COM"],
        ["Over Speed", "43KM/H"],
        ["Our Stopped", "5"],
        ["Permit Number", "45454"],
        ["Permit Start Date", "12/03/2024"],
        ["Consignee Name", "TEST"],
        ["Consignee Person Name", "TEST JACK"],
        ["Consignee Person Mobile", "0000000"],
    ];
    return (
        <View className="w-full bg-cyan-400 h-screen">
            <CustomHeader title="JobsDetails" navigation={navigation} notificationCount={4}/>
            <View className="flex justify-center items-center mt-3">
                <View className="flex flex-row align-middle justify-between w-[90%] pb-2">
                    <View className="">
                        <Text className=" font-bold sm:text-3xl md:text-3xl text-2xl text-white text-center ">Jobs Details </Text>
                    </View>
                </View>
            </View>
                <View className=" items-center ">
                    <View className="w-[90%] bg-slate-100 shadow-lg p-5 rounded-xl h-[90%]">
                        <ScrollView> 
                        <View className="">
                            {tableData.map((row, rowIndex) => (
                                <View key={rowIndex} className="flex flex-row justify-between py-2 border-b border-gray-300">
                                    <Text className="text-black text-lg font-bold">{row[0]}</Text>
                                    <Text className="text-gray-700 text-lg">{row[1]}</Text>
                                </View>
                            ))}
                        </View>
                        </ScrollView>
                    </View>
                    
                </View>
        </View>
    );
}

export default JobsDetails;