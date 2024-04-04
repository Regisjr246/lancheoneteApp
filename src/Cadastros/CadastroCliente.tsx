import React from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function CadastroCliente(): React.JSX.Element {
return(
<View style={styles.container} >


<View style={styles.fundo}>
<View><Text style={styles.criar}>Criar conta</Text></View>

<View><Text style={styles.inscr}>Inscreva-se para começar</Text></View>
</View>
<View style={styles.border} >

<View>
<Text>Nome</Text>
<TextInput style={styles.input} placeholder='Nome'></TextInput>
</View>


<View>
<Text>Email</Text>
<TextInput style={styles.input} placeholder='Email'></TextInput>
</View>









<View>
<Text>Telefone</Text>
<TextInput style={styles.input} placeholder='Telefone'></TextInput>
</View>




<View>
<Text>Senha</Text>
<TextInput style={styles.input} placeholder='Senha'></TextInput>
</View>

<View>
<Text>Data de nascimento</Text>
<TextInput style={styles.input} placeholder=''>Data de nascimento</TextInput>
</View>

<View>
<Text>Endereço</Text>
<TextInput style={styles.input} placeholder='Endereço'></TextInput>
</View>

<View>
<TouchableOpacity style={styles.botao}><Text>Registrar</Text></TouchableOpacity>
</View>

</View>



















</View>
)};


const styles = StyleSheet.create({

container:{
backgroundColor:'white',
alignItems:'center'

},

border:{
  borderWidth:1,
  borderColor:'white',
    padding:10,
    width:350,
    marginVertical:'1%',
    alignItems:'center'
},
hora:{
    backgroundColor:'black',
borderWidth:2,
padding:10,
borderRadius:20,
height:20,
width:100,
marginTop:-100



},
texto:{
color:'white',
fontSize:20
},
input:{
    borderWidth:1,
    borderRadius:10,
    width:300,
    height:40,

},
fundo:{
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width:400
},
criar:{
fontSize:60,
color:'white',
marginVertical:-90},
inscr:{
    fontSize:20,
    color:'white',
    marginVertical:-10},
    botao:{
        borderWidth:1,
        width:150,
        alignItems:'center',
        height:30,
        padding:3,
borderRadius:20,
marginVertical:10,
backgroundColor:'blue'
    },
    textoButao:{
        fontSize:15,
        color:'white'
    }

});

export default CadastroCliente;