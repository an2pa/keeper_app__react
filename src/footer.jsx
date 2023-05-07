import React from 'react';
var newDate=new Date();
var year=newDate.getFullYear();

function Footer(){
    return ( <footer><p>Copyright {year}</p></footer> )
}

export default Footer;