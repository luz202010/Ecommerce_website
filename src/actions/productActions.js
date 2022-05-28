import {CLEAR_PRODUCT, FETCH_PRODUCTS} from "../types";
import {FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types";
import {CREATE_PRODUCT} from "../types";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    });
};

export const getProducts = (id, callback) => async (dispatch) => {
    fetch("/api/getProject", {
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

export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items:
                size === ""
                    ? products
                    : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
        },
    });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest"
                ? a.price > b.price
                    ? 1
                    : -1
                : a.price > b.price
                    ? -1
                    : 1
        );
    }
    console.log(sortedProducts);
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        },
    });
};

/* Create new product */

export const createProduct = (product) => (dispatch) => {
    fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({type: CREATE_PRODUCT, payload: data});
        });
};

export const clearProduct = () => (dispatch) => {
    dispatch({type: CLEAR_PRODUCT});
};
