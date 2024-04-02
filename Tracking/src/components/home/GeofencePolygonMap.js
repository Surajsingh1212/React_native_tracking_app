import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../utils/CustomHeader';



const GeofencePolygonMap = ({ navigation }) => {
    const Navigation = useNavigation()
    const handleCreateGeofence = () => {
        Navigation.navigate('Zeofence')
    }
    return (
        <View className="flex-1">
            <CustomHeader title="GeofencePolygonMap" navigation={navigation} notificationCount={4} />
            <View className="flex flex-1 justify-center items-center bg-cyan-500">
                <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[70%] overflow-hidden">
                    <MapView
                        className="absolute top-0 left-0 right-0 bottom-0"
                        initialRegion={{
                            latitude: 26.850000,
                            longitude: 80.949997,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View className="bg-slate-50 shadow-xl w-[90%] rounded-3xl h-[15%] mt-5 ">
                    <ScrollView>
                        <View className=" flex flex-col align-middle justify-between px-3 pt-3">
                            <Text className="w-100 mb-1 text-md font-bold text-black">Latitude : </Text>
                            <Text className=" w-100">
                                23423.34,43.435,344353,3453.34,535.345,3.345,345.343</Text>
                        </View>
                        <View className=" flex flex-col align-middle justify-between p-3">
                            <Text className="w-100 mb-1 text-md font-bold text-black">Longitude : </Text>
                            <Text className=" w-100">
                                23423.34,43.435,344353,3453.34,535.345,3.345,345.343</Text>
                        </View>
                        <View className="w-full px-3 py-3 flex justify-end">
                            <View className="w-[20%] ">
                                <Button title='Done' onPress={handleCreateGeofence} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default GeofencePolygonMap;