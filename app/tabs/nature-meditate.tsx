import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { MEDITATION_DATA } from '@/constants/meditation-data'
import meditationImages from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'

const NatureMeditate = () => {
  return (
    <View style={styles.container
}>
      
      <AppGradient colors={['#2C3E50','#4CA1AF']}>
         
         <Text style={styles.headText}>NatureMeditate</Text>
         <Text style={styles.subText}>Let's start the meditation journey</Text>

        <GestureHandlerRootView style={{flex:1}}>
            <FlatList
                data={MEDITATION_DATA}
                style={styles.listItems}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    
                    <Pressable
                        onPress={()=>console.log("press")}
                        style={styles.listContainer}
                    >


                    <ImageBackground
                        source={meditationImages[item.id-1]}
                        style={styles.listImages}
                        resizeMode='cover'
                    >
            
                    <LinearGradient 
                        colors={
                            [
                                'transparent',
                                'rgba(0,0,0,0.8)'
                            ]
                        }
                        style={{flex:1,justifyContent:"center",alignItems:'center'}}
                        >
                        <Text style={{fontSize:30,color:"#ffffff",textAlign:'center'}}>{item.title}</Text>
                    </LinearGradient>
                    
                    </ImageBackground>
                    </Pressable>
                )}
            />
        </GestureHandlerRootView>
          
      </AppGradient>
    </View>
  )
}

export default NatureMeditate

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%'
    },
    headText:{
        color:"#ffffff",
        fontSize:45,
        fontStyle: 'normal',
        marginTop:50
    },
    subText:{
        color: "#ffffff",
        fontSize:18,
        marginVertical:10
    },
    listItems:{
        marginBottom:20
    },
    listContainer:{
        height:300,
        marginVertical: 10
    
    },
    listImages:{
        flex : 1,
        justifyContent:"center",
    }
})