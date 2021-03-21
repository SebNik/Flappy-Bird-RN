import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Bird from './components/Bird'

export default function App() {
    const screen_width = Dimensions.get("screen").width
    const screen_height = Dimensions.get('screen').height
    const birdLeft = screen_width / 2
    const [birdBottom, setBirdBottom] = useState(screen_height / 2)
    const [obstaclesLeft, setObstaclesLeft] = useState(screen_width)
    let gameTimerId
    let obstaclesLeftTimerId
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
    console.log(birdBottom)

    // start first obstacles
    useEffect(() => {
        if(obstaclesLeft > 0) {
            obstaclesLeftTimerId = setInterval(() => {
                setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
            }, 30)
        }
        return (
            clearInterval(obstaclesLeftTimerId)
        )
    }, [obstaclesLeft])

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