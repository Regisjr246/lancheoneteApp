import React from "react";
import { StyleSheet,Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function CadastroCliente(): React.JSX.Element {
return(
<View style={styles.container} >


<View style={styles.fundo}>
   
<View style={styles.alinhamento}>

    
                <Image source={require('../assets/images/use.png')} style={styles.user} />
                <View><TouchableOpacity><Text style={styles.addFoto}>Adicionar foto</Text></TouchableOpacity></View>
                </View>
                
<View style={styles.alinhamentoCenter}>
<View><Text style={styles.criar}>Criar conta</Text></View>

<View><Text style={styles.inscr}>Inscreva-se para começar</Text></View>
</View>
</View>
<View style={styles.border} >


<View>

<TextInput style={styles.input} placeholder='Nome'></TextInput>
</View>


<View>

<TextInput style={styles.input} placeholder='Email'></TextInput>
</View>









<View>

<TextInput style={styles.input} placeholder='Telefone'></TextInput>
</View>




<View>

<TextInput style={styles.input} placeholder='Senha'></TextInput>
</View>

<View>

<TextInput style={styles.input} placeholder='Endereço'></TextInput>
</View>

<View>
<TouchableOpacity style={styles.botao}><Text style={styles.textbotao}>Registrar</Text></TouchableOpacity>
</View>

</View>





















</View>
)};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff8dc',
        alignItems: 'center',
        flex:1

    },

    border: {
        borderWidth: 2,
        borderColor: '#fff8dc',
        padding: 10,
        width: 350,
        marginVertical: -5,
        alignItems: 'center',
        borderRadius:50,
        backgroundColor:'#fff8dc'
    },
 
    texto: {
        color: 'black',
        fontSize: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ffe4e1',
        borderRadius: 50,
        width: 300,
        height:50,
        backgroundColor: '#ffe4e1',
        marginTop: 20

    },
    fundo: {
        
    },
    criar: {
        fontSize: 30,
        color:  '#663153',
fontWeight:'bold'     ,
marginVertical:-35
    },
    inscr: {
        fontSize: 20,
        color:  '#663153',
        fontWeight:'bold',  
       marginVertical:0
    },
    botao: {
        borderWidth: 1,
        width: 150,
        borderColor: '#663153',
        alignItems: 'center',
        height: 50,
        padding: 3,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#663153'
    },
    textbotao: {
        fontSize: 20,
        color:'white',
        marginVertical:5
        
    },
    user:{
        height:100,
        width:100,
        marginVertical:50
       
    },
    imageUse:{
        marginVertical:-20
    },
    Iconuser:{
height:70,
width:70,
marginVertical:-50
    },
    alinhamento:{
        alignItems:'center',
    },
    alinhamentoCenter:{
        alignItems:'center',
    },
    addFoto:{
        color:  '#663153',
        fontWeight:'bold',
        marginTop:-55
        
    }


});

export default CadastroCliente;