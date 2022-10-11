import React from "react";
import { View,Text,Button,StyleSheet} from "react-native";
import ColorCounter from "./Component/ColorCounter";

const SquareScreen =()=>{
    return(
        <View>
          <ColorCounter color="Red"/>
          <ColorCounter color="Green"/>
          <ColorCounter color="Blue"/>
      </View>
    );
}
const styles =StyleSheet.create();
export default SquareScreen;