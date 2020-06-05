import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';


const AuthScreen = () => {
    const [user, setUser] = useState(null);

    const initAsync = async () => {
        await GoogleSignIn.initAsync();

        _syncUserWithStateAsync();
    };

    const _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        setUser(user);
    };

    const signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        setUser(null);
    };

    const signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                this._syncUserWithStateAsync();
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
        // return () => {
        //     cleanup
        // }
    }, []);

    return (
        <View>
            <Text onPress={() => _onPress()}>Toggle Auth</Text>
        </View>
    )
}

export default AuthScreen
