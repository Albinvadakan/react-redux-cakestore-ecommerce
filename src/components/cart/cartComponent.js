import React, { Component } from 'react';
import { connect } from 'react-redux';
import cakeimg from '../../img/cake2.jpg';
import { getcartitems } from '../../store/actions/cakeaction';
import { Link } from 'react-router-dom';
import '../../App.css';

class Cart extends Component {

    componentDidMount() {
        this.props.getcartdetails();
    }

    removefromcart = (index) => {
        const cartArr = JSON.parse(localStorage.getItem("cart"));
        cartArr["cartarray"].splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartArr));
        this.props.getcartdetails();
        if (this.props.cartcount < 2) {
            setTimeout(() => {
                this.props.history.push('/cakelist');
            }, 1000);
        }
    }

    gettoatalprize() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        let total;
        total = 0;
        if (cart !== null) {
            for (let i = 0; i < cart['cartarray'].length; i++) {
                total = (parseFloat(total) + parseFloat(cart['cartarray'][i]['totalprize']))
            }
        }
        return <p>{total}</p>
    }

    addquantity = (index) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        cart['cartarray'][index]['quantity'] = (parseInt(cart['cartarray'][index]['quantity']) + parseInt(1))
        cart['cartarray'][index]['totalprize'] = (parseInt(cart['cartarray'][index]['quantity']) * parseInt(cart['cartarray'][index]['prize']))
        localStorage.setItem('cart', JSON.stringify(cart));
        this.props.getcartdetails();
    }


    reducequantity = (index) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        cart['cartarray'][index]['quantity'] = (parseInt(cart['cartarray'][index]['quantity']) - parseInt(1))
        cart['cartarray'][index]['totalprize'] = (parseInt(cart['cartarray'][index]['quantity']) * parseInt(cart['cartarray'][index]['prize']))
        localStorage.setItem('cart', JSON.stringify(cart));
        this.props.getcartdetails();
    }

    loadcartArray() {
        if (this.props.cartArray) {
            if (this.props.cartArray.length > 0) {
                return (
                    this.props.cartArray.map((cake, index) => {
                        return (
                            <div key={index}>
                                <div className="row">
                                    <div className="col-3  pl-5">
                                        <img src={cakeimg} width="100px" className="pt-1 " alt="cake" />
                                    </div>
                                    <div className="col-6 ">
                                        <h4>{cake.Name}</h4>
                                        <p>{cake.weight}</p>
                                        <h6> <b>&#x20b9; {cake.totalprize} &nbsp;</b></h6>
                                    </div>
                                    <div className="col-3 ">
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-3 pl-5 justify-content-start">
                                        <button type="button" disabled={cake.quantity === 1} className="btn btn-light" onClick={() => { this.reducequantity(index) }} >-</button>
                                        <button type="button" className="btn btn-light">{cake.quantity}</button>
                                        <button type="button" className="btn btn-light" onClick={() => { this.addquantity(index) }}>+</button>
                                    </div>
                                    <div className="col-2 ">
                                        <button type="button" className=" btn btn-secondary" onClick={() => { this.removefromcart(index) }}>remove </button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                )
            } else {
                return <h3>Your cart is empty</h3>
            }

        }
    }

    render() {
        return (
            <div className="row mt-3 h-100 mb-3 d-flex justify-content-around ">
                <div className="col-8">
                    <div className="card m-3">
                        <div className="card-header d-flex justify-content-between">
                            <h4> My Cart</h4>
                        </div>
                        <div className="card-body">
                            {
                                this.loadcartArray()
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="card m-3 mt-5" >
                        <div className="card-body">
                            <h5 className="card-title">PRICE DETAILS</h5>
                            <hr />
                            <div className="row d-flex justify-content-around">
                                <div className="col-6 "> <h6>Price ({this.props.cartcount})</h6> </div>
                                <div className="col-6  ">
                                    <div className="col-12 d-flex justify-content-around">
                                        <h5 className=" float-right ml-5 ">&#x20b9; </h5>
                                        <h5 className=" float-right mr-5 ">{this.gettoatalprize()}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-around">
                                <div className="col-6"> <h6>Discount</h6> </div>
                                <div className="col-6 ">
                                    <div className="col-12 d-flex justify-content-around">
                                        <h5 className="float-right ml-5">&#x20b9;</h5>
                                        <h5 className="float-right mr-5">0.0</h5>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div>
                                <div className="row d-flex justify-content-around">
                                    <div className="col-6"><h5>Total Payable</h5> </div>
                                    <div className="col-6 ">
                                        <div className="col-12 d-flex justify-content-around">
                                            <h5 className="float-right ml-5">&#x20b9;</h5>
                                            <h5 className="float-right mr-5">{this.gettoatalprize()}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Link to="/ordersummary"><button className="btn btn-primary ml-5" >Procced to Pay </button></Link>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cartArray: state.cartarray,
        cartcount: state.cartcount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getcartdetails: () => {
            dispatch(getcartitems())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)







