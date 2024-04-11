import React, { useState } from "react";
import { StyleSheet, Image, Text, TextInput, Touchable, TouchableOpacity, View, ScrollViewBase, ScrollViewComponent, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Footer from '..//../Footer';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios, { formToJSON } from "axios";


const CadastroProdutoInvestidor: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
  
    const [imagem, setImagem] = useState<any>('');
    const [errors, setErrors] = useState<any>({});




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

    const cadastrarProduto = async () => {
        try {


            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('ingredientes', ingredientes);
            formData.append('preco', preco);
          
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            console.log(formData);

            const response = await axios.post('http://10.137.11.214:8000/api/produtos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.log(error);
            }
        }
        
    }
    const renderError = (name: string) => {
        if (errors[name]) {
            return (
                <Text style={styles.errorText}>{errors[name][0]}</Text>
            );
        }
        return null;
    }

    return (
        <View style={styles.container} >
<ScrollView>
            <View>
                <View style={styles.header}>
                <Image source={require('../../assets/images/MarcaDigitalizada.png')} style={styles.marca}/>

                </View>
            </View>
            <View style={styles.borda}>
                <ScrollView>


            
<View >
                <TouchableOpacity onPress={abrirCamera}>


                    {imagem ? <Image source={{ uri: imagem }} style={styles.user} /> : <Image source={require('../../assets/images/ProdutoAdd.png')} style={styles.user} />}

                </TouchableOpacity>
                </View>
                <View><TouchableOpacity><Text style={styles.addFoto} onPress={selecionarImagem}>Adicionar foto</Text></TouchableOpacity></View>

                <View>

                 
    <Text style={styles.text}>Nome</Text>
    <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} ></TextInput>
    {renderError('nome')}
</View>



<View>
    <Text style={styles.text}>Ingredientes</Text>
    <TextInput placeholder="Ingredientes" style={styles.input} value={ingredientes} onChangeText={setIngredientes}></TextInput>
    {renderError('ingredientes')}
</View>

<View>
    <Text style={styles.text}>Preço</Text>
    <TextInput keyboardType={'decimal-pad'} placeholder="Preço" style={styles.input} value={preco} onChangeText={setPreco}></TextInput>
    {renderError('preco')}
</View>

                

                <View style={styles.botaoRegistrar}><TouchableOpacity  onPress={cadastrarProduto}><Text style={styles.textRegistrar} >Cadastrar</Text></TouchableOpacity></View>
                </ScrollView>
            </View>

            </ScrollView>
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
        marginTop: 70,
        
 

    },
    addFoto: {
        marginLeft: 130,
        color: 'black',
        fontWeight: 'bold'
    },
    user: {
        borderWidth: 1,
        borderRadius: 600,
        width: 100,
        height: 100,
        marginLeft: 120,
        marginVertical:10

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
    errorText: {
        color: 'red',
        marginLeft: 15,
        marginVertical: 2,
        fontSize: 15,
    },
marca:{
    borderWidth:1,
    width:300,
    height:50,
    marginVertical:2,
    alignItems:'center',
    
},

});

export default CadastroProdutoInvestidor;