import React, { useState } from "react";
import { StyleSheet, Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Footer from '..//../Footer';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";


const CadastroClienteInvestidor: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
   
    const [cpf, setCpf] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');




    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            macWidth: 2000
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log("erro ao abrir a galeria");
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            macWidth: 2000
        };
        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log("erro ao abrir a camera");
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const cadastrarCliente = async () => {
        try {


            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('endereco', endereco);
            formData.append('Cpf', cpf);
            formData.append('telefone', telefone);

            formData.append('Password', password);
     
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            const response = await axios.post('http://10.137.11.214:8000/api/clientes/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container} >

            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>BurguerStar</Text>
                </View>
            </View>
            <View style={styles.borda}>
                <TouchableOpacity onPress={abrirCamera}>


                    {imagem ? <Image source={{ uri: imagem }} style={styles.user} /> : <Image source={require('../../assets/images/use.png')} style={styles.user} />}

                </TouchableOpacity>

                <View><TouchableOpacity><Text style={styles.addFoto} onPress={selecionarImagem}>Adicionar foto</Text></TouchableOpacity></View>

                <View>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} ></TextInput>
                </View>

                <View>
                    <Text style={styles.text}>Email</Text>
                    <TextInput keyboardType={'email-address'} placeholder="E-mail" style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                </View>

                <View>
                    <Text style={styles.text}>Endereço</Text>
                    <TextInput placeholder="Endereço" style={styles.input} value={endereco} onChangeText={setEndereco}></TextInput>
                </View>


                <View>
                    <Text style={styles.text}>CPF</Text>
                    <TextInput keyboardType={'numeric'} placeholder="CPF" style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
                </View>

                <View>
                    <Text style={styles.text}>Telefone</Text>
                    <TextInput keyboardType={'numeric'} placeholder="Telefone" style={styles.input} value={telefone} onChangeText={setTelefone}></TextInput>
                </View>

                <View>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput secureTextEntry={true} placeholder="Senha" style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                </View>

                

                <View style={styles.botaoRegistrar}><TouchableOpacity  onPress={cadastrarCliente}><Text style={styles.textRegistrar} >Registrar</Text></TouchableOpacity></View>

            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

        flex: 1

    },

    hIcon: {
        alignItems: 'center',
        width: 150,
        height: 90,
        marginLeft: 130,
        marginTop: 5
    },

    input: {
        borderWidth: 2,
        borderRadius: 10,
        width: 300,
        height: 40,
        marginLeft: 15,
        borderColor: '#c7dcca',
        marginVertical: 5,
    },
    text: {
        marginLeft: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    borda: {
        borderWidth: 1,
        borderColor: 'orangered',
        width: 350,
        padding: 10,
        borderRadius: 40,
        marginLeft: 25,
        backgroundColor: 'white',
        marginTop: 30,

    },
    addFoto: {
        marginLeft: 120,
        color: 'black',
        fontWeight: 'bold'
    },
    user: {
        borderWidth: 1,
        borderRadius: 50,
        width: 90,
        height: 90,
        marginLeft: 120
    },
    botaoRegistrar: {
        marginLeft: 110,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: 120,
        height: 40,
        backgroundColor: 'red',
        borderColor: 'red'
    },
    textRegistrar: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 30,
        marginVertical: 8,
        fontSize: 15
    },
    imagemSelecionando: {
        width: 100,
        height: 90,
        marginTop: -90,
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 120
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5



    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

});

export default CadastroClienteInvestidor;