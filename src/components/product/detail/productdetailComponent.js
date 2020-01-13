import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../../App.css';
import cakeimg from '../../../img/cake2.jpg';
import { getcakedetails, getcakeprize, addtocart } from '../../../store/actions/cakeaction'

class Detail extends Component {

    componentDidMount() {
        this.props.loadcakedetails(this.props.match.params.id);
        this.props.loadcakeprize('1KG', this.props.match.params.id)
    }
    cakeweighthange = (e) => {
        this.props.loadcakeprize(e.target.value, this.props.match.params.id)
    }

    addtocart = () => {
        const cakeobj = {};
        cakeobj['Name'] = this.props.cakeObj.cake_basic.Name;
        cakeobj['id'] = this.props.cakeObj.cake_basic.id;
        cakeobj['prize'] = this.props.cakeprize;
        cakeobj['totalprize'] = this.props.cakeprize;
        cakeobj['quantity'] = 1;
        cakeobj['weight'] = this.props.cakeweight;
        this.props.additemTocart(cakeobj);
        alert('Item added to cart');
        this.props.loadcakedetails(this.props.match.params.id);
    }

    buynow = () => {
        const cakeobj = {};
        cakeobj['Name'] = this.props.cakeObj.cake_basic.Name;
        cakeobj['id'] = this.props.cakeObj.cake_basic.id;
        cakeobj['prize'] = this.props.cakeprize;
        cakeobj['totalprize'] = this.props.cakeprize;
        cakeobj['quantity'] = 1;
        cakeobj['weight'] = this.props.cakeweight;
        this.props.additemTocart(cakeobj);
        this.props.history.push('/cart');
    }

    goTocart = () => {
        this.props.history.push('/cart');
    }

    checkcart() {
        const cartArr = JSON.parse(localStorage.getItem("cart"));
        let existflag;
        existflag = false;
        if (cartArr !== null) {
            for (let i = 0; i < cartArr['cartarray'].length; i++) {
                if (this.props.match.params.id === cartArr['cartarray'][i]['id'] && this.props.cakeweight === cartArr['cartarray'][i]['weight']) {
                    existflag = true
                }
            }
        } else {
            existflag = false
        }
        return existflag;
    }

    render() {
        return (
            <div className="row mt-3 h-100 mb-3 d-flex justify-content-around ">
                <div className="card w-75  h-100 ">
                    <div className="card-body ">
                        {
                            this.props.cakeObj.cake_basic && <div className="row">
                                <div className="col-5 ">
                                    <img src={cakeimg} width="180px" className="card-img-top pt-1 border h-75" alt="cake" />
                                    <div className="row d-flex justify-content-around pt-3">
                                        <button onClick={this.buynow} className="btn btn-primary ml-5" >{this.props.cakeObj.cake_avilablity.available ? 'BUY NOW' : 'NOT AVAILABLE'}</button>
                                        <button disabled={!this.props.cakeObj.cake_avilablity.available} onClick={this.checkcart() ? this.goTocart : this.addtocart} className="btn btn-primary mr-5">{this.checkcart() ? 'GO TO CART' : 'ADD TO CART'}</button>
                                    </div>
                                </div>
                                <div className="col-7 mt-5">
                                    <br />
                                    <h3>{this.props.cakeObj.cake_basic.Name}</h3>
                                    <h5 className="pt-3">Prize</h5>
                                    <div className="d-flex justify-content-start mt-3">
                                        <br />
                                        <br />
                                        <h4> &#x20b9; {this.props.cakeprize} &nbsp;</h4>
                                        <select onChange={this.cakeweighthange.bind(this)} className="form-control w-25">
                                            {this.props.cakeObj.cake_prize.map(item => {
                                                return (<option key={item} value={item}>{item}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <br />
                                    <p className="pt-3"> {this.props.cakeObj.cake_details.description}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cakeObj: state.cakedetails,
        cakeprize: state.cakeprize,
        cakeweight: state.cakeweight
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadcakedetails: (cakeId) => {
            dispatch(getcakedetails(cakeId))
        },
        loadcakeprize: (weight, cakeId) => {
            dispatch(getcakeprize(weight, cakeId))
        },
        additemTocart: (cakeobj) => {
            dispatch(addtocart(cakeobj))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)








