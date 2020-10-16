import React from 'react';
import { books } from '../data/books';
import Table from '../components/table';

export default class Books extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="books">
                <h1>Books</h1>
                <Table data={books}/>
            </div>
        )
    }
}