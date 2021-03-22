import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Bird from './components/Bird'
import Obstacles from "./components/Obstacles";

export default function App() {
    const screen_width = Dimensions.get("screen").width
    const screen_height = Dimensions.get('screen').height
    const birdLeft = screen_width / 2
    const [birdBottom, setBirdBottom] = useState(screen_height / 2)
    const [obstaclesLeftOne, setObstaclesLeftOne] = useState(screen_width)
    const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screen_width+ screen_width/2)
    let gameTimerId
    let obstaclesLeftTimerIdOne
    let obstaclesLeftTimerIdTwo
    const gap = 200
    const obstaclesWidth = 60
    const obstaclesHeight = (screen_height-gap)/2

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
        if(obstaclesLeftOne > -obstaclesWidth) {
            obstaclesLeftTimerIdOne = setInterval(() => {
                setObstaclesLeftOne(obstaclesLeft => obstaclesLeft - 5)
            }, 30)
            return () => {
                clearInterval(obstaclesLeftTimerIdOne)
            }
        }
        else {
            setObstaclesLeftOne(screen_width)
        }
    }, [obstaclesLeftOne])

    // start second obstacles
    useEffect(() => {
        if(obstaclesLeftTwo > -obstaclesWidth) {
            obstaclesLeftTimerIdTwo = setInterval(() => {
                setObstaclesLeftTwo(obstaclesLeft => obstaclesLeft - 5)
            }, 30)
            return () => {
                clearInterval(obstaclesLeftTimerIdTwo)
            }
        }
        else {
            setObstaclesLeftTwo(screen_width)
        }
    }, [obstaclesLeftTwo])

    return (
        <View style={styles.container}>
            <Bird
                birdBottom = {birdBottom}
                birdLeft = {birdLeft}
            />
            <Obstacles
                obstaclesLeft={obstaclesLeftOne}
                obstaclesHeight={obstaclesHeight}
                obstaclesWidth={obstaclesWidth}
                gap={gap}
                color={'green'}
            />
            <Obstacles
                obstaclesLeft={obstaclesLeftTwo}
                obstaclesHeight={obstaclesHeight}
                obstaclesWidth={obstaclesWidth}
                gap={gap}
                color={'red'}
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
