// parent component for courses
import React, { Component } from 'react';
import Courseform from './components/CourseForm';

class Coursepage extends Component {
    state = {  }
    render() { 
        return (
            <Courseform />
        );
    }
}
 
export default Coursepage;