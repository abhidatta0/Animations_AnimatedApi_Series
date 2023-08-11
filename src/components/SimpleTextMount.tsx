import {View, Text, StyleSheet,Animated, Button, Easing} from 'react-native';
import {useRef, useEffect} from 'react';

const SimpleTextMount = ()=> {
    const opacity= useRef(new Animated.Value(0)).current;

    useEffect(()=>{
      Animated.timing(opacity,{
        toValue: 1,
        useNativeDriver: true,
        duration: 5000,
        easing: Easing.out(Easing.ease),
      }).start(({finished})=>{
         console.log({finished});
      });
    },[]);

    const stopAnimation= ()=>{
        opacity.stopAnimation((value)=>{
            console.log({value});
        })
    }

    const resetAnimation = ()=>{
        opacity.resetAnimation((value)=>{
          console.log({value});
          setTimeout(()=>{
            Animated.timing(opacity,{
                toValue: 1,
                useNativeDriver: true,
                duration: 5000,
              }).start();
          })
        })
    }

   return (
    <>
    <Animated.View style={[styles.container,{opacity: opacity}]}>
        <Text>Fading in</Text>
    </Animated.View>
    <Button title="Stop animation" onPress={stopAnimation}/>
    <Button title="Reset animation" onPress={resetAnimation}/>
    </>
   )
}

export default SimpleTextMount;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightblue',
        padding: 10,
        alignItems:'center'
    }
})