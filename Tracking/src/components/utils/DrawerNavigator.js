
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import Home from '../home/Home';
import TripDetails from '../home/TripDetails';
import Profile from '../home/Profile';
import CreateJob from '../home/CreateJob';
import JobsDetails from '../home/JobsDetails';
import LiveTracking from '../home/LiveTracking';
import LockDetails from '../home/LockDetails';
import ManageTrip from '../home/ManageTrip';
import DrawerContent from './DrawerContent'
import CreateTrip from '../home/CreateTrip';
import Zeofence from '../home/Zeofence';
import ZeofenceDetails from '../home/ZeofenceDetails';
import ViewJobs from '../home/ViewJobs';
import ViewGeofence from '../home/ViewGeofence';
import GeofencePolygonMap from '../home/GeofencePolygonMap';
import Alert from '../home/Alert'
import AlertDetails from '../home/AlertDetails';
import PolygonMap from '../home/PolygonMap';
  
const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
  const [activeScreen,setActiveScreen] =useState('Home')
  return (
    <Drawer.Navigator drawerContent={(props)=><DrawerContent  {...props} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Drawer.Screen name="CreateJob" component={CreateJob} options={{headerShown:false}}/>
      <Drawer.Screen name="JobsDetails" component={JobsDetails} options={{headerShown:false}}/>
      <Drawer.Screen name="ViewJobs" component={ViewJobs} options={{headerShown:false}}/>
      <Drawer.Screen name="LiveTracking" component={LiveTracking} options={{headerShown:false}}/>
      <Drawer.Screen name="LockDetails" component={LockDetails} options={{headerShown:false}}/>
      <Drawer.Screen name="ManageTrip" component={ManageTrip} options={{headerShown:false}}/>
      <Drawer.Screen name="TripDetails" component={TripDetails} options={{headerShown:false}}/>
      <Drawer.Screen name="CreateTrip" component={CreateTrip} options={{headerShown:false}}/>
      <Drawer.Screen name="Zeofence" component={Zeofence} options={{headerShown:false}}/>
      <Drawer.Screen name="ZeofenceDetails" component={ZeofenceDetails} options={{headerShown:false}}/>
      <Drawer.Screen name="ViewGeofence" component={ViewGeofence} options={{headerShown:false}}/>
      <Drawer.Screen name="GeofencePolygonMap" component={GeofencePolygonMap} options={{headerShown:false}}/>
      <Drawer.Screen name="Alerts" component={Alert} options={{headerShown:false}}/>
      <Drawer.Screen name="AlertDetails" component={AlertDetails} options={{headerShown:false}}/>
      <Drawer.Screen name="polygonMap" component={PolygonMap} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigator