// single courses cards design component
import React, { Component } from 'react';

class Singlecourse extends Component {
    render() { 
        return (
            <div className="flexBox-courses">
                <div className="singlecourse">
                    <div class="product-card">
                        <div class="badge product-links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a> 
                        </div>
                        <div class="product-tumb">
                            <img src="https://image.flaticon.com/icons/svg/1301/1301175.svg" height="200px" />
                        </div>
                        <div class="product-details">
                            <h4><a href="">LAWS AND ORDER</a></h4>
                            <p><i className="fa fa-asterisk"/> Test at End <br/> Time duration <i class="fa fa-clock-o" /> : 30 min <br/> Last updated <i className="fa fa-calendar"/> : 02/2019</p>
                            <div className="product-bottom-details">
                                <div class="product-price">
                                    $4.99
                                </div>
                                <div class="product-links product-price">
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star-half-o"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="singlecourse">
                    <div class="product-card">
                        <div class="badge product-links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a> 
                        </div>
                        <div class="product-tumb">
                            <img src="https://angiegreaves.com/wp-content/uploads/2019/05/Diversity.png" height="200px" />
                        </div>
                        <div class="product-details">
                            <h4><a href="">CULTURE</a></h4>
                            <p><i className="fa fa-asterisk"/> Test at End <br/> Time duration <i class="fa fa-clock-o" /> : 30 min <br/> Last updated <i className="fa fa-calendar"/> : 12/2019</p>
                            <div className="product-bottom-details">
                                <div class="product-price">
                                    $2.99
                                </div>
                                <div class="product-links product-price">
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star-half-o"/>
                                    <i className="fa fa-star-o"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="singlecourse">
                    <div class="product-card">
                        <div class="badge product-links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a> 
                        </div>
                        <div class="product-tumb">
                            <img src="https://image.flaticon.com/icons/svg/2472/2472852.svg" height="200px"/>
                        </div>
                        <div class="product-details">
                            <h4><a href="">DOCS CHECKLIST</a></h4>
                            <p><i className="fa fa-asterisk"/> Test at End <br/> Time duration <i class="fa fa-clock-o" /> : 40 min <br/> Last updated <i className="fa fa-calendar"/> : 08/2019</p>
                            <div className="product-bottom-details">
                                <div class="product-price">
                                    $4.99
                                </div>
                                <div class="product-links product-price">
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star"/>
                                    <i className="fa fa-star-o"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Singlecourse;