import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDescription from './pages/Product-Description';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={ProductDescription} />
    </Switch>
  );
};

export default Routes;
