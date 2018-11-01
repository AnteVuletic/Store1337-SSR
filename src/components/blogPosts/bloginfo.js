import React from 'react';

const BlogInfo = (propertiesFromBlogCard) =>{
    return(
        <div>
            <p className='f7 ba bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{propertiesFromBlogCard.BlogInfo} by Admin</p>
        </div>
    );
}
export default BlogInfo;
