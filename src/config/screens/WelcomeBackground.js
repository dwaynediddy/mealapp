import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import colors from '../colors'

function WelcomeBackground() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('./background.jpeg')}>
            <Text style={styles.text}>Welcome</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    text: {
        color: colors.black,
        fontSize: 24,
        justifyContent: 'center',
        paddingBottom: 300
    }
})

export default WelcomeBackground
