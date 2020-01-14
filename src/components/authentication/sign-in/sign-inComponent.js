import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../../App.css';
import { signincheck } from '../../../store/actions/cakeaction'

class Login extends Component {



    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        this.props.signinpagecheckup(window.location.href);
    }



    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    simplelogin = (e) => {
        e.preventDefault();
        if (this.state.username !== '' && this.state.password !== '') {
            if (this.state.username === 'Albin' && this.state.password === 'thbs123') {
                localStorage.setItem('loggenIn', true);
                this.props.history.push('/deliveryaddress');
            }
        }
    }


    render() {
        return (
            <div className="container d-flex align-items-center justify-content-center ">
                <div className="card w-50 login-bag" >
                    <div className="card-body ">
                        <h5 className="text-center"><b>CAKE STORE</b></h5>
                        <div className="d-flex justify-content-center ">
                            <form className="w-75" onSubmit={this.simplelogin}>
                                <div className="form-group w-100  ">
                                    <input type="text" className="form-control " placeholder="User name" name='username' value={this.state.username} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="form-group w-100">
                                    <input type="password" className="form-control" name='password' placeholder="Password" value={this.state.password} onChange={this.onChange.bind(this)} />
                                </div>
                                <br />
                                <div className="form-group d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary" >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        loginflag: state.loginpage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signinpagecheckup: (url) => {
            dispatch(signincheck(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)








