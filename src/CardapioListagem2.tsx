import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const CardapioListagem2 = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);


    useEffect(() => {
        listarProdutos();
    }, []);

interface Produto{
    id: string;
    nome:string;
    ingredientes:string;
    preco:number;
    imagem:any;
}
    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.214:8000/api/produtos');
            if (response.status === 200) {
                setProdutos(response.data); // Set the state with the correct data
                 console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

const renderItem = ({ item }: { item: Produto }) => (
        <View style={styles.item}>
            <Text style={styles.textNome}>{item.nome}</Text>
            <Text style={styles.textIngredientes}>{item.ingredientes}</Text>
            <Text style={styles.textValor}>{item.preco}</Text>
            <Image source={{ uri: item.imagem }} style={styles.imageCardapio} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(produtos) => produtos.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        marginBottom: 20,
    },
    textNome: {
        color: 'black',
        fontWeight: 'bold',
    },
    textIngredientes: {
        color: 'black',
    },
    textValor: {
        color: 'red',
        fontWeight: 'bold',
    },
    imageCardapio: {
        width: 100,
        height: 100,
    },
});

export default CardapioListagem2;