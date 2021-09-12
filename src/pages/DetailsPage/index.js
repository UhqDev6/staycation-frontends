import React, { Component } from 'react'
import Header from "components/partials/Header";
import PageDetailsTitle from "components/partials/PageDetailsTitle";
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
            </>
        );
    }
}
