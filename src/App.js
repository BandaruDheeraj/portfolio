import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Welcome to My Portfolio</h1>
                <p>A showcase of my work</p>
            </header>
            <main className="content">
                <div className="project">
                    <h2>Project 1</h2>
                    <p>Description of Project 1</p>
                </div>
                <div className="project">
                    <h2>Project 2</h2>
                    <p>Description of Project 2</p>
                </div>
                {/* Add more projects as needed */}
            </main>
            <div className="contact-form">
              <h2>Contact Me</h2>
              <form action="http://localhost:5000/contact" method="post">
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message:
                  <textarea name="message" required></textarea>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
        </div>
    );
}

export default App;