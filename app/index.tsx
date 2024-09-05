import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import beachImage from '../assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import AppGradient from '@/components/AppGradient';
import { useRouter } from 'expo-router';

const HomeScreen = () => {

  const router = useRouter()
  
  

  return (
    <View style={styles.container}>
        
      <ImageBackground 
      source={beachImage} 
      style={styles.img_background}
      >
        
        <StatusBar style={'light'}></StatusBar>

        <AppGradient colors={["rgba(0,0,0,0.8)" , "rgba(0,0,0,0.4)"]}>
          
               
                  <Text style={styles.text}>Simply Meditation</Text>
                  <View style ={styles.buttonStyles}>
                    <CustomButton
                    OnPress = {()=>router.push("/tabs/nature-meditate")}
                    title={'GetStarted'}>
                    </CustomButton>
                  </View>
               
          
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 35,
    textAlign: "center",
    marginTop : 100
  },
  img_background: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  button : {
    height : 100,
    width : 100,
    color : "000000"
  },
  buttonStyles : {
    flex : 1,
    justifyContent : "flex-end",
    alignItems : "center",
    marginBottom : "15%"
  }
});

export default HomeScreen;
