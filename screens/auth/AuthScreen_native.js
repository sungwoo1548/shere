import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as GoogleSignIn from 'expo-google-sign-in';

import firebase from "firebase";
import 'firebase/auth';


const AuthScreen = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const initAsync = async () => {
        await GoogleSignIn.getPlayServiceAvailability();
        await GoogleSignIn.initAsync();
        _syncUserWithStateAsync();
    };

    const _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();

        try {
            await firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken);
            const googleProfileData = await firebase.auth().signInWithCredential(credential);
            setProfile(googleProfileData);
            setUser(user);

        } catch ({ err }) {
            alert(`error : ${err}`)
        }
    };

    const signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        const googleProfileData = await firebase.auth().signOut();
        setProfile(googleProfileData);
        setUser(null);
    };

    const signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync({
                //clientId: '<YOUR_IOS_CLIENT_ID>',
            });
            if (type === 'success') {
                _syncUserWithStateAsync();

            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    };

    const _onPress = () => {
        if (user) {
            signOutAsync();
        } else {
            signInAsync();
        }
    };

    useEffect(() => {

        initAsync()
        return () => {
            signOutAsync()
        }
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text onPress={() => _onPress()}>Toggle Auth</Text>
                {
                    user && <View>
                        <Text>{`uid : ${user.uid}`}</Text>
                        <Text>{`email : ${user.email}`}</Text>
                        <Text>{`displayName : ${user.displayName}`}</Text>
                        <Text>{`photoURL : ${user.photoURL}`}</Text>
                        <Text>{`firstName : ${user.firstName}`}</Text>
                        <Text>{`lastName : ${user.lastName}`}</Text>
                        <Text>{`auth.idToken : ${user.auth.idToken}`}</Text>
                        <Text>{JSON.stringify(user)}</Text>
                    </View>
                }
                <View>
                    <Text>{'프로파일 : '}{JSON.stringify(profile)}</Text>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthScreen
