import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity
}from 'react-native';

const HomeScreen = ({navigation}) => {
   //console.log(props.navigation);

    return (
     <View>
              <Text >Hi there!</Text>
              <Button 
                 onPress={() =>navigation.navigate('ComponentScreen')}
                 title="Go To component demo"
             />
             <Button onPress={()=>navigation.navigate('ListScreen')}
                  title="Go to List Demo"
             />

             <Button onPress={()=>navigation.navigate('ImageScreen')}
                  title="Go to Image Demo"
             />

             {/*<TouchableOpacity  onPress={() => console.log('List Pressed')}>
                <Text>Go to list demo</Text>
                navigation.navigate("component");
             </TouchableOpacity>*/}

             <TouchableOpacity onPress={()=> navigation.navigate("ListScreen")}>
                <Text>Go to List Demo</Text>
                <Text>Go to List Demo</Text>
                <Text>Go to List Demo</Text>
             </TouchableOpacity>

            

      </View>
    );
      
};
export default HomeScreen;