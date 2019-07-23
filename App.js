import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  Switch,
  Slider,
  TouchableOpacity
} from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'',
      sex:0,
      sexo:[
       {Gen: 'Feminino', valor: 1},
       {Gen: 'Masculino',valor:2},
       {Gen: 'Não Definido', valor:3}
      ],
      valorLimite: 400,
      estudante: false,
    };
  }


 render(){

  let sexItems = this.state.sexo.map((v,k) =>{
    return <Picker.Item key={k} value={k} label={v.sexGen}/>

  });

  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Banco React</Text>

    <View style = {styles.areaTexto}>
      <Text style={styles.textoNome}>Nome:</Text>
      </View>

    <View style={styles.inputArea}>
      <TextInput style={styles.inputNome} 
      placeholder="Informe seu nome" 
      underlineColorAndroid ="transparent"/>
      onChangeText={this.nomeForm}
    </View>

    <View style = {styles.areaTexto}>
      <Text style={styles.textoNome}>Sexo:</Text>
    </View>

    <View style={styles.areaSexo}>
      <Picker style={styles.pickerSexo}
          selectedValue= {this.state.sex} 
          onValueChange = {(itemValue, itemIndex) => this.setState({sex:itemValue})}>
            {sexItems}
      </Picker>
      </View>

      <View style={styles.limiteArea}>
        <Text style={styles.textoNome}>Seu limite: </Text>
        <Text style={styles.textoLimite}>R$ {this.state.limite.toFixed(0)}</Text>


      </View>
      <View style={styles.areaSlider}>
        <Slider minimumValue={400}
                maximumValue={4000}
                value={this.state.peso}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#FF1CAE" 
                onValueChange={(valorSelecionado) => this.setState ({valorLimite: valorSelecionado})}

                />

      </View>

      <View style = {styles.areaTexto}>
        <Text style={styles.textoNome}>Estudante:</Text>
      </View>
     
        
      <View style={styles.areaEstudante}>
        <Switch value={this.state.estudante} onValueChange={(valorSwitch) => this.setState({status:valorSwitch})}
        thumbColor="#000000"
        trackColor="FF0000"
        />
        <Text>{(this.state.status)? "Sim":"Não"}</Text>
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
  areaTexto:{
    alignItems:'flex-start',
    paddingTop:15,
    marginLeft:20,
    marginBottom:-8
  },
  inputArea:{
    alignSelf: 'stretch'
  },
  textoNome:{
    fontSize:17,
    color:'#000000',
    fontWeight: 'bold'
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
  textoLimite:{
    fontSize:17,
    color:'#FF0000',
    fontWeight: 'bold',
    paddingLeft:5
  },
  limiteArea:{
    margin:5,
    flexDirection:'row',
    marginLeft:19,
  },
  areaEstudante:{
    paddingTop: 15,
    paddingLeft: 20,
    alignItems:'flex-start'
  }
 

});
