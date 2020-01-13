import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { emptycartcount } from '../../store/actions/cakeaction'

class Payment extends Component {

    componentDidMount() {

    }

    pay = () => {
        alert('Payment done successfully!!');
        const cartObj = { cartarray: [] };
        localStorage.setItem('cart', JSON.stringify(cartObj));
        this.props.emptycart();
        setTimeout(() => { this.props.history.push('/cakelist'); }, 1000);
    }

    render() {
        return (
            <div className="row mt-3 h-100 mb-3 d-flex justify-content-around ">
                <div className="card w-75  h-100 ">
                    <div className="card-body ">
                        <h3 className="text-center ">PAYMENT </h3>
                        <br />
                        <div className="row d-flex justify-content-around ">
                            <div className="col-4 ">
                                <h6 >Payment Options </h6>
                                <div className="card w-75" >
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><b>Card</b></li>
                                        <li className="list-group-item">UPI</li>
                                        <li className="list-group-item">Pay on delivery</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="card">
                                    <div className="card-header">
                                        Enter card details
                                     </div>
                                    <div className="card-body">

                                        <label >Card Number</label>
                                        <input type="text" className="form-control" name="cardnumber" placeholder="Card number" />
                                        <label >Expiry date</label>
                                        <div className="col-12 d-flex justify-content-start">
                                            <select className="form-control w-25 mr-2" name="expmonth">
                                                <option>01</option>
                                                <option>02</option>
                                                <option>04</option>
                                                <option>05</option>
                                                <option>06</option>
                                                <option>07</option>
                                                <option>08</option>
                                                <option>09</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </select>
                                            <select className="form-control w-25" name="expyear">
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2024</option>
                                                <option>2025</option>
                                                <option>2026</option>
                                                <option>2027</option>
                                                <option>2028</option>
                                                <option>2029</option>
                                                <option>2030</option>
                                            </select>
                                        </div>
                                        <label >CVV</label>
                                        <input type="password" className="form-control w-25" name="cvv" placeholder="CVV" />
                                        <div className="col-12 d-flex justify-content-end">
                                            <button type="button" className="btn btn-primary mt-3 w-25" onClick={this.pay} >Pay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        emptycart: () => {
            dispatch(emptycartcount())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)

