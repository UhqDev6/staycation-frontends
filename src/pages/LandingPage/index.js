import React, {Component} from 'react'
import Header from "partials/Header";
import Hero from 'partials/Hero';

import landingPage from "json/landingPage.json";

export default class index extends Component {
    render(){
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero}/>
            </>
        );
    }
}
