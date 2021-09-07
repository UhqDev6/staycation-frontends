import React, {Component} from 'react'
import Header from "partials/Header";
import Hero from 'partials/Hero';
import MostPicket from 'partials/Mostpicket';
import Categories from 'partials/Categories';
import Testimonial from 'partials/Testimonial';

import landingPage from "json/landingPage.json";

export default class index extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render(){
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
                <MostPicket refMostPicked={this.refMostPicked} data={landingPage.mostPicked}></MostPicket>
                <Categories data={landingPage.categories}></Categories>
                <Testimonial data={landingPage.testimonial}></Testimonial>
            </>
        );
    }
}
