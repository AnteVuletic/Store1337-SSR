import React from 'react';

const BlogTitle = (propertyFromBlogCard) =>{
    return(
        <h1 dangerouslySetInnerHTML={{__html: propertyFromBlogCard.BlogTitle}} className='f2 bg-near-white br3 br--top black-60 mv0 pv2 ph3'></h1>
    );
}
export default BlogTitle;
