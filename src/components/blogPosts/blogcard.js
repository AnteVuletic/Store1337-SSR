import React from 'react';
import BlogTitle from './blogtitle';
import BlogInfo from './bloginfo';
import BlogPost from './blogpost';

const BlogCard = (propertiesFromBlogMappingScope) =>{
    return(
        <div className="center mw9 br3 hidden ba b--black-10 mv4 ">
            <BlogTitle BlogTitle={propertiesFromBlogMappingScope.BlogTitle}/>
            <BlogInfo BlogInfo ={propertiesFromBlogMappingScope.BlogPostDate}/>
            <BlogPost BlogPost = {propertiesFromBlogMappingScope.BlogPost}/>
        </div>
    );
}
export default BlogCard;
