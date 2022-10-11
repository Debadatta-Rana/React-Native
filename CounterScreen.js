import React, { useState } from "react";
import {View,Text,StyleSheet,Button} from "react-native";
const CounterScreen = () =>{
   //let count = 0;
   const [count, setCount] = useState(0);

    return(
    <View>
        <Button title="Increase" onPress={()=>{
           // count++;
           setCount(count + 1);
        }
        }/>
        <Button title="Decrease" onPress={()=>{
           // count--;
           setCount(count - 1);
            }
            }/>
        <Text>Current count::{count}</Text>
    </View>
    );
}
const styles = StyleSheet.create();

export default CounterScreen;