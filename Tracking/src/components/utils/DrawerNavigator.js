
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Home';
import TripDetails from '../home/TripDetails';
import Profile from '../home/Profile';
import CreateJob from '../home/CreateJob';
import JobsDetails from '../home/JobsDetails';
import LiveTracking from '../home/LiveTracking';
import LockDetails from '../home/LockDetails';
import ManageTrip from '../home/ManageTrip';
import DrawerContent from './DrawerContent'
import { useState } from 'react';
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
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Profile" component={Profile}/>
      <Drawer.Screen name="CreateJob" component={CreateJob}/>
      <Drawer.Screen name="JobsDetails" component={JobsDetails}/>
      <Drawer.Screen name="ViewJobs" component={ViewJobs}/>
      <Drawer.Screen name="LiveTracking" component={LiveTracking}/>
      <Drawer.Screen name="LockDetails" component={LockDetails}/>
      <Drawer.Screen name="ManageTrip" component={ManageTrip}/>
      <Drawer.Screen name="TripDetails" component={TripDetails}/>
      <Drawer.Screen name="CreateTrip" component={CreateTrip}/>
      <Drawer.Screen name="Zeofence" component={Zeofence}/>
      <Drawer.Screen name="ZeofenceDetails" component={ZeofenceDetails}/>
      <Drawer.Screen name="ViewGeofence" component={ViewGeofence}/>
      <Drawer.Screen name="GeofencePolygonMap" component={GeofencePolygonMap}/>
      <Drawer.Screen name="Alerts" component={Alert}/>
      <Drawer.Screen name="AlertDetails" component={AlertDetails}/>
      <Drawer.Screen name="polygonMap" component={PolygonMap}/>
    </Drawer.Navigator>
  );
}
export default DrawerNavigator