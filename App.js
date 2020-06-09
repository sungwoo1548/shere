import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

// firebase
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDlJCsyG7njJfO1ahFE-6YIaVUVriMzI60",
  authDomain: "shere-kor.firebaseapp.com",
  databaseURL: "https://shere-kor.firebaseio.com",
  projectId: "shere-kor",
  storageBucket: "shere-kor.appspot.com",
  messagingSenderId: "343473017119",
  appId: "1:343473017119:web:adcddbfc4950b94e0d202a",
  measurementId: "G-TRSDW30MTR"
};

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
