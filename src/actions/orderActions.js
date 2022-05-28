import {CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS, FETCH_SUMMARY} from "../types";

export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({type: CREATE_ORDER, payload: data});
            localStorage.clear("cartItems");
            dispatch({type: CLEAR_CART});
        });
};
export const deleteProduct = (id, callback) => (dispatch) => {
    fetch("/api/deleteProducts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            callback(data)
        });
};

export const searchProduct = (keyword, callback) => (dispatch) => {
    fetch("/api/searchProduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            keyword
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            callback(data)
        });
};
export const clearOrder = () => (dispatch) => {
    dispatch({type: CLEAR_ORDER});
};
export const fetchOrders = () => (dispatch) => {
    fetch("/api/orders")
        .then((res) => res.json())
        .then((data) => {
            dispatch({type: FETCH_ORDERS, payload: data});
        });
};
export const fetchSummary = (callback) => (dispatch) => {
    fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
            callback(data)
            dispatch({type: FETCH_SUMMARY, payload: data});
        });
};
