import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { MAP_TYPES, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 26.850000;
const LONGITUDE = 80.949997;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const PolygonMap = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });
  const [polygons, setPolygons] = useState([]);
  const [editing, setEditing] = useState(null);
  const [creatingHole, setCreatingHole] = useState(false);
  const [selectedPolygonCoords, setSelectedPolygonCoords] = useState([]);
  const [mapType, setMapType] = useState(MAP_TYPES.STANDARD);
  const [showLabels, setShowLabels] = useState(false); // State for enabling/disabling labels
  const mapRef = useRef(null);

  let id = 0;

  const finish = () => {
    setPolygons([...polygons, editing]);
    setEditing(null);
    setCreatingHole(false);
  };

  const clear = () => {
    setPolygons([]);
    setEditing(null);
    setCreatingHole(false);
  };

  const createHole = () => {
    if (!creatingHole) {
      setCreatingHole(true);
      setEditing({
        ...editing,
        holes: [...editing.holes, []]
      });
    } else {
      const holes = [...editing.holes];
      if (holes[holes.length - 1].length === 0) {
        holes.pop();
        setEditing({
          ...editing,
          holes
        });
      }
      setCreatingHole(false);
    }
  };

  const onPress = (e) => {
    if (!editing) {
      setEditing({
        id: id++,
        coordinates: [e.nativeEvent.coordinate],
        holes: []
      });
    } else if (!creatingHole) {
      setEditing({
        ...editing,
        coordinates: [...editing.coordinates, e.nativeEvent.coordinate]
      });
    } else {
      const holes = [...editing.holes];
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate
      ];
      setEditing({
        ...editing,
        id: id++,
        coordinates: [...editing.coordinates],
        holes
      });
    }
  };

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  const onPolygonPress = (event, polygonId) => {
    const selectedPolygon = polygons.find(polygon => polygon.id === polygonId);
    setSelectedPolygonCoords(selectedPolygon.coordinates);
  };

  const toggleMapType = () => {
    setMapType(mapType === MAP_TYPES.STANDARD ? MAP_TYPES.SATELLITE : MAP_TYPES.STANDARD);
  };

  const toggleShowLabels = () => {
    setShowLabels(!showLabels);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapType={mapType}
        initialRegion={region}
        onPress={(e) => onPress(e)}
        scrollEnabled={!editing}
        onPanDrag={editing ? (e) => onPress(e) : null}
        onRegionChangeComplete={onRegionChange}
        showsLabels={showLabels} // Conditionally show labels based on state
      >
        {polygons.map(polygon => (
          <Polygon
            key={polygon.id}
            coordinates={polygon.coordinates}
            holes={polygon.holes}
            strokeColor="#F00"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
            onPress={(event) => onPolygonPress(event, polygon.id)}
          />
        ))}
        {editing && (
          <Polygon
            key={editing.id}
            coordinates={editing.coordinates}
            holes={editing.holes}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          />
        )}
      </MapView>

      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
          if (details.geometry) {
            mapRef.current.animateToRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02 * ASPECT_RATIO,
            });
          }
        }}
        query={{
          key: 'AIzaSyDWLIXCJhaq_T9vN1xLLxOJoXTENeDynXk',
          language: 'en',
        }}
        fetchDetails={true}
        styles={{
          container: {
            position: 'absolute',
            top: 10,
            width: '100%',
          },
          textInputContainer: {
            width: '100%',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />

      <View style={styles.buttonContainer}>
        {editing && (
          <TouchableOpacity
            onPress={() => createHole()}
            style={[styles.bubble, styles.button]}
          >
            <Text>
              {creatingHole ? 'Finish Hole' : 'Create Hole'}
            </Text>
          </TouchableOpacity>
        )}
        {editing && (
          <TouchableOpacity
            onPress={() => finish()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={() => clear()}
        style={[styles.bubble, styles.button]}
      >
        <Text>Clear</Text>
      </TouchableOpacity>

      {/* Toggle Map Type Button */}
      <TouchableOpacity
        style={[styles.bubble, styles.button, styles.mapTypeButton]}
        onPress={toggleMapType}
      >
        <Text>{mapType === MAP_TYPES.STANDARD ? 'Satellite' : 'Normal'}</Text>
      </TouchableOpacity>

      {/* Toggle Labels Button */}
      <TouchableOpacity
        style={[styles.bubble, styles.button, styles.mapTypeButton]}
        onPress={toggleShowLabels}
      >
        <Text>{showLabels ? 'Hide Labels' : 'Show Labels'}</Text>
      </TouchableOpacity>

      {/* Display selected polygon coordinates */}
      {selectedPolygonCoords.length > 0 && (
        <View style={styles.selectedPolygonContainer}>
          <Text style={styles.selectedPolygonText}>Selected Polygon Coordinates:</Text>
          {selectedPolygonCoords.map((coord, index) => (
            <Text key={index} style={styles.selectedPolygonText}>
              {`Latitude: ${coord.latitude}, Longitude: ${coord.longitude}`}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  },
  mapTypeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  selectedPolygonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    borderRadius: 10
  },
  selectedPolygonText: {
    marginBottom: 5
  }
});

export default PolygonMap;
