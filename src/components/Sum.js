import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteProduct, fetchSummary, searchProduct} from "../actions/orderActions";
import {fetchProducts} from "../actions/productActions"
import formatCurrency from "../util";

class Sum extends Component {

    constructor() {
        super();
        this.state = {
            orders: [],
            keyword: ''
        }
    }

    componentDidMount() {
        this.props.fetchSummary((res) => {
            this.setState({
                orders: res
            })
        });
    }

    deleteClick(id) {
        this.props.deleteProduct(id, (res) => {
            alert(res.message)
            let orders = []
            for (let i = 0; i < this.state.orders.length; i++) {
                let row = this.state.orders[i];
                if (row._id != id) {
                    orders.push(row)
                }
            }
            this.setState({
                orders
            })
        })
    }

    searchProduct() {
        this.props.searchProduct(this.state.keyword, (res) => {
            this.setState({
                orders: res
            })
        })
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const orders = this.state.orders;
        return !orders || orders == null ? (
            <div>Orders</div>
        ) : (
            <div className="orders">
                <h2>Stock Summary</h2>
                <div>
                    <ul>
                        <li><input type="text" placeholder="Enter item's title" name="keyword"
                                   required
                                   onChange={this.handleInput}/></li>
                        <li><a href="javascript:;" className="search" onClick={this.searchProduct.bind(this)}>Search</a></li>
                    </ul>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr>
                            <td>{order._id}</td>
                            <td>{order.title}</td>
                            <td> {formatCurrency(order.price)}</td>
                            <td>{order.countInStock}</td>
                            <td>
                                <a href="javascript:;" onClick={this.deleteClick.bind(this, order._id)}>DELETE</a>
                            </td>
                            <td>
                                <a href={"/update/" + order._id} onClick={() => fetchProducts(order)}>UPDATE</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        // orders: state.order.orders,
    }),
    {
        fetchSummary,
        deleteProduct,
        searchProduct
    }
)(Sum);
