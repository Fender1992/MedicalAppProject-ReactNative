import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Button, StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [mapRegion, setMapRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      {mapRegion ? (
        <MapView
          style={styles.map}
          region={{
            latitude: mapRegion.latitude,
            longitude: mapRegion.longitude,
            latitudeDelta: mapRegion.latitudeDelta,
            longitudeDelta: mapRegion.longitudeDelta,
          }}
        >
          <Marker coordinate={mapRegion} title="My Location" />
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
      <Button title="Get Location" onPress={userLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
