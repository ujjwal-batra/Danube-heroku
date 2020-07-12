// parent component for Home form
import React, { Component } from 'react';
import Homeform from './components/Homeform';

class Home extends Component {
    render() { 
        return (
            <div>
                <Homeform />
            </div>
        );
    }
}
 
export default Home;