import React, { useRef } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Footer from './Footer.tsx';
import { RadioButton } from 'react-native-paper';



interface MenuItem {
    id: string;
    nome: string;
    ingredientes: string;
    valor: string;
    image: any;
    Image: any;
}

const dados: MenuItem[] = [
    { id: "1", nome: "BURGUER STAR 1", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$12,90", image: require('./assets/images/h0.png'), Image: require('./assets/images/lixeira.png') },
    { id: "2", nome: "BURGUER STAR 2", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$22,90", image: require('./assets/images/h1.png'), Image: require('./assets/images/lixeira.png') },
    { id: "3", nome: "BURGUER STAR 3", ingredientes: "Pão de Brioche, 2 hambúrguer de 150g,queijo chedar, ", valor: "R$25,90", image: require('./assets/images/h2.png'), Image: require('./assets/images/lixeira.png') },
];



const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textNome}>{item.nome}  </Text>
        <Text style={styles.textIngredientes}>{item.ingredientes} </Text>
        <Text style={styles.textValor}>{item.valor} </Text>
        <Image source={item.image} style={styles.imageCardapio} />
        <TouchableOpacity >
            <Image source={item.Image} style={styles.imageIcon} />
        </TouchableOpacity>

    </TouchableOpacity>

);


function Carrinho(): React.JSX.Element {
    const [value, setValue] = React.useState(0);
    const scrollRef = useRef();

    const [checked, setChecked] = React.useState('first');
    return (

        <View>
            <View>
                <TouchableOpacity>
                    <Image source={require('./assets/images/marca.png')} style={styles.hIcon} />
                </TouchableOpacity>

                <Text style={styles.meuPedido}>Meu Pedido</Text>
                <TouchableOpacity style={styles.buttonCarrinho}><Text style={styles.textPedido} >Enviar Pedido</Text></TouchableOpacity>
            </View>



            <FlatList
                showsVerticalScrollIndicator={true}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />


<View>
     
      
    </View>








<Text style={styles.formaPagementos}>Forma de Pagamento:</Text>
<View style={styles.Rd1}>
  <View style={styles.radioButtonContainer}>
    <RadioButton
      value="Pix"
      status={checked === 'first' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('first')}
    />
    <Text style={styles.radioButtonText}>Pix</Text>
  </View>

  <View style={styles.radioButtonContainer}>
    <RadioButton
      value="Cartao de credito"
      status={checked === 'second' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('second')}
    />
    <Text style={styles.radioButtonText}>Cartão de Crédito</Text>
  </View>

  <View style={styles.radioButtonContainer}>
    <RadioButton
      value="Cartao de debito"
      status={checked === 'third' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('third')}
    />
    <Text style={styles.radioButtonText}>Cartão de Débito</Text>
  </View>

  <View style={styles.radioButtonContainer}>
    <RadioButton
      value="Criptomoeda"
      status={checked === 'fourth' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('fourth')}
    />
    <Text style={styles.radioButtonText}>Criptomoeda</Text>
  </View>
</View>


<TouchableOpacity style={styles.FinalizarCompra}><Text  style={styles.TextCompra} > Finalizar Compra </Text></TouchableOpacity>
        </View>
    );

   

}



const styles = StyleSheet.create({
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
    buttonCarrinho: {
        borderWidth: 1,
        borderBlockColor: 'orangered',
        backgroundColor: 'orangered',
        width: 370,
        height: 40,
        marginLeft: 10,
        borderRadius: 1
    },
    textPedido: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        fontFamily:'sans-serif'
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
    Cc:{
        fontSize:20,
   
    },
    FinalizarCompra:{
        borderWidth: 1,
        borderBlockColor: 'orangered',
        backgroundColor: 'orangered',
        width: 370,
        height: 40,
        marginLeft: 10,
        borderRadius: 2,
        marginVertical:-20   
    },
    TextCompra:{
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        fontFamily:'Fantasy'
    },
    formaPagementos:{
fontFamily:'fantasy',
fontSize: 20,
color:'orangered',
fontWeight: 'bold',
marginTop:5,

    },
    Rd1:{
        marginVertical:20
    },
    meuPedido:{
        marginVertical:1,
        color:'red',
        marginLeft:12,
        fontSize:30
    
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      radioButtonText: {
        marginLeft: 10,
        fontSize: 16, 
        color: 'black', 
      },

   


});

export default Carrinho;