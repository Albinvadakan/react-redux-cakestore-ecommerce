import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import '../../App.css';
import Nav from '../common/header/headerComponent';
import Footer from '../common/foorter/footerComponent';
import List from '../product/list/productlistComponent';
import Detail from '../product/detail/productdetailComponent';
import Cart from '../cart/cartComponent';
import Payment from '../payment/paymentComponent';
import Login from '../authentication/sign-in/sign-inComponent';
import Order from '../order/orderComponent';
import Delevery from '../delivery/deliverComponent';

class Appskeleton extends Component {

    componentDidMount() {
        console.log('component mounted1');

    }

    render() {
        return (
            <div className="root h-100 w-100">
                <Nav />
                <div className="bodyContent w-100  ">
                    <Switch>
                        <Route path="/" exact component={List} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/cakelist" component={List} />
                        <Route path="/cakedetail/:id" component={Detail} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/ordersummary" component={Order} />
                        <Route path="/deliveryaddress" component={Delevery} />
                        <Route path="/payment" component={Payment} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Appskeleton)
