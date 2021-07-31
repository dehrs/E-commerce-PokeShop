import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';
import { ListPokemonProvider } from './hooks/useListPokemon';


const App = () => {
  return (
    <BrowserRouter>
      <ListPokemonProvider>
        <CartProvider>
          <GlobalStyle />
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </ListPokemonProvider>
    </BrowserRouter>
  );
};

export default App;

