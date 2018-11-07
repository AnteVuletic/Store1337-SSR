import React from 'react';
import DisplayProduct from './displayproduct';
import Masonry from 'react-masonry-css';
import SearchBox from './searchbox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from "../../actions/productAction";

class ProductMapping extends React.Component{
    componentDidMount() {
        this.props.fetchProducts();
    }

/*  onSearchChange = (event) => {
        this.setState({
            searchFieldProduct: event.target.value
        })

    };
*/
    render(){
                const displayProducts = this.props.products.map( productListFetchedFromWp =>{
                           return(<DisplayProduct key={productListFetchedFromWp.slug}
                                            InternalKey = {productListFetchedFromWp.slug}
                                            ImagePassed={productListFetchedFromWp.images[0].src}
                                            TitlePassed={productListFetchedFromWp.name}
                                            DescriptionPassed={productListFetchedFromWp.description}
                                            PurchaseLinkPassed={productListFetchedFromWp.external_url}
                            />
                           );
                    });
                return (
                        <div>
                            {/*<SearchBox searchChange={this.onSearchChange} /> */}
                            <Masonry breakpointCols={{default: 3}}
                                     className="flex w-80 center"
                                     columnClassName="mh1 mv4 center">
                                {displayProducts}
                            </Masonry>
                        </div>
                );
            }
}
ProductMapping.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array,
    match: PropTypes.object
};

const mapStateToProps = state =>({
    products: state.products.items
});

export default connect (mapStateToProps,{fetchProducts})(ProductMapping);
