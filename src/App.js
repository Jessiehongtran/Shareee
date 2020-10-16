import React from 'react';
import Landing from './views/landing';
import Books from './views/books';
import Movies from './views/movies';
import Musics from './views/musics';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
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
              <Books {...props} />
            )
          }
        }
      />
      <Route 
        exact path="/movies"
        render = {
          props => {
            return (
              <Movies {...props} />
            )
          }
        }
      />
      <Route 
        exact path="/musics"
        render = {
          props => {
            return (
              <Musics {...props} />
            )
          }
        }
      />
    </div>
  );
}

export default App;
