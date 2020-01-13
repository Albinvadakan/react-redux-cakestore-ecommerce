import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getcartCount, signincheck } from '../../../store/actions/cakeaction'
import '../../../App.css';

class Nav extends Component {

    componentDidMount() {
        console.log(window.location.href);
        this.props.signinpagecheckup(window.location.href);
        this.props.getcartitems();
    }
    render() {
        return (
            <nav className="fixed-top header-default">
                <div className="col-12  d-flex justify-content-between  navbar-shadow">
                    <div className="col-5  navbar-brand">
                        <Link to="/cakelist"> <p className="storename">Cake Store</p></Link>
                    </div>
                    <div className="col-7 ">
                        {
                            !this.props.loginflag && <div className="row pt-3">
                                <div className="col-3 pt-1"></div>
                                <div className="col-3 pt-1"></div>
                                <div className=" col-3">
                                    <Link to="/cart">  <button className="btn btn-light ">
                                        <i className="fa fa-cart-arrow-down fa-2x"></i>
                                        {
                                            this.props.cartcount > 0 && <span className="badge badge-notify badgecolor">{this.props.cartcount}</span>
                                        }
                                    </button></Link>
                                </div>
                                <div className=" col-3 pr-2 d-flex justify-content-end ">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fas fa-user-circle fa-2x"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button">Profile</button>
                                            <button className="dropdown-item" type="button">Logout</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        );
    }
}


const mapStateToProps = state => {
    return {
        cartcount: state.cartcount,
        loginflag: state.loginpage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getcartitems: () => {
            dispatch(getcartCount())
        },
        signinpagecheckup: (url) => {
            dispatch(signincheck(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)

