import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

interface CustomButtonProps{
  OnPress : ()=>void,
  title : string,
  textStyle? : string
  contaierStyle?: string
 }

const CustomButton = ({
  OnPress,
  title,
  textStyle = "",
  contaierStyle =""
}:CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={OnPress}
      style = {styles.button}
      activeOpacity={0.7}
    >
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button : {
    backgroundColor : "#ffffff",
    height : 60,
    width : "90%",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 50
  }
})

export default CustomButton