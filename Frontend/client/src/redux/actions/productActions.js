import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

const URL = "http://localhost:7000";

export const getProducts = () => async (dispatch) => {
    try {
        // Make the GET request to fetch products
        const response = await axios.get(`${URL}/products`);
        const { data } = response;

        // Dispatch action on success with the fetched data
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        // Handle errors
        if (error.response) {
            // Request was made and server responded with a status code that falls out of the range of 2xx
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response.data });
        } else if (error.request) {
            // Request was made but no response was received
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: 'No response from server' });
        } else {
            // Something else happened while setting up the request that triggered the error
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
        }
    }
};
