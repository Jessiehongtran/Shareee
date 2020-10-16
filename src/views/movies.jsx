import React from 'react';
import { movies } from '../data/movies';
import Table from '../components/table'

export default class Movies extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="movies">
                <h1>Movies</h1>
                <Table data={movies}/>
            </div>
        )
    }
}