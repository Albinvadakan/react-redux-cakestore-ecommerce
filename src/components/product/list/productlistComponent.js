import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../../App.css';
import Banner from '../../utility/banner/bannerComponent'
import cakeimg from '../../../img/cake2.jpg';
import { Link } from 'react-router-dom';
import { getcakes, loaddefaultdeliveryaddress } from '../../../store/actions/cakeaction'



class List extends Component {

    componentDidMount() {
        this.props.getcakes();
        this.props.loadaddress();
    }

    gotoDetais = (id) => {
        this.props.history.push(`/cakedetail/${id}`);
    }

    loadcakes() {
        return (
            this.props.cakeList.map((cake) => {
                return (
                    <div key={cake.id} className="card card-default col-2 m-4  pt-2  hvr-grow" onClick={() => { this.gotoDetais(cake.id) }} >
                        <Link to={`/cakedetail/${cake.id}`}> <img src={cakeimg} height="250px" width="180px" className="card-img-top pt-1 border" alt="cake" /></Link>
                        <div className="card-body">
                            <h5 className="card-text"><b>{cake.Name}</b> </h5>
                            <button className="btn btn-light ">
                                <p> <b>&#x20b9; {cake.price}</b></p>
                            </button>
                        </div>
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 border">
                    {/* <div className=" banner-image mt-2 "></div> */}
                    <Banner />
                </div>
                <div className="row mt-3 mb-3 d-flex justify-content-center mt-3">
                    {this.loadcakes()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cakeList: state.cakeslist
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getcakes: () => {
            dispatch(getcakes())
        },
        loadaddress: () => {
            dispatch(loaddefaultdeliveryaddress())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)







