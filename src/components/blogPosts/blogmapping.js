import React from 'react';
import BlogCard from './blogcard';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading/loadingscreen';
import { Link } from 'react-router-dom';
import './textDec.css';
import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/blogPostAction";

class BlogMapping extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
            return(
                this.props.posts.map( wordPressPosts =>{
                    if(this.props.match.params.slug === wordPressPosts.slug){
                        console.log(this.props.match)
                        return (<BlogCard key={wordPressPosts.slug}
                                          BlogTitle={wordPressPosts.title.rendered}
                                          BlogPost={wordPressPosts.content.rendered}
                                          BlogPostDate={wordPressPosts.date}
                        />);
                    }else{
                        return ( <Link className="noTextDec" to={`/blog/${wordPressPosts.slug}`}>
                            <BlogCard key={wordPressPosts.slug}
                                      BlogTitle={wordPressPosts.title.rendered}
                                      BlogPost={wordPressPosts.excerpt.rendered}
                                      BlogPostDate={wordPressPosts.date}/>
                        </Link>);
                    }
                })
        );
        }
}
BlogMapping.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
   posts: state.posts.items,
});

export default connect(mapStateToProps,{fetchPosts})(BlogMapping);
