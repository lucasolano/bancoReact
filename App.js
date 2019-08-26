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
       //{Gen: 'Não Definido', valor:3}
      ],
      limite: 0,
      estudante: false,
    };

    this.nomeForm = this.nomeForm.bind(this);
    this.enviarDados = this.enviarDados.bind(this);

  }

  //Método que receberá o texto digitado no input "NOME"

  nomeForm(texto){
    let state = this.state;
    state.nome = texto;
    this.setState(state);

  }

  //Método que será chamado quando apertar o botão "ABRIR CONTA"

  enviarDados(){

    alert(
      'Bem Vindo ao Banco React, sua conta foi aberta com sucesso !! \n \n'+
      'Nome: '+this.state.nome +'\n'+
      'Sexo: '+this.state.sexo[this.state.sex].Gen+'\n'+
      'Limite Conta: '+this.state.limite.toFixed(2)+'\n'+
      'Conta Estudante: '+ ((this.state.estudante)? 'Ativo':'Inativo')
    );

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
      placeholder="Informe seu nome: " 
      underlineColorAndroid ="transparent"
      onChangeText={this.nomeForm}/>
    </View>

    <View style = {styles.areaTexto}>
      <Text style={styles.textoNome}>Sexo: </Text>
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
        <Switch value={this.state.estudante} 
                onValueChange={(valorSwitch) => this.setState({estudante:valorSwitch})}
                onTintColor="#00c300"
                
        />
    </View>

      <View style = {styles.areaBotao}>
        <TouchableOpacity style={styles.botao} 
        onPress={this.enviarDados}
        underlayColor= '#000000'>  
          <Text style={styles.botaoTexto}> Abrir Conta </Text>  
        </TouchableOpacity>
      </View>
   </View>
    

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  logo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'bold',
    color:'#A9A9A9',
  },
  areaTexto:{
    alignItems:'flex-start',
    paddingTop:15,
    marginLeft:20,
    marginBottom:-8,
  },
  inputArea:{
    alignSelf: 'stretch',
  },
  textoNome:{
    fontSize:17,
    color:'#000000',
    fontWeight: 'bold',
  },
  inputNome:{
    borderWidth:'1',
    borderColor: '#999999',
    backgroundColor:'#EEEEEE',
    color:'#000000',
    height:38,
    margin:20,
    padding:10,
  },
  areaSexo:{
  flexDirection: 'row',
  },
  pickerSexo:{
    flex:1,
    width:150,
  },
  areaSlider:{
    paddingTop:15,
  },
  textoLimite:{
    fontSize: 17,
    color:'#FF0000',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  limiteArea:{
    margin:5,
    flexDirection:'row',
    marginLeft:19,
  },
  areaEstudante:{
    paddingTop: 15,
    paddingLeft: 20,
    alignItems:'flex-start',
  },
  areaBotao:{
    height:40,
    marginBottom:25,
    flexDirection:'row',
  },
  botao:{
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius:150,
    margin:20,
  },
  botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },
 
});
