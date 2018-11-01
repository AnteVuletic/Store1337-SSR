import React from 'react';

const ProductDescription = (DescriptionPassed) =>{
    return (
        <p dangerouslySetInnerHTML={{__html: DescriptionPassed.DescriptionPassed}} className="f6 gray mv1 pa2"></p>
    );
}

export default ProductDescription;
