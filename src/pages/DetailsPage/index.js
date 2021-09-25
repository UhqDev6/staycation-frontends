import React, { Component } from 'react'
import Header from "components/partials/Header";
import PageDetailsTitle from "components/partials/PageDetailsTitle";
import FeaturedImage from "components/partials/FeaturedImage";
import PageDetailsDesc from "components/partials/PageDetailsDescription";
import BookingForm from "components/partials/BookingForm";
import Categories from "components/partials/Categories";
import Testimonials from "components/partials/Testimonial";
import Footer from "components/partials/Footer";
import ItemDetails from "json/itemDetails.json";
import Fade from "react-reveal/Fade";
export default class index extends Component {
    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0,0);
    }

    render() {
        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "Houser Details", pageHref: ""}
        ];
        return (
            <>
                <Header {...this.props}/>
                <PageDetailsTitle 
                    breadcrumb={breadcrumb}
                    data={ItemDetails}
                />
                <FeaturedImage data={ItemDetails.imageUrls}/>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <Fade bottom>
                                <PageDetailsDesc data={ItemDetails}/>
                            </Fade>
                        </div>
                        <div className="col-5">
                            <Fade bottom>
                                <BookingForm itemDetails={ItemDetails}/>
                            </Fade>
                        </div>
                    </div>
                </section>
                <Categories data={ItemDetails.categories}/>
                <Testimonials data={ItemDetails.testimonial}/>
                <Footer/>
                
            </>
        );
    }
}
