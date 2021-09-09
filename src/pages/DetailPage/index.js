import React, { Component } from 'react'
import InputNumber from 'atoms/inputnumber';
export default class index extends Component {
    state =  {
        value: "1"
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        <InputNumber
                            max={30}
                            suffix=" Night"
                            isSuffixPlural ="s"
                            name="value"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </div>
                </div>
            </div>
        );
    };
}
