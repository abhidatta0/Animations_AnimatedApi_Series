import {Animated, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRef} from 'react';

const CardColorInterpolate = ()=>{
    const boxPos = useRef(new Animated.Value(0)).current;

    const onStart = ()=> {
       Animated.timing(boxPos, {
        toValue: 300,
        useNativeDriver: true,
        duration: 5000,
       }).start();
    }

    const onReset = ()=> {
        Animated.timing(boxPos, {
            toValue: 0,
            useNativeDriver: true,
           }).start();
    }
   return (
    <View style={styles.container}>
        <Animated.View style={[styles.box, {
            transform:[
                {translateX: boxPos},
                {scale: boxPos.interpolate({
                    inputRange: [0, 150],
                    outputRange: [1,3],
                    extrapolate:'identity',
                })}
            ],
            backgroundColor: 'green',
            // opacity:boxPos.interpolate({
            //     inputRange:[0, 150, 300],
            //     outputRange: [1,0.5, 1]
            // }),
            // width:boxPos.interpolate({
            //     inputRange:[0, 150, 300],
            //     outputRange: [0, 150, 300]
            // }),
        }]} />
        <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn} onPress={onStart}>
            <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onReset}>
            <Text>Reset</Text>
        </TouchableOpacity>
        </View>
    </View>
   )
}

export default CardColorInterpolate;

const styles = StyleSheet.create({
    container:{
     flex: 1,
     borderWidth: 1,
     justifyContent:'center',
    },
    box:{
        width: 100,
        height: 50,
        backgroundColor:'green'
    },
    btnGroup:{
      flexDirection:'row',
      justifyContent:'center',
      gap: 10,
    },
    btn:{
        backgroundColor:'lightblue',
        alignSelf:'center',
        padding: 10,
    }
})