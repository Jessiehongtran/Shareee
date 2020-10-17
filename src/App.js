import React from 'react';
import Landing from './views/landing';
import Category from './views/category';
import { books, movies, musics } from './data/category-data';
import Nav from './components/nav';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchVal: ""
    }

    this.updateSearchVal = this.updateSearchVal.bind(this)
  }

  updateSearchVal(val){
    this.setState({searchVal: val})
  }

  filterList(list){
    if (this.state.searchVal.length > 0){
      return list.filter(each => each.title.toLowerCase().includes(this.state.searchVal.toLocaleLowerCase()))
    }
    else {
      return list
    }
  }

  render(){
    console.log('searchVal', this.state.searchVal)

    return (
      <div className="App">
        <Route 
          exact path="/"
          render = {
            props => {
              return (
                <Landing {...props} />
              )
            }
          }
        />
        <Route 
          exact path="/books"
          render = {
            props => {
              return (
                <>
                  <Nav 
                    searchVal={this.state.searchVal} 
                    updateSearchVal = {this.updateSearchVal}
                  />
                  <Category {...props} name="Books" data={this.filterList(books)}/>
                </>
              )
            }
          }
        />
        <Route 
          exact path="/movies"
          render = {
            props => {
              return (
                <>
                  <Nav 
                    searchVal={this.state.searchVal}
                    updateSearchVal = {this.updateSearchVal}
                  />
                  <Category {...props} name="Movies" data={this.filterList(movies)}/>
                </>
              )
            }
          }
        />
        <Route 
          exact path="/musics"
          render = {
            props => {
              return (
                <>
                  <Nav 
                    searchVal={this.state.searchVal}
                    updateSearchVal = {this.updateSearchVal}
                  />
                  <Category {...props} name="Musics" data={this.filterList(musics)}/>
                </>
              )
            }
          }
        />
      </div>
    );
  }
}

export default App;
