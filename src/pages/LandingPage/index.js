import React, {Component} from 'react'
import Header from "components/partials/Header";
import Hero from 'components/partials/Hero';
import MostPicket from 'components/partials/Mostpicket';
import Categories from 'components/partials/Categories';
import Testimonial from 'components/partials/Testimonial';
import Footer from 'components/partials/Footer';

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
                <Footer></Footer>
            </>
        );
    }
}
