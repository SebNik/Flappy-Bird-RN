import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Bird from './components/Bird'

export default function App() {
    const screen_width = Dimensions.get("screen").width
    const screen_height = Dimensions.get('screen').height
    const birdLeft = screen_width / 2

    console.log(screen_height)
    console.log(screen_width)

    return (
        <View style={styles.container}>
            <Bird></Bird>
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
})
