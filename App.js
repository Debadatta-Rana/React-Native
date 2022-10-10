 import React from "react";
 import HomeScreen from "./src/Screens/HomeScreen";
 import ComponentScreen from './src/Screens/ComponentScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import ListScreen from "./src/Screens/ListScreen";
 import ImageScreen from "./src/Screens/ImageScreen";

const App =()=>{

    const Stack = createNativeStackNavigator();
    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ComponentScreen" component={ComponentScreen}/>
                <Stack.Screen name="ListScreen" component={ ListScreen }/>
                <Stack.Screen name="ImageScreen" component={ImageScreen}/>
         
        </Stack.Navigator>
        </NavigationContainer>
    
    );

}
 export default App;