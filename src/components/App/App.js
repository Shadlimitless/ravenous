import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import {Yelp} from '../../util/Yelp';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {businesses:[]};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    try{
      Yelp.search(
      term, location, sortBy
      ).then(businesses=>{
        console.log(typeof businesses);
        if(typeof businesses != 'undefined'){
          this.setState({businesses:businesses});
        }
        
      });
    } catch(error){
      console.log(error);
    }

  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }

}

export default App;
