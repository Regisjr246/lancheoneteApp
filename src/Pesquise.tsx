import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import CardapioListagem from '../src/Pesquise.tsx';
const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default MyComponent;