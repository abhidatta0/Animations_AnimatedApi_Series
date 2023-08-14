import {Animated, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useRef} from 'react';

const MovingCard = ()=>{
    const cardMoveAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const onStart = ()=>{
        Animated.sequence([
            Animated.spring(cardMoveAnim,{
                toValue: {x: 250, y: 200},
                useNativeDriver: true,
                mass: 6,
            }),
            Animated.spring(cardMoveAnim,{
                toValue: {x: 0, y: 300},
                useNativeDriver: true,
                tension: 10,
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
    </View>
   )
}

export default MovingCard;

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
    }
})