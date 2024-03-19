import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



interface MenuItem {
    id: string;
    nome: string;
    ingredientes: string;
    valor: string;
    image: any;
}
const dados: MenuItem[] = [


    { id: "1", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "2", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "3", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },

    { id: "4", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "5", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "6", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "7", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "8", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "9", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },

    { id: "10", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "11", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
    { id: "12", nome: "X-BURGUER", ingredientes: "Pão de Brioche, 2 hamburguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/hamburguer.png') },
];


const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textCardapio}>{item.nome}  </Text>
        <Text style={styles.textCardapio}>{item.ingredientes} </Text>
        <Text style={styles.textCardapio}>{item.valor} </Text>
        <Image source={item.image} style={styles.imageCardapio}>{}</Image>
    </TouchableOpacity>
)


function CardapioListagem(): React.JSX.Element {
    return (


        <View style={styles.container}>

            <View>
                <TouchableOpacity>
                    <Image source={require('./assets/images/marca.png')} style={styles.hamburguerIcon} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.especialides}>Especialidades</Text>


            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
























            <View style={styles.footer}>

                <TouchableOpacity>
                    <Image source={require('./assets/images/menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image source={require('./assets/images/shop.png')} style={styles.footerIcon} />
                </TouchableOpacity>



                <TouchableOpacity>
                    <Image source={require('./assets/images/config.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </View>





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
    hamburguerIcon: {
        alignItems: 'center',
        width: 150,
        height: 100,
        marginLeft: 120
    },
    especialides: {
        alignItems: "flex-end",
        fontSize: 20,
        color: 'black',
        fontFamily: '"Gill Sans"'


    },
    item: {
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        
    },
    imageCardapio:{
        width:100,
        height:100
    },
    textCardapio:{
        color:'black'
    }
});







export default CardapioListagem;