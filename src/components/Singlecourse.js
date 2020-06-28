import React, { Component } from 'react';

class Singlecourse extends Component {
    render() { 
        return (
            <div>
                <div className="singlecourse">
                    <h1>Law and Order</h1>
                    <div>30 min <i className="far fa-clock"></i> </div>
                    <div>Test at the end</div>

                    <div><span className="star">&#9733;&#9733;&#9733;&#9733;&#9734; </span> Stars</div>
                    <div className="price">4.99$</div>
                    <div className="date">Last Updated: <span>09/2019</span> </div>
                </div>
                <div className="singlecourse">
                    <h1>Culture</h1>
                    <div>30 min <i className="far fa-clock"></i> </div>
                    <div>Test at the end</div>

                    <div><span className="star">&#9733;&#9733;&#9734;&#9734;&#9734; </span> Stars</div>
                    <div className="price">2.99$</div>
                    <div className="date">Last Updated: <span>09/2019</span> </div>
                </div>
                <div className="singlecourse">
                    <h1>Docs Checklist</h1>
                    <div>30 min <i className="far fa-clock"></i> </div>
                    <div>Test at the end</div>

                    <div><span className="star">&#9733;&#9733;&#9733;&#9734;&#9734; </span> Stars</div>
                    <div className="price">1.99$</div>
                    <div className="date">Last Updated: <span>09/2019</span> </div>
                </div>
            </div>
        );
    }
}
 
export default Singlecourse;