
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

export default class App extends React.Component{
state ={
name: '',
};

_onChangeName = text =>{
  this.setState({
    name: text
  })
}
 render() {
   const {
     name,
   } = this.state;

   return(
        <View style={styles.container}>
          <Text>{name}</Text>
         <TextInput style={styles.textInp}
            placeholder = "İsim"
            placeholderTextColor = 'Black'
            onChangeText={this._onChangeName} ></TextInput>       
        </View>
   );
 }

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    },
    touchStyle: {
      width:200,
      height: 40,
      backgroundColor: 'red',
      marginTop:20
    },
    textInp : {
      width:300,
      height:40,
      borderRadius:10,
      color: 'black',
      borderWidth: 2
    }
});

