import React from 'react';
import BlogCard from './blogcard';
import LoadingScreen from '../loading/loadingscreen';
import { Link } from 'react-router-dom';
import './textDec.css';

class BlogMapping extends React.Component{
    constructor(propertyOfAppPrototype){
        super(propertyOfAppPrototype);
        this.state = {
            errorFromRequest: null,
            loadingStatusFromAPI: false,
            wordPressPosts: []
        };
    }
    componentDidMount(){
        fetch("https://backend.store1337.com/wp-json/wp/v2/posts")
            .then(responseFromWP => responseFromWP.json())
            .then(
                (wordPressPosts) => {
                    this.setState({
                        loadingStatusFromAPI: true,
                        wordPressPosts: wordPressPosts
                    });
                },(error) =>{
                    this.setState({
                        loadingStatusFromApi: true,
                        error,
                        errorFromRequest: error
                    });
                }
            )
    }
    render(){
        const { errorFromRequest,loadingStatusFromAPI,wordPressPosts } = this.state;
        if(errorFromRequest){
            return <div>Error : {errorFromRequest}</div>;
        }else if(!loadingStatusFromAPI){
            return <LoadingScreen/>;
        }else{
            return(
                wordPressPosts.map( wordPressPosts =>{
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
}

export default BlogMapping;
