import React from "react";
import { StyleSheet,Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
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
                <Image source={require('../assets/images/use.png')} style={styles.user} />
                </View>

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
        backgroundColor: '#d1d3dc',
        alignItems: 'center',
        flex:1

    },

    border: {
        borderWidth: 2,
        borderColor: '#3b4344',
        padding: 10,
        width: 350,
        marginVertical: 20,
        alignItems: 'center',
        borderRadius:50,
        backgroundColor:'#333237'
    },
 
    texto: {
        color: 'white',
        fontSize: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#e9f2f9',
        borderRadius: 20,
        width: 300,
        height:44,
        backgroundColor: '#e9f2f9',
        marginTop: 20

    },
    fundo: {
        backgroundColor: '#333237',
        alignItems: 'center',
        paddingVertical: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        width: 400
    },
    criar: {
        fontSize: 60,
        color: 'white',
        marginVertical: -90
    },
    inscr: {
        fontSize: 20,
        color: 'white',
        marginVertical: -10
    },
    botao: {
        borderWidth: 1,
        width: 150,
        borderColor: '#e9e2da',
        alignItems: 'center',
        height: 50,
        padding: 3,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#9cc4e4'
    },
    textbotao: {
        fontSize: 20,
        color:'white',
        marginVertical:5
        
    },
    user:{
        height:100,
        width:100,
        
    },
    imageUse:{
        marginVertical:-20
    },
    Iconuser:{
height:70,
width:70,
marginVertical:-50
    }


});

export default CadastroCliente;