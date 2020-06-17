import React, { Component } from 'react';
import Singlecourse from './Singlecourse';

class Courses extends Component {
    render() { 
        return (
            <div>
                <div className="coursedisplay">
                    <Singlecourse />
                    <Singlecourse />
                    <Singlecourse />
                </div>
            </div>
        );
    }
}
 
export default Courses;