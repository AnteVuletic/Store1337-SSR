import React from 'react';
import {NavLink} from 'react-router-dom';

class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            toggleList: false
        }
    }
    toggleListState = () =>{
        this.setState(prev =>({
            toggleList: !prev.toggleList
        }))
    }
    render(){
        const {toggleList} = this.state;
        return (
            <div>
                <p>
                    <NavLink className="noTextDec" to={`/${this.props.SentText.toLowerCase()}/`}><span className="link dim white mr3">{this.props.SentText}</span></NavLink>
                    <span className="link dim white mr3" onClick={this.toggleListState}> | ##</span>
                </p>
                <div className="bg-black absolute">
                {toggleList && this.props.SentCategories.map((categories,i) => {
                    return (<NavLink className="noTextDec" to={`/${this.props.SentText.toLowerCase()}/${categories.toLowerCase()}/`}><span key={i} className="link dim white pa3 dib">{categories}</span></NavLink>);
                    })}
                </div>
            </div>
        );
    }
}
export default DropDown;
