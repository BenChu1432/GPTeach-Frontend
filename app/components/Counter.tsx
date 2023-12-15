import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

type Props={
    maxCount:number;
    miniCount:number;
    count:number;
    setCount: (count: (prevState:number) => any)=>void;
}
const Counter = (props:Props) => {

    const handleCountOnPress=(plus:boolean)=>{
        if(plus&&props.count<props.maxCount){
            props.setCount(prevState => prevState+1)
        }else if(!plus&&props.count>props.miniCount){
            props.setCount(prevState => prevState-1)
        }

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.symbolContainer} onPress={()=>{handleCountOnPress(true)}}>
                <Text style={styles.symbol}>+</Text>
            </TouchableOpacity>

            <View style={styles.numberContainer}>
                <Text style={styles.number}>{props.count}</Text>
            </View>

            <TouchableOpacity style={styles.symbolContainer} onPress={() => handleCountOnPress(false)}>
                <Text style={styles.symbol}>-</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    symbolContainer:{
        justifyContent:"center",
        alignItems:"center",
        width: 44,
        borderColor: 'black',
        borderWidth: 2,
    },
    symbol: {
        fontSize: 24,
        padding: 5,
    },
    numberContainer:{
        justifyContent:"center",
        alignItems:"center",
        width: 44,
        borderColor: 'black',
        borderWidth: 2,
    },
    number: {
        fontSize: 24,
        padding: 5,
    }
});
export default Counter;