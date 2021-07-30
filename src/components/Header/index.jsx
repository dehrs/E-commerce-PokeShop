import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/logo.png';
import { Container, Cart } from './styles';
// import { useCart } from '../../hooks/useCart';

const Header = () => {
  // const { cart } = useCart();
  // const cartSize = cart.length


  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {/* {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} */}
            {0} itens
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;