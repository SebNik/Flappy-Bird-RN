import React from 'react';
import {View} from 'react-native';

const Obstacles = ({color, obstaclesLeft, obstaclesWidth, obstaclesHeight, gap, randomBottom}) => {

    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}>

            </View>


            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: obstaclesHeight + gap + randomBottom,
            }}>

            </View>
        </>
    )
}

export default Obstacles
