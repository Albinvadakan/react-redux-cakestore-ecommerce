import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { Link } from 'react-router-dom';
import { adddeliveryaddress, loaddeliveryaddress, signincheck } from '../../store/actions/cakeaction'

class Delevery extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            pincode: '',
            building: '',
            place: '',
            landmark: '',
            city: '',
            state: '',
            type: ''
        };
    }
    componentDidMount() {
        this.props.signinpagecheckup(window.location.href);
        this.props.loadaddress();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addnewAddress = (e) => {
        e.preventDefault();
        const addressObj = { name: this.state.name, phone: this.state.phone, pincode: this.state.pincode, building: this.state.building, place: this.state.place, landmark: this.state.landmark, city: this.state.city, state: this.state.state, type: this.state.type }
        this.props.adddaddress(addressObj);
        this.props.loadaddress();
        this.setState({
            name: '',
            phone: '',
            pincode: '',
            building: '',
            place: '',
            landmark: '',
            city: '',
            state: '',
            type: ''
        })
    }

    deliverToaddress = (index) => {
        this.props.history.push(`/payment`);
    }

    loadaddresstemplate() {
        return (
            this.props.deliveryaddressArr.map((address, i) => {
                return (
                    <div className="col-4" key={i}>
                        <div className="card w-75">
                            <div className="card-body">
                                <h5 className="card-title">{address.name}</h5>
                                <p className="card-text">{address.building}</p>
                                <p className="card-text">{address.place}, {address.city}</p>
                                <p className="card-text"> {address.state}, {address.pincode}</p>
                                <p className="card-text">India</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Link to="/payment"><button className="btn btn-primary ml-5" onClick={() => { this.addnewAddress('index') }} >Deliver to this address</button></Link>
                        </div>
                    </div>

                );
            })
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    {this.loadaddresstemplate()}
                </div>
                <div className="col-12 mt-5 mb-5">
                    <div className="card">
                        <div className="card-header">
                            Add new address
                         </div>
                        <div className="row card-body">
                            <div className="col-12  d-flex justify-content-between">
                                <div className="col-6 ">

                                    <label >Full Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.onChange.bind(this)} className="form-control" placeholder="Full Name" />

                                    <label >Pincode</label>
                                    <input type="text" name="pincode" value={this.state.pincode} onChange={this.onChange.bind(this)} className="form-control" placeholder="Pincode" />

                                    <label >City</label>
                                    <input type="text" name="city" value={this.state.city} onChange={this.onChange.bind(this)} className="form-control" placeholder="City" />

                                    <label >State</label>
                                    <input type="text" name="state" value={this.state.state} onChange={this.onChange.bind(this)} className="form-control" placeholder="State" />

                                    <label >Address type</label>
                                    <select className="form-control" value={this.state.type} onChange={this.onChange.bind(this)} name="type" >
                                        <option>Home</option>
                                        <option>Office /Commercial</option>
                                    </select>
                                </div>
                                <div className="col-6 ">

                                    <label >Phone number</label>
                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onChange.bind(this)} className="form-control" placeholder="Phone number" />

                                    <label >Flat / House / Building</label>
                                    <input type="text" name="building" value={this.state.building} onChange={this.onChange.bind(this)} className="form-control" placeholder="Flat / House / Building" />

                                    <label >Place</label>
                                    <input type="text" name="place" value={this.state.place} onChange={this.onChange.bind(this)} className="form-control" placeholder="Place" />

                                    <label >Lankmark</label>
                                    <input type="text" name="landmark" value={this.state.landmark} onChange={this.onChange.bind(this)} className="form-control" placeholder="Lankmark" />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center w-100">
                                <button type="button" onClick={this.addnewAddress} className="btn btn-primary mt-3" disabled={this.props.deliveryaddressArr.length > 2} title={this.props.deliveryaddressArr.length > 2 ? 'Maximum 3 address can be add' : ''}>Save address</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        );
    }
}


const mapStateToProps = state => {
    return {
        deliveryaddressArr: state.deliveraddress
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadaddress: () => {
            dispatch(loaddeliveryaddress())
        },
        adddaddress: (addressObj) => {
            dispatch(adddeliveryaddress(addressObj))
        },
        signinpagecheckup: (url) => {
            dispatch(signincheck(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Delevery)

