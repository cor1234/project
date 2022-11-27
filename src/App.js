//import logo from './logo.svg';
import './App.css';

import {useState} from "react";
function App() {
  const [cards]=useState([
    {
      title: 'All India Senior Ranking Badmintion',
      text:(
        <p>
          Tournament
          <br/>Final<br/>v/s<br/>
          <p><img src='./f.png'/> 9-21,21-10,21-15   <img src='./f.png'/> </p>
          <img src='./logo_white.png'/>
        </p>
        
      ),
    },
    {
      title: 'All India Senior Ranking Badmintion',
      text:(
        <p>
          Tournament
          <br/>Final<br/>v/s<br/>
          <p><img src='./f.png'/> 9-21,21-10,21-15   <img src='./f.png'/> </p>
          <img src='./logo_white.png'/>
        </p>
        
      ),
      
    },
    {
      title: 'All India Senior Ranking Badmintion',
      text:(
        <p>
          Tournament
          <br/>Final<br/>v/s<br/>
          <p><img src='./f.png'/> 9-21,21-10,21-15   <img src='./f.png'/> </p>
          <img src='./logo_white.png'/>
        </p>
        
      ),
    },
    {
      title: 'All India Senior Ranking Badmintion',
      text:(
        <p>
          Tournament
          <br/>Final<br/>v/s<br/>
          
           <p><img src='./f.png'/> 9-21,21-10,21-15   <img src='./f.png'/> </p>
          
           <img src='./logo_white.png'/>
        </p>
        
      ),
    },
    {
      title: 'All India Senior Ranking Badmintion',
      text:(
        <p>
          Tournament
          <br/>Final<br/>v/s<br/>
          <p><img src='./f.png'/> 9-21,21-10,21-15   <img src='./f.png'/> </p>
          <img src='./logo_white.png'/>
        </p>
      ),
    },
    {
      title: 'All India Senior Ranking Badmintion',
      text:(
        <p>
          Tournament
          <br/>Final<br/>v/s<br/>
          <p><img src='./f.png'/> 9-21,21-10,21-15   <img src='./f.png'/> </p>
          <img src='./logo_white.png'/>
        </p>
        
      ),
    },
  ]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="header">
        <h1>International Matches</h1>
        <input type="text" className="search"placeholders="Search for Matches" ></input>
        <section>
          <div className="container">
            {/* <h1>Responsive Cards</h1> */}
            <div className="cards">
            {
              cards.map((card,i)=>(
                <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              ))
            }
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
