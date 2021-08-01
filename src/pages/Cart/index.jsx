import { formatValue } from '../../utils/formatValue';
import { useCart } from '../../hooks/useCart';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { Container, Scroll, ProductTable, Total } from './styles';



const Cart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatValue(product.price)
  }))

  const total =
    formatValue(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )

  function handleProductIncrement(product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 })
  }

  function handleRemoveProduct(productId) {
    removeProduct(productId)
  }

  return (
    <Container>
      <Scroll>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map(cartFormat => (
              <tr key={cartFormat.id}>
                <td>
                  <img src={cartFormat.image} alt={cartFormat.title} />
                </td>
                <td>
                  <strong>{cartFormat.title}</strong>
                  <span>{cartFormat.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      disabled={cartFormat.amount <= 1}
                      onClick={() => handleProductDecrement(cartFormat)} >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={cartFormat.amount} />
                    <button
                      type="button"
                      onClick={() => handleProductIncrement(cartFormat)}>
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatValue(cartFormat.price * cartFormat.amount)}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(cartFormat.id)}>
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      </Scroll>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
