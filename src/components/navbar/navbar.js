import React from 'react';
import ButtonNav from './buttonnav';

class navbar extends React.Component{

    render(){
                return (
                    <div className="bg-black fixed w-100 ph3 pv1 pv2-ns ph4-m ph5-l top-0">
                        <div className="f6 fw6 ttu tracked flex">
                            <ButtonNav SentText={"Blog"}/>
                            <ButtonNav SentText={"Store"}/>
                        </div>
                    </div>
                );
            }
}

export default navbar;
