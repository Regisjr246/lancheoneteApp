import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Pesquise from '../src/Pesquise.tsx';
import Footer from './Footer.tsx';

interface Produto{
    id: string;
    nome:string;
    ingredientes:string;
    preco:number;
    imagem:any;
}


const CardapioListagem2 = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);


    useEffect(() => {
        listarProdutos();
    }, []);


    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.214/api/produtos');
            if (response.status === 200) {
                setProdutos(response.data); 
                 console.log(produtos);
            }
        } catch (error) {
            console.log(error);
        }
    }

const renderItem = ({ item }: { item: Produto }) => (
        <View style={styles.item}>
            <Text   style={styles.textNome}>{item.nome}</Text>
            <Text style={styles.textIngredientes}>{item.ingredientes}</Text>
            <Text style={styles.textValor}>{item.preco}</Text>
         <View style={styles.imageCardapio} >{ item.imagem != null ? <Image source={{ uri: item.imagem.toString() }} style={styles.imageCardapio} /> : <Image source={ require('./assets/images/CameraProduto.png')} />}</View>
         <TouchableOpacity><Image source={require('./assets/images/h+.png')} style={styles.imageIcon} /></TouchableOpacity>
        
        </View>
    );

    return (
        <View style={styles.container}>
    <View>
                <TouchableOpacity>
                    <Image source={require('./assets/images/marca.png')} style={styles.hIcon} />
                </TouchableOpacity>
            </View>
            <Pesquise />

            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(produtos) => produtos.id}  />
         <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingVertical: 10,

    },
    footerIcon: {
        width: 40,
        height: 40
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    hIcon: {
        alignItems: 'center',
        width: 150,
        height: 100,
        marginLeft: 120
    },
    especialides: {
        alignItems: "flex-end",
        fontSize: 20,
        color: 'black',
        fontFamily: 'serif'
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: 20,
    },
    imageCardapio: {
        width: 100,
        height: 100,
        marginLeft: -20,
        marginVertical: -60,
        marginTop: -48
    },
    textNome: {
        color: 'black',
        marginLeft: 80,
        fontWeight: 'bold',
    },
    textIngredientes: {
        color: 'black',
        marginLeft: 80,
        width: 200,
        justifyContent: "center",
        flexDirection: 'row',
    },
    textValor: {
        color: 'red',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 1,

    },
    imageIcon: {
        width: 30,
        height: 30,
        marginLeft: 300,
        marginVertical: -50,

    },
    pesquisa: {
        marginTop: -50,

    },

});



export default CardapioListagem2;