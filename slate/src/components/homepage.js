import React, { Component } from 'react';
import Navbar from "./navbar"
import boy from "./images/School_Two Color.svg"
import { Form } from "./HomePageScript"
import "./HomePage.css"


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
            
           
            <button id="signup" class="btn--show-modal" onClick={Form}>Sign Up Free</button>
    
            <button id="learnm">Learn More</button>
        </div>
        <div className="displaypic">
            <img src={boy} alt="boy"></img>
        </div>
    </div>


    <div>
  <div className="Signupform hidden">
    <button className="btn--close-modal">×</button>
    <h1>Sign Up</h1>
    <br />
    <form action className="form">
      <label htmlFor>
        First Name
      </label>
      <input type="text" />
      <label htmlFor>
        Last Name
      </label>
      <input type="text" />
      <label htmlFor>
        Email
      </label>
      <input type="email" />
      <button className="btn">Next step →</button>
    </form>
  </div>
  <div className="overlay hidden " />
</div>
      
            </div>
            
        );
    }
}

export default homepage;