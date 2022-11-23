import React from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
class App extends React.Component{
  
    constructor()
    {
      super()
      this.state ={
        name: "",
        password:"",
        address:"",
      }
    }

    submit(){
      alert("Function Called")
    }

  render(){
    return(
      <View>
       <TextInput placeholder='Enter Name' style={styles.textBox} 
       onChangeText={(text)=>{this.setState({name:text})}}></TextInput>
       
       <TextInput placeholder='Enter password' style={styles.textBox}
       secureTextEntry={true} 
       onChangeText={(text)=>{this.setState({password:text})}}></TextInput>

<TextInput placeholder='Enter Address' style={styles.textBox} 
       onChangeText={(text)=>{this.setState({address:text})}}>

       </TextInput>
           
       <Button onPress={()=>{this.submit()}} title='Submit'></Button>  

      </View>
    );
  }
}
const styles = StyleSheet.create({
  textBox:{
    borderColor:'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
  }
})
export default App;