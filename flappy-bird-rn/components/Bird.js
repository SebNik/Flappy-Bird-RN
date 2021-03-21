import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import bird_image from '../assets/bird.jpg';

const Bird = () => {
    return (
        <View>
            <Image source={bird_image} style={{ width: 43, height: 33 }} />
        </View>
    )
}

export default Bird
