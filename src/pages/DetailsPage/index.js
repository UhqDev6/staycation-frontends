import React, { Component } from 'react'
import Header from "components/partials/Header";
import PageDetailsTitle from "components/partials/PageDetailsTitle";
import FeaturedImage from "components/partials/FeaturedImage";
import PageDetailsDesc from "components/partials/PageDetailsDescription";
import BookingForm from "components/partials/BookingForm";
import ItemDetails from "json/itemDetails.json";
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
                >
                </PageDetailsTitle>
                <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailsDesc data={ItemDetails}></PageDetailsDesc>
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={ItemDetails}></BookingForm>
                        </div>
                    </div>
                </section>
                
            </>
        );
    }
}
