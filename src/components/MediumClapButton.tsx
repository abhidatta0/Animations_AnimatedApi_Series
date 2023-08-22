import { Pressable, Text, View, StyleSheet,Animated } from "react-native";
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, useRef} from 'react';

type Props = {
    startCount?: number;
    maxCountPerUser: number;
}
const MediumClapButton = ({startCount, maxCountPerUser}:Props)=>{
    const [timesPressed, setTimesPressed] = useState(startCount ?? 0);
    const [scale,setScale] = useState(1);
    const clapAnim = useRef(new Animated.Value(0)).current;
    const intervalRef = useRef<NodeJS.Timer>();

    const onStartAnimation = ()=>{
        Animated.timing(clapAnim, {
            toValue: 90,
            duration: 300,
            useNativeDriver: true
        }).start(({finished})=>{
            if(finished){
                setTimeout(()=>{
                    onResetAnimation();
                  }, 1000);
            }
            else{
                setScale(1.2);
            }
        });
    }

    const onResetAnimation = ()=>{
        Animated.timing(clapAnim, {
            toValue: 0,
            useNativeDriver: true
        }).start(()=>{
            setScale(1);
        });
    }

    const updateTimesPressed = ()=>{
        setTimesPressed(current => {
            if(current >=  maxCountPerUser){
                return maxCountPerUser;
            }
            return current+1
        })
    }
    const onSingleClap = ()=>{
        updateTimesPressed();
      onStartAnimation();
    }

    const onLongClap = ()=>{
        intervalRef.current = setInterval(()=>{
            updateTimesPressed();
            onStartAnimation();
        },100);
    }

    const onPressOut = ()=>{
        if(intervalRef.current){
            clearInterval(intervalRef.current);
        }
    }
   return (
    <View style={styles.container}>
    <Animated.View style={[styles.countCircle,{
        transform:[
            {translateY: clapAnim.interpolate({
                inputRange: [0,90],
                outputRange: [0,-90]
            })},
            {scale}
        ],

        opacity: clapAnim.interpolate({
            inputRange: [0,1,90],
            outputRange: [0,1,1]
        })
    }]}>
        <Text style={styles.countCircleText}>+ {timesPressed}</Text>
    </Animated.View>
    <Pressable 
    style={styles.clapButton}
    onLongPress={onLongClap}
    onPress={onSingleClap}
    onPressOut={onPressOut}
    >
        {({pressed})=> <MaterialCommunityIcons name={pressed ? "hand-wave" : "hand-wave-outline"} size={30} color={"#000"}
        style={{transform:[
            {rotateY:'180deg'}
        ]}}
        />}
    </Pressable>
    </View>
   )
}

export default MediumClapButton;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    clapButton:{
        position: 'absolute',
        bottom: 10,
        left: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    countCircle:{
        position: 'absolute',
        bottom: 10,
        left: 15,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    },
    countCircleText:{
        color:'#fff'
    }
})