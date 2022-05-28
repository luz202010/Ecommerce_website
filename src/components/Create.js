import React, {Component} from "react";
import {createProduct, clearProduct, getProducts} from "../actions/productActions"
import Modal from "react-modal";
import {connect} from "react-redux";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.id == undefined ? '' : this.props.id,
            title: "",
            price: "",
            countInStock: "",
            description: "",
            image: "",
            availableSizes: ""
        };
        if (this.state._id != '') {
            this.props.getProducts(this.state._id, (res) => {
                this.setState({
                    title: res.title,
                    price: res.price,
                    countInStock: res.countInStock,
                    description: res.description,
                    image: res.image,
                    availableSizes: res.availableSizes
                })
            })
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    createProduct = (e) => {
        e.preventDefault();
        const product = {
            _id: this.state._id,
            title: this.state.title,
            price: this.state.price,
            countInStock: this.state.countInStock,
            description: this.state.description,
            image: this.state.image,
            availableSizes: this.state.availableSizes,
        };
        this.props.createProduct(product);
    };
    closeModal = () => {
        this.props.clearProduct();
    };

    render() {
        const {product} = this.props;
        return (
            <div>
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <div className="summary">
                            <a href="/admin/create">CREATE MORE</a>
                            <a href="/admin">BACK TO ADMIN</a>
                        </div>
                        <div className="create">
                            <h3 className="success-message">New product has been placed.</h3>
                            <h2>Product ID  {product._d}</h2>
                            <ul>
                                <li>
                                    <div>Title: {product.title}</div>
                                </li>
                                <li>
                                    <div>Price: ${product.price}</div>
                                </li>
                                <li>
                                    <div>Stock: {product.countInStock}</div>
                                </li>
                                <li>
                                    <div>Description: {product.description}</div>
                                </li>
                                <li>
                                    <div>Sizes: {product.availableSizes}</div>
                                </li>
                            </ul>
                        </div>
                    </Modal>
                )}
                <div>
                    <div className="create">
                        <form onSubmit={this.createProduct}>
                            <ul className="form-container">
                                <li>
                                    <label>Title</label>
                                    <input
                                        defaultValue={this.state.title}
                                        name="title"
                                        type="title"
                                        required
                                        onChange={this.handleInput}
                                    ></input>
                                </li>
                                <li>
                                    <label>Price</label>
                                    <input
                                        defaultValue={this.state.price}
                                        name="price"
                                        type="price"
                                        required
                                        onChange={this.handleInput}
                                    ></input>
                                </li>
                                <li>
                                    <label>Stock</label>
                                    <input
                                        defaultValue={this.state.countInStock}
                                        name="countInStock"
                                        type="countInStock"
                                        required
                                        onChange={this.handleInput}
                                    ></input>
                                </li>
                                <li>
                                    <label>Description</label>
                                    <input
                                        defaultValue={this.state.description}
                                        name="description"
                                        type="description"
                                        required
                                        onChange={this.handleInput}
                                    ></input>
                                </li>
                                <li>
                                    <label>Sizes</label>
                                    <input
                                        defaultValue={this.state.availableSizes}
                                        name="availableSizes"
                                        type="availableSizes"
                                        required
                                        onChange={this.handleInput}
                                    ></input>
                                </li>
                                <li>
                                    <button className="button primary" type="submit">
                                        Submit
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        product: state.products.items,
    }),
    {createProduct, clearProduct, getProducts}
)(Create);