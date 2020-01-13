import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { Link } from 'react-router-dom';
import { getcartitems } from '../../store/actions/cakeaction'

class Order extends Component {

    componentDidMount() {
        this.props.getcartdetails();
    }


    loadOrderItems() {
        if (this.props.cartArray) {
            return (
                this.props.cartArray.map((cake, index) => {
                    return (
                        <li key={index} className="list-group-item"><h5><b>{cake.Name}</b></h5>   <h6> {cake.weight} of {cake.quantity}  :: &#x20b9; {cake.totalprize}</h6> </li>
                    )
                })
            )
        }

    }


    loadbutton() {

        const loggedIn = localStorage.getItem('loggenIn');
        if (loggedIn) {
            console.log(`loggedIn inside if`);
            return (
                <Link to='/deliveryaddress'><button type="button" className="btn btn-primary mr-5" >Proceed</button></Link>
            )
        } else {
            return (
                <Link to='/login'><button type="button" className="btn btn-primary mr-5" >Proceed</button></Link>
            )
        }

    }

    render() {
        return (
            <div className="row mt-3 h-100 mb-3 d-flex justify-content-around ">
                <div className=" w-75  h-100 ">
                    <div className="col-12">
                        <div className="card mt-5">
                            <div className="card-header">
                                Order Summary
                                     </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush pr-3">
                                    {this.loadOrderItems()}
                                </ul>
                                <br />
                                <div className=" float-right ">
                                    {
                                        this.loadbutton()
                                    }
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
        cartArray: state.cartarray,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getcartdetails: () => {
            dispatch(getcartitems())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)

