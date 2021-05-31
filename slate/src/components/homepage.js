import React, { Component } from 'react';
import Navbar from "./navbar"
import boy from "./images/School_Two Color.svg"
import navbar from "./navbarcss.css"
class homepage extends Component {


    render() {
        return (
            
            <div>
                <Navbar/>
                <div className="display">
        <div className="content">
            <p>KEEP STUDYING HARD

            </p>
            <h3>Preparation examination</h3>
            <h5>Famous teachers gives lectures, say goodbyes to rote memorization, improve grades more efficiently, 1-0n-1 Q&amp;A after className, the course only costs 9 yuan</h5>
            <button id="signup">Sign Up Free</button>
            <button id="learnm">Learn More</button>
        </div>
        <div className="displaypic">
            <img src={boy} alt="boy"></img>
        </div>
    </div>



      
            </div>
            
        );
    }
}

export default homepage;