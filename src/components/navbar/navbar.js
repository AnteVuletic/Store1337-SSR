import React from 'react';
import ButtonNav from './buttonnav';
import wooApi from 'woocommerce-api';
import DropDown from './dropdown';

class navbar extends React.Component{
    constructor(propertiesPassedToNav){
        super(propertiesPassedToNav);
        this.state ={
            categoriesFetchedFromWp: [],
            errorFetchingCategories: null,
        }
    }

    componentDidMount(){
        const wooConnection = new wooApi({
            url: 'https://backend.store1337.com/',
            consumerKey: 'ck_6f9687bf6ba873d68acc49863197d636a6f38492',
            consumerSecret: 'cs_5674d242f725d3995d8e1031825173eb46f45a7b',
            wpAPI: true,
            version: 'wc/v2'
        });
        wooConnection.getAsync('products').then((result)=>{
            try{
            this.setState({
                categoriesFetchedFromWp: JSON.parse(result.toJSON().body),

            })}
            catch (error) {
                console.log(error);
                this.setState({
                    errorFetchingCategories: error
                })
            }
        });
    }
    filterCategoriesFromWp = () =>{
        let categoryList = [];
        this.state.categoriesFetchedFromWp.map(categoriesFetchedFromWp =>{
            if (categoryList.indexOf(categoriesFetchedFromWp.categories[0].name) === -1) {
                    categoryList.push(categoriesFetchedFromWp.categories[0].name);
                }
            })
        return categoryList;
    }


    render() {
            if(this.state.errorFetchingCategories){
                return (<div>Error fetching categories: {this.state.errorFetchingCategories}</div>)
            }else {
                return (
                    <div className="bg-black fixed w-100 ph3 pv1 pv2-ns ph4-m ph5-l top-0">
                        <div className="f6 fw6 ttu tracked flex">
                            <ButtonNav SentText={"Blog"}/>
                            <DropDown SentText={"Store"} SentCategories={this.filterCategoriesFromWp()}/>
                        </div>
                    </div>
                );
            }
    }
}
export default navbar;
