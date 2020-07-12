// courses card component
import React, { Component } from 'react';
import Singlecourse from './Singlecourse';

class Courses extends Component {
    render() { 
        return (
            <div>
                <div className="coursedisplay">
                    <Singlecourse />
                </div>
            </div>
        );
    }
}
 
export default Courses;