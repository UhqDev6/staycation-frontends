import React, {Component} from 'react'
import Header from "partials/Header";
export default class index extends Component {
    render(){
        return (
            <>
                <Header {...this.props}></Header>
            </>
        );
    }
}
