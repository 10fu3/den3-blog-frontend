import {NextPage} from "next";
import Header from "../Header";
import React from "react";
import Footer from "../Footer";

const ExternalPage:NextPage = (props)=>{
    return <div style={{backgroundColor:"#f1f1f1"}}>
        <Header/>
        {props.children}
        <Footer/>
    </div>
}

export default ExternalPage
