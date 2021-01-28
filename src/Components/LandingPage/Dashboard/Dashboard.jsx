import React from 'react';
import { connect } from 'react-redux';
import getProducts from '../../../store/actions/products';


const Dashboard = (props) => {
    console.log(props)
    return (
        <div>
            <p>Dashboard works</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)