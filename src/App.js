import React from 'react';
import logo from './logo.svg';
import './App.css';
import rp from 'request-promise';


class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
      this.fetch();
  }
  fetch = async () => {
    var cheerio = require('cheerio'); // Basically jQuery for node.js
 
var options = {
    uri: 'https://www.aliexpress.com/item/32915958876.html',
    transform: function (body) {
        return cheerio.load(body);
    }
};
 
rp(options)
    .then(function ($) {
      console.log($);
        // Process html like you would with jQuery...
    })
    .catch(function (err) {
      console.log(err)
        // Crawling failed or Cheerio choked...
    });
  }
  
  render(){
return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );}
}

export default App;
