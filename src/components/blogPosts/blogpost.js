import React from 'react';

const BlogPost =(PropertiesFromBlogCard) =>{
    return(
        <p dangerouslySetInnerHTML={{__html: PropertiesFromBlogCard.BlogPost}} className="f5 f4-l lh-copy athela ma5" />
    );
}
export default BlogPost;
