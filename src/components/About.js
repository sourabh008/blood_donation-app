import React from 'react'
import "../App.css"
function About() {
    return (
        <div className="about-main">
      
      
      <h2 textAlign="center">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src='https://picsum.photos/200/200' alt="Jane" />
            <div class="container">
              <h2>Sourabh kamboj</h2>
              <p>sourabhkamboj247@gmail.com</p>
              <p><a href="mailto:sourabhkamboj247@gmail.com" target="_blank" rel="noopener noreferrer"><button class="button" >Contact via email</button></a></p>
            </div>
            </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src='https://picsum.photos/200/200' alt="Mike" />
            <div class="container">
              <h2>Ujjwal Goel</h2>
              <p>ujjwal@example.com</p>
              <p><button class="button">Contact via email</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src='https://picsum.photos/200/200' alt="John" />
            <div class="container">
              <h2>Prajjwal</h2>
             <p>prajjawal@example.com</p>
              <p><button class="button">Contact via email</button></p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default About
