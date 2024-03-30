import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ManageTrip = () => {
    const Navigation = useNavigation()
    const handleCreateTrip=()=>{
        Navigation.navigate('CreateTrip')
    }

    return (
        <View className="w-full bg-cyan-400 h-screen flex-1 justify-center items-center ">
            <View className="w-full bg-cyan-400 text-center items-center">
                <Text className=" font-bold text-6xl my-24 text-white text-center ">
                ManageTrip
                </Text>
                <View className="w-20 ">
                <Button onPress={handleCreateTrip} title='Add Trip' color="#fd453f"/>
                </View> 
            </View>
        </View>
    );
}

export default ManageTrip;