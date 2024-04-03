import React from 'react';
import { View, Text, Image, ScrollView, Button,TextInput  } from 'react-native';
import Fields from '../common/Fields';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../utils/CustomHeader';


const CreateJob = ({navigation}) => {
    const Navigation = useNavigation()
    const handleCreateJob=()=>{
        Navigation.navigate('JobsDetails')
    }
    return (
      <View className="flex-1">
         <CustomHeader title="CreateJob" navigation={navigation} notificationCount={3}/>
        <View className="flex flex-1 justify-center items-center bg-cyan-500">
        <View className="relative flex justify-center items-center z-40">
          <Image
            source={require("../../assets/trip/trip1.png")}
            className="sm:h-28 md:h-28 sm:w-28 md:w-28 h-24 w-24 rounded-full absolute bottom-[-50] left-150  shadow-3xl"
          />
        </View>
        <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[80%] pb-8 pt-10 sm:pb-8 sm:pt-8 md:pb-8 md:pt-8">
          <ScrollView>
            <View className="px-10 w-full">
              <Text className="text-lg text-slate-700">Company Id*</Text>
              <View className=" w-full">
                <Fields placeholder="#2343df45" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Branch Id*</Text>
              <View>
                <Fields placeholder="demo@gmail.com" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Trip End Date*</Text>
              <View>
                <TextInput placeholder="Select Trip End Date" placeholderTextColor="rgb(148 163 184)" className="rounded-xl py-4 bg-white ps-5 placeholder:text-slate-20 text-slate-700 px-2 my-2  w-[100%] placeholder:text-lg placeholder:px-4"/>
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Vehicle Number*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Material Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Material Qty*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Vehicle Type Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Transit Type Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Source Hub Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Via Hub Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Destination Hub Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Device Id*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Driver Name*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Alert Mobile Number*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Alert Email*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Over Speed*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Over Stopped*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Permit Number*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Permit Start Date*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Permit EndDate*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Consignee Name*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Consignor Person Name*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <Text className="text-lg text-slate-700">Consignor Person Mobile*</Text>
              <View>
                <Fields placeholder="+9123232332" />
              </View>
            </View>
            <View className="px-10">
              <View className="rounded-xl mt-4 w-100">
                <Button title="Create Now" onPress={handleCreateJob}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      </View>
    );
}

export default CreateJob;