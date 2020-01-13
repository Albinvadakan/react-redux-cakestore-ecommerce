import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from '../components/product/list/productlistComponent'
import Detail from '../components/product/detail/productdetailComponent'
// import Banner from './components/utility/banner/bannerComponent';
import Cart from '../components/cart/cartComponent'



const Routing = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={List} />
            <Route path="/cakelist" component={List} />
            <Route path="/cakedetail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
        </Switch>
    </BrowserRouter>
)
export default Routing;