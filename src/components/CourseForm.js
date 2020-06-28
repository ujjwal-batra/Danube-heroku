import React, { Component } from 'react';
import Courses from './Courses'
class Courseform extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="container">
                <h1 className="header">DANUBE</h1>
                <div>
                    <form className="courseform">
                        <div>
                            <label>Country of origin</label>
                            <input type="text" />
                        </div>
                        
                        <div>
                            <label>Country of destination</label>
                            <input type="text" />
                        </div>

                        <div className='coloumn'>
                            <span>    
                                <label>gender</label>
                                <input type="text" />
                            </span>
                            <span>    
                                <label>Age</label>
                                <input type="text" />
                            </span>
                            <span>    
                                <label>Visa Type</label>
                                <input type="text" />
                            </span>
                        </div>
                    </form>
                </div>
                <div>
                    <Courses />
                </div>
            </div>
        );
    }
}
 
export default Courseform;