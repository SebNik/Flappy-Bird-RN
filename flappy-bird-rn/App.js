import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Bird from './components/Bird'

export default function App() {
    const screen_width = Dimensions.get("screen").width
    const screen_height = Dimensions.get('screen').height
    const birdLeft = screen_width / 2
    const [birdBottom, setBirdBottom] = useState(screen_height / 2)
    let gameTimerId
    // console.log(screen_height)
    // console.log(screen_width)

    // start Bird falling
    useEffect(() => {
        if (birdBottom > 0) {
            gameTimerId = setInterval(() => {
                setBirdBottom(birdBottom => birdBottom - 3)
            }, 30)
            return () => {
                clearInterval(gameTimerId)
            }
        }
    }, [birdBottom])

    return (
        <View style={styles.container}>
            <Bird
                birdBottom = {birdBottom}
                birdLeft = {birdLeft}
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
})
