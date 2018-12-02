import React from 'react';
import ProductTitle from './productitle';
import ProductDescription from './productdescription';
import ProductImage from './productimage';
import PurchaseButton from './purchasebutton';
import {Link} from 'react-router-dom'


const DisplayProduct = (PropertiesFromMapping) =>{
        return (
            <div className="ba b--black-20 ma3 z-0">
                <Link className="no-underline" to={`/store/${PropertiesFromMapping.InternalKey}`}>
                        <ProductImage ImagePassed={PropertiesFromMapping.ImagePassed}/>
                        <ProductTitle TitlePassed={PropertiesFromMapping.TitlePassed}/>
                        <ProductDescription DescriptionPassed={PropertiesFromMapping.DescriptionPassed}/>
                </Link>
                <PurchaseButton PurchaseLinkPassed={PropertiesFromMapping.PurchaseLinkPassed}/>
            </div>
        );
}
export default DisplayProduct;
