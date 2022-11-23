import React from 'react';
import{View, Text, Button}from 'react-native';
import{createAppContainer} from 'react-navigation'
import{createStackNavigator} from 'react-navigation-stack'
class App extends React.Component{
     render(){
      return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

        <Text style={{fontSize:80}}>Home Screen</Text>
         
         <Button onPress={()=>{this.props.navigation.navigate("Myprofile")}} title="go to profile screen"></Button>
         </View>
      );
     }
}
function Profile(props)
{
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

        <Text style={{fontSize:80}}>Profile Screen</Text>

        <Button onPress={()=>{props.navigation.navigate("Home")}} title="go to Home screen"></Button>
         
         </View>
  )
}
const AppNavigator=createStackNavigator({
  Home:{
    screen:App,
  },
  Myprofile:{
    screen:Profile
  }
})
export default createAppContainer(AppNavigator);