import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Bird from './components/Bird'
import Obstacles from "./components/Obstacles";

export default function App() {
    const screen_width = Dimensions.get("screen").width
    const screen_height = Dimensions.get('screen').height
    const birdLeft = screen_width / 2
    const [birdBottom, setBirdBottom] = useState(screen_height / 2)
    const [obstaclesLeftOne, setObstaclesLeftOne] = useState(screen_width)
    const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screen_width + screen_width / 2 + 20)
    const [obstaclesNegHeightOne, setObstaclesNegHeightOne] = useState(0)
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
    let isgameOver
    let gameTimerId
    let obstaclesLeftTimerIdOne
    let obstaclesLeftTimerIdTwo
    const gap = 200
    const obstaclesWidth = 50
    const obstaclesHeight = 300
    const [isGameOver, setIsGameOver] = useState(false)

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

    const jump = () => {
        if (!isGameOver && (birdBottom < screen_height)){
            setBirdBottom(birdBottom => birdBottom + 50)
            console.log('jump')
        }
    }

    // start first obstacles
    useEffect(() => {
        if (obstaclesLeftOne > -obstaclesWidth) {
            obstaclesLeftTimerIdOne = setInterval(() => {
                setObstaclesLeftOne(obstaclesLeft => obstaclesLeft - 1)
            }, 6)
            return () => {
                clearInterval(obstaclesLeftTimerIdOne)
            }
        } else {
            setObstaclesLeftOne(screen_width)
            setObstaclesNegHeightOne(-Math.random() * 50)
        }
    }, [obstaclesLeftOne])

    // start second obstacles
    useEffect(() => {
        if (obstaclesLeftTwo > -obstaclesWidth) {
            obstaclesLeftTimerIdTwo = setInterval(() => {
                setObstaclesLeftTwo(obstaclesLeft => obstaclesLeft - 1)
            }, 6)
            return () => {
                clearInterval(obstaclesLeftTimerIdTwo)
            }
        } else {
            setObstaclesLeftTwo(screen_width)
            setObstaclesNegHeightTwo(-Math.random() * 50)
        }
    }, [obstaclesLeftTwo])

    // check for collisions
    useEffect(() => {
        if (
            ((birdBottom < (obstaclesNegHeightOne + obstaclesHeight + 45/2) ||
                birdBottom > (obstaclesNegHeightOne+obstaclesHeight+gap-45/2)) &&
            (obstaclesLeftOne > screen_width/2 - 45/2 && obstaclesLeftOne < screen_width/2 + 45/2))
            ||
            ((birdBottom < (obstaclesNegHeightTwo + obstaclesHeight + 45/2) ||
                birdBottom > (obstaclesNegHeightTwo+obstaclesHeight+gap - 45/2)) &&
                (obstaclesLeftTwo > screen_width/2 - 45/2 && obstaclesLeftTwo < screen_width/2 + 45/2))) {
            console.log('game over')
            gameOver()
        }
    })


    const  gameOver = () => {
        clearInterval(gameTimerId)
        clearInterval(obstaclesLeftTimerIdOne)
        clearInterval(obstaclesLeftTimerIdTwo)
        setIsGameOver(true)
    }

    return (
        <TouchableWithoutFeedback onPress={jump}>
            <View style={styles.container}>
                <Bird
                    birdBottom={birdBottom}
                    birdLeft={birdLeft}
                />
                <Obstacles
                    obstaclesLeft={obstaclesLeftOne}
                    obstaclesHeight={obstaclesHeight}
                    obstaclesWidth={obstaclesWidth}
                    randomBottom={obstaclesNegHeightOne}
                    gap={gap}
                    color={'green'}
                />
                <Obstacles
                    obstaclesLeft={obstaclesLeftTwo}
                    obstaclesHeight={obstaclesHeight}
                    obstaclesWidth={obstaclesWidth}
                    randomBottom={obstaclesNegHeightTwo}
                    gap={gap}
                    color={'red'}
                />
            </View>
        </TouchableWithoutFeedback>
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
