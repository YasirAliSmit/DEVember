import { StyleSheet, Text, View } from 'react-native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import React from 'react'

const Days = ({item}) => {
  return (
    <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
  )
}

export default Days

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#F9EDE3",
        alignItems: "center",
        justifyContent: "center",
         borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#9b4521",
        borderRadius: 20,
        flex:1,
        aspectRatio:1,
      },
      text: {
        color: "#9b4521",
        fontSize: 70,
        fontFamily:'Inter_900Black'
      },
})