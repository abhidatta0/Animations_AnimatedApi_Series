import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CardColorInterpolate = ()=>{
    const onStart = ()=> {
       
    }

    const onReset = ()=> {
       
    }
   return (
    <View style={styles.container}>
        <View style={[styles.box]} />
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