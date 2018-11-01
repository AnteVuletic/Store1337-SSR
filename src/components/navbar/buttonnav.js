import React from 'react';
import {NavLink} from "react-router-dom";


const ButtonNav = (params) =>{
    return (
        <NavLink className="noTextDec" to={`/${params.SentText.toLowerCase()}/`}><p className="link dim white mr3">{params.SentText}</p></NavLink>
    );
}
export default ButtonNav;
