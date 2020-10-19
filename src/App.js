import React from 'react';
import Landing from './views/landing';
import Category from './views/category';
import { books, movies, musics } from './data/category-data';
import Nav from './components/nav';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './apiConfig';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchVal: "",
      books: [],
      movies: [],
      musics: [],
    }

    this.updateSearchVal = this.updateSearchVal.bind(this)
    this.getItems = this.getItems.bind(this)
    this.postItem = this.postItem.bind(this)
    this.updateLike = this.updateLike.bind(this)
  }

  async getItems(){
    try {
      const resBooks = await axios.get(`${API_URL}/items/1`)
      this.setState({books: resBooks.data})
    } catch (err){
      console.error(err)
    }

    try {
      const resMovies = await axios.get(`${API_URL}/items/2`)
      this.setState({movies: resMovies.data})
    } catch (err){
      console.error(err)
    }
  
    try {
      const resMusics = await axios.get(`${API_URL}/items/3`)
      this.setState({musics: resMusics.data})
    } catch (err){
      console.error(err)
    }
  }

  componentDidMount(){
      this.getItems()
  }

  async updateLike(id, curLikes){
    try {
        const res = await axios.patch(`${API_URL}/items/${id}`, {likes: curLikes + 1})
        console.log(res.data)
        this.getItems()
    } catch (err){
        console.error(err)
    }
}

  async postItem(item){
    try {
        const res = await axios.post(`${API_URL}/items`, item)
        console.log(res.data)
        this.getItems()
    } catch (err){
        console.error(err)
    }
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
                    postItem = {this.postItem}
                  />
                  <Category 
                    {...props} 
                    name="Books" 
                    data={this.filterList(this.state.books)}
                    updateLike={this.updateLike}
                  />
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
                    postItem = {this.postItem}
                  />
                  <Category 
                    {...props} 
                    name="Movies" 
                    data={this.filterList(this.state.movies)}
                    updateLike={this.updateLike}
                  />
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
                    postItem = {this.postItem}
                  />
                  <Category 
                    {...props} 
                    name="Musics" 
                    data={this.filterList(this.state.musics)}
                    updateLike={this.updateLike}
                  />
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
