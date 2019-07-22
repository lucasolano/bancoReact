import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput
} from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      sex:0,
      sexo:[
       {Gen: 'Feminino', valor: 1},
       {Gen: 'Masculino',valor:2},
       {Gen: 'Não Definido', valor:3}
      ]
    };
  }


 render(){

  let sexItems = this.state.sexo.map((v,k) =>{
    return <Picker.Item key={k} value={k} label={v.sexGen}/>

  });

  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Banco React</Text>
      
      <TextInput style={styles.inputNome} 
      placeholder="Nome" 
      underlineColorAndroid ="transparent"/>
      <Text style={styles.textoNome}>
        
      </Text>


    <View style={styles.areaSexo}>
      <Picker style={styles.pickerSexo}
          selectedValue= {this.state.sex} 
          onValueChange = {(itemValue, itemIndex) => this.setState({sex:itemValue})}>
            {sexItems}
  </Picker>

</View>
</View>

);
}
}

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    flex:1,
  },
  logo:{
    textAlign: 'center',
    fontSize:'30',
    fontWeight:'bold',
    color:'#A9A9A9'
  },
  textoNome:{
  },
  inputNome:{
    borderWidth:'1',
    borderColor: '#999999',
    backgroundColor:'#EEEEEE',
    color:'#000000',
    height:38,
    margin:20,
    padding:10
  },
  areaSexo:{
  flexDirection: 'row'
  },
  pickerSexo:{
    flex:1,
    width:150,
  },


});