import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import bird_image from '../assets/bird.jpg';

const Obstacles = ({color, obstaclesLeft, obstaclesWidth, obstaclesHeight, gap}) => {

    return(
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: 0,
            }}>

            </View>


            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: 0 + obstaclesHeight+ gap,
            }}>

            </View>
        </>
    )
}

export default Obstacles
