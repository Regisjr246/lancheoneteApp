import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import Pesquise from '../src/Pesquise.tsx';
import Footer from './Footer.tsx';


interface MenuItem {
    id: string;
    nome: string;
    ingredientes: string;
    valor: string;
    image: any;
    Image: any;
}
const dados: MenuItem[] = [
    { id: "1", nome: "BURGUER STAR 1", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/h0.png'), Image: require('./assets/images/h+.png') },
    { id: "2", nome: "BURGUER STAR 2", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$22,90", image: require('./assets/images/h1.png'), Image: require('./assets/images/h+.png') },
    { id: "3", nome: "BURGUER STAR 3", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$25,90", image: require('./assets/images/h2.png'), Image: require('./assets/images/h+.png') },
    { id: "4", nome: "BURGUER STAR 4", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$27,90", image: require('./assets/images/h3.png'), Image: require('./assets/images/h+.png') },
    { id: "5", nome: "BURGUER STAR 5", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$28,90", image: require('./assets/images/h4.png'), Image: require('./assets/images/h+.png') },
    { id: "6", nome: "BURGUER STAR 6", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$35,90", image: require('./assets/images/h5.png'), Image: require('./assets/images/h+.png') },
    { id: "7", nome: "BURGUER STAR 7", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$35,90", image: require('./assets/images/h6.png'), Image: require('./assets/images/h+.png') },
    { id: "8", nome: "BURGUER STAR 8", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$40,90", image: require('./assets/images/h7.png'), Image: require('./assets/images/h+.png') },
    { id: "9", nome: "BURGUER STAR 9", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$45,90", image: require('./assets/images/h8.png'), Image: require('./assets/images/h+.png') },
    { id: "10", nome: "BURGUER STAR 10", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$55,90", image: require('./assets/images/h9.png'), Image: require('./assets/images/h+.png') },
    { id: "11", nome: "BURGUER STAR 11", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$60,90", image: require('./assets/images/h10.png'), Image: require('./assets/images/h+.png') },
    { id: "12", nome: "BURGUER STAR 12", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$30,90", image: require('./assets/images/h11.png'), Image: require('./assets/images/h+.png') },
    { id: "13", nome: "BURGUER STAR 13", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$29,90", image: require('./assets/images/h12.png'), Image: require('./assets/images/h+.png') },
    { id: "14", nome: "BURGUER STAR 14", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$35,90", image: require('./assets/images/h13.png'), Image: require('./assets/images/h+.png') },
    { id: "15", nome: "BURGUER STAR 15", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$37,90", image: require('./assets/images/h14.png'), Image: require('./assets/images/h+.png') },



];


const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.item}>
        <Text style={styles.textNome}>{item.nome}  </Text>
        <Text style={styles.textIngredientes}>{item.ingredientes} </Text>
        <Text style={styles.textValor}>{item.valor} </Text>
        <Image source={item.image} style={styles.imageCardapio} />
        <TouchableOpacity >
            <Image source={item.Image} style={styles.imageIcon} />
        </TouchableOpacity>

    </View>

);


function CardapioListagem(): React.JSX.Element {

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Image source={require('./assets/images/marca.png')} style={styles.hIcon} />
                </TouchableOpacity>
            </View>

            <Pesquise />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
            <Footer />
        </View>
    );
}
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
        marginLeft: -30,
        marginVertical: -50,
        marginTop: -90
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
        marginLeft: 80,
        fontWeight: 'bold',
        marginTop: 1,

    },
    imageIcon: {
        width: 30,
        height: 30,
        marginLeft: 300,
        marginVertical: -15,

    },
    pesquisa: {
        marginTop: -50,

    },

});







export default CardapioListagem;