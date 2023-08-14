import {Animated, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useRef} from 'react';

const SequenceVsParallel = ()=>{
    const cardMoveAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const ballAnim = useRef(new Animated.Value(1)).current;

    const onStart = ()=>{
        Animated.parallel([
            Animated.spring(cardMoveAnim,{
                toValue: {x: 250, y: 200},
                useNativeDriver: true,
                tension: 10,
            }),
            Animated.spring(cardMoveAnim,{
                toValue: {x: 0, y: 300},
                useNativeDriver: true,
                tension: 10,
            }),
            Animated.timing(ballAnim, {
                toValue: 3,
                useNativeDriver: true,
            })
        ]).start();
    }
   return (
    <View>
        <TouchableOpacity style={styles.startBtn} onPress={onStart}>
            <Text>Start Animation</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.card, {
            transform:[
               ...cardMoveAnim.getTranslateTransform()
            ]
        }]}>
            <Text style={styles.cardText}>Card</Text>
        </Animated.View>
        <Animated.View style={[styles.ball, {
            transform:[
                {scale: ballAnim}
            ]
        }]}/>
    </View>
   )
}

export default SequenceVsParallel;

const styles = StyleSheet.create({
    startBtn:{
        backgroundColor:'lightblue',
        padding: 10,
    },
    card:{
        height: 120,
        width: 100,
        borderWidth: 1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    cardText:{
        fontSize: 20,
    },
    ball:{
        backgroundColor: 'blue',
        height:40,
        width: 40,
        borderRadius: 20,
        marginTop: 10,
    }
})