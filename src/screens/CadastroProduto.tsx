import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');


    const CadastroProduto = async () => {

    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Top Food</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do Produtos" value={nome} onChangeText={setNome} />
                <TextInput style={styles.input} placeholder="Precço" value={preco} onChangeText={setPreco} />
                <TextInput style={styles.input} placeholder="Ingredientes" value={ingredientes} onChangeText={setIngredientes} multiline />
                <View style={styles.alinhamnetoImagemSelecionado}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionando} />:null}
                </View>



<TouchableOpacity style={styles.imageButton}>
    <Text style={styles.imageButtonText}> Selecionar Imagem</Text>
       </TouchableOpacity>


       <TouchableOpacity style={styles.imageButton}>
    <Text style={styles.imageButtonText}>Tirar Foto</Text>
       </TouchableOpacity>

       
<TouchableOpacity style={styles.imageButton}>
    <Text style={styles.imageButtonText}> Cadastar Produto</Text>
       </TouchableOpacity>

    






            </View>
        </View>
    );
}
const styles = StyleSheet.create({


    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imagemSelecionando: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamnetoImagemSelecionado: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttoText: {
        color: 'white',
        fontWeight: 'bold'
    }

});
























export default CadastroProduto;