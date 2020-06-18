import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

//expo-ads-admob
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';


const AdScreen = () => {
    // useEffect(() => {
    //     const _init = async () => {
    //         await setTestDeviceIDAsync('EMULATOR');
    //     }
    //     _init();
    // }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text>admob</Text>
            </View>
            <AdMobBanner
                bannerSize="mediumRectangle"
                adUnitID="ca-app-pub-3248621936757805/1321171677"
                onDidFailToReceiveAdWithError={err => console.log(err)} />
            <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3248621936757805/1321171677"
                onDidFailToReceiveAdWithError={err => console.log(err)}
            />
        </View>
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

export default AdScreen

