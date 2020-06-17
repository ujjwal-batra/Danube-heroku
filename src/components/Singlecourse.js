import React, { Component } from 'react';

class Singlecourse extends Component {
    render() { 
        return (
            <div className="singlecourse">
                <h1>Law and Order</h1>
                <div>30 min <i className="far fa-clock"></i> </div>
                <div>Test at the end</div>

                <div>Stars</div>
                <div className="price">4.99$</div>
                <div className="date">Last Updated: <span>09/2019</span> </div>
            </div>
        );
    }
}
 
export default Singlecourse;