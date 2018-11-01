import React from 'react';

const PurchaseButton = (LinkPassed) =>{
    return (
        <object><a href={LinkPassed.PurchaseLinkPassed} className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1 z-1">ExternalShop</a></object>
    );
}
export default PurchaseButton;
