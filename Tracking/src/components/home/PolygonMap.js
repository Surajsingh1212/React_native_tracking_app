import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

const MapWithPolygon = () => {
  const [polygonCoords, setPolygonCoords] = useState([]);
  const [latestCoordinates, setLatestCoordinates] = useState({ latitude: 0, longitude: 0 });

  const handlePress = (event) => {
    const { coordinate } = event.nativeEvent;
    setPolygonCoords([...polygonCoords, coordinate]);
    setLatestCoordinates(coordinate);
  };

  const handleMarkerPress = (index) => {
    const markerCoordinate = polygonCoords[index];
    const { latitude, longitude } = markerCoordinate;
    console.log("Marker Latitude:", latitude);
    console.log("Marker Longitude:", longitude);
    setLatestCoordinates(markerCoordinate);
  };

  const handleMarkerDragEnd = (index, newCoordinate) => {
    const { latitude, longitude } = newCoordinate;
    console.log("Updated Latitude:", latitude);
    console.log("Updated Longitude:", longitude);
    const newPolygonCoords = [...polygonCoords];
    newPolygonCoords[index] = newCoordinate;
    setPolygonCoords(newPolygonCoords);
    setLatestCoordinates(newCoordinate);
  };

  const clearPolygon = () => {
    setPolygonCoords([]);
    setLatestCoordinates({ latitude: 0, longitude: 0 });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        onPress={handlePress}
      >
        {polygonCoords.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={coordinate}
            pinColor="blue"
            onPress={() => handleMarkerPress(index)}
            draggable
            onDragEnd={(e) => handleMarkerDragEnd(index, e.nativeEvent.coordinate)}
          />
        ))}
        {polygonCoords.length > 1 && (
          <Polygon
            coordinates={polygonCoords}
            fillColor="rgba(0, 200, 0, 0.5)" 
            strokeWidth={2}
            strokeColor="rgba(0,0,0,0.5)"
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          title="Clear Polygon"
          onPress={clearPolygon}
          disabled={polygonCoords.length === 0}
        />
      </View>
      <View style={styles.latlongContainer}>
        <View>
          <Text style={styles.latlongText}>Latitude: {latestCoordinates.latitude}</Text>
          <Text style={styles.latlongText}>Longitude: {latestCoordinates.longitude}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  latlongContainer: {
    position: 'absolute',
    backgroundColor:'white',
    padding:30,
    bottom: 20,
    right: 20,
  },
  latlongText: {
  color:'black',
  fontSize:13,

  },
});

export default MapWithPolygon;
