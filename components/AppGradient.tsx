import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

interface AppGradientProps{
    children : any,
    colors : string[],
}

const AppGradient = (
        {
            children,
            colors,
        } : AppGradientProps
    ) => {
  return (
    
    <LinearGradient colors={colors} style={styles.linearGrad}>
        <SafeAreaView style={styles.linearGrad}>
            {children}
        </SafeAreaView>
    </LinearGradient>
  )
}

export default AppGradient

const styles = StyleSheet.create({
    linearGrad:{
        flex : 1, 
        height : "100%",
        width : "100%",
    }
})