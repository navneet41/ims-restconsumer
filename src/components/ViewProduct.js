import React, {Component} from "react";

import ProductService from "../service/ProductService";

export default class ViewProduct extends Component{

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render(){
        return(
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Id: </label>
                            <div> { this.state.product.id }</div>
                        </div>
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.product.name }</div>
                        </div>
                        <div className = "row">
                            <label> Product Brand: </label>
                            <div> { this.state.product.brand }</div>
                        </div>
                        <div className = "row">
                            <label> Product MadeIn: </label>
                            <div> { this.state.product.madein }</div>
                        </div>
                        <div className = "row">
                            <label> Product Price: </label>
                            <div> { this.state.product.price }</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}