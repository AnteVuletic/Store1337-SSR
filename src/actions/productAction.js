import { FETCH_PRODUCTS } from './types';
import WooApi from "woocommerce-api";

export const fetchProducts = () => dispatch =>{
    console.log("Product action")
    const WooCommerce = new WooApi({
        url: 'https://backend.store1337.com/',
        consumerKey: 'ck_6f9687bf6ba873d68acc49863197d636a6f38492',
        consumerSecret: 'cs_5674d242f725d3995d8e1031825173eb46f45a7b',
        wpAPI: true,
        version: 'wc/v2'
    });
    WooCommerce.getAsync('products').then((result) => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: JSON.parse(result.toJSON().body)
        })
    });

};
