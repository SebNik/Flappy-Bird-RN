import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import bird_image from '../assets/bird.jpg';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 45
    const birdHeight = 33

    return (
        <View style={{
            position: 'absolute',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
        }}>
            <Image source={bird_image} style={{ width: birdWidth, height: birdHeight }} />
        </View>
    )
}

export default Bird
