import React from 'react';

import CardapioListagem from './src/CardapioListagem';
import Carrinho from './src/Carrinho';
import CadastroProduto from './src/screens/CadastroProduto';
import Login from './src/Login';
import CadastroCliente from './src/Cadastros/CadastroCliente';
import CadastroUsuario from './src/Cadastros/CadastrosUsuario';
import CadastroClienteInvestidor from './src/Investidor/Cadastros/CadastroCliente';
import CadastroProdutoInvestidor from './src/Investidor/Cadastros/CadastroProduto';
import CardapioListagem2 from './src/CardapioListagem2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()




function App(): React.ReactElement {
  return (
<NavigationContainer>

  <Stack.Navigator>
<Stack.Screen name='CardapioListagem2'  component={CardapioListagem2}  
options={{headerShown:false}} />
  </Stack.Navigator>


  <Stack.Navigator>
<Stack.Screen name='CadastroProduto'  component={CadastroProduto}  
options={{headerShown:false}} />
  </Stack.Navigator>



</NavigationContainer>



//<CardapioListagem/>
//<CadastroProduto/> 
// <Carrinho/>
//<Login/>
//<CadastroCliente/>

//<CadastroUsuario/>
//<CadastroProdutoInvestidor/>
//<CadastroClienteInvestidor/>
//<CardapioListagem2/>


   
);
}




export default App;