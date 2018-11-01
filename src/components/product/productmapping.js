import React from 'react';
import Loading from '../loading/loadingscreen';
import DisplayProduct from './displayproduct';
import WooApi from 'woocommerce-api';
import Masonry from 'react-masonry-css';
import SearchBox from './searchbox';

class ProductMapping extends React.Component{
    constructor(propertiesPassed){
        super(propertiesPassed);
        this.state={
            errorFetchingProducts: null,
            productLoadingStatus: false,
            productListFetchedFromWp: [],
            searchFieldProduct: ''
        }
    }
    componentDidMount() {
        const WooCommerce = new WooApi({
            url: 'https://backend.store1337.com/',
            consumerKey: 'ck_6f9687bf6ba873d68acc49863197d636a6f38492',
            consumerSecret: 'cs_5674d242f725d3995d8e1031825173eb46f45a7b',
            wpAPI: true,
            version: 'wc/v2'
        });
        WooCommerce.getAsync('products').then((result) => {
            this.setState({
                productListFetchedFromWp: JSON.parse(result.toJSON().body),
                productLoadingStatus:true
            })
        });
    }
    onSearchChange = (event) => {
            this.setState({
                searchFieldProduct: event.target.value
            })

    }
    render() {
        const {errorFetchingProducts, productLoadingStatus, productListFetchedFromWp} = this.state;
        const filteredProductList = productListFetchedFromWp.filter( products => {
            return products.name.toLowerCase().includes(this.state.searchFieldProduct.toLowerCase());
        })
            if(errorFetchingProducts){
                return <div>Error: {errorFetchingProducts.message}</div>;
            }else if(!productLoadingStatus) {
                return <Loading/>;
            }else {
                const DisplayProductArray = filteredProductList.map( productListFetchedFromWp =>{
                    return(
                            <DisplayProduct key={productListFetchedFromWp.slug}
                                            InternalKey = {productListFetchedFromWp.slug}
                                            ImagePassed={productListFetchedFromWp.images[0].src}
                                            TitlePassed={productListFetchedFromWp.name}
                                            DescriptionPassed={productListFetchedFromWp.description}
                                            PurchaseLinkPassed={productListFetchedFromWp.external_url}
                            />
                    );
                })
                return (
                        <div>
                            <SearchBox searchChange={this.onSearchChange} />
                            <Masonry breakpointCols={{default: 3}}
                                     className="flex w-80 center"
                                     columnClassName="mh1 mv4 center">
                                {DisplayProductArray}
                            </Masonry>
                        </div>
                );
            }
    }
}

export default ProductMapping;
