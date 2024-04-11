import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const CardapioListagem2 = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);


    useEffect(() => {
        listarProdutos();
    }, []);


    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.214:8000/api/produtos');
            if (response.status === 200) {
                setProdutos(response.data); // Set the state with the correct data
                // console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    interface Produtos {
        id: string;
        nome: string;
        ingredientes: string;
        valor: string;
        image: any;
  
    }

const renderItem = ({ item }: { item: Produtos }) => (
        <View style={styles.item}>
            <Text style={styles.textNome}>{item.nome}</Text>
            <Text style={styles.textIngredientes}>{item.ingredientes}</Text>
            <Text style={styles.textValor}>{item.valor}</Text>
            <Image source={{ uri: item.image }} style={styles.imageCardapio} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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