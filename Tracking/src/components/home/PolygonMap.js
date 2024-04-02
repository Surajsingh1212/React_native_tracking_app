import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';

const MapWithPolygon = () => {
  const [polygonCoords, setPolygonCoords] = useState([]);

  const handlePress = (event) => {
    const { coordinate } = event.nativeEvent;
    setPolygonCoords([...polygonCoords, coordinate]);
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
        {/* Render the polygon */}
        <Polygon
          coordinates={polygonCoords}
          fillColor="rgba(0, 200, 0, 0.5)" // Fill color of the polygon
          strokeWidth={2} // Width of the border
          strokeColor="rgba(0,0,0,0.5)" // Border color
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          title="Clear Polygon"
          onPress={() => setPolygonCoords([])}
        />
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
});

export default MapWithPolygon;
