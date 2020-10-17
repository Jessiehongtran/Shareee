import React from 'react';
import { books } from '../data/books';
import Table from '../components/table';
import Nav from '../components/nav';
import Profile from '../components/profile';
import '../styles/books.scss'

export default class Books extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="books">
                <Nav />
                <div className="main-container">
                    <div className="profile-container">
                        <Profile />
                    </div>
                    <div className="info-container">
                        <h1 className="page-title">Books</h1>
                        <div className="content-table">
                            <Table data={books}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}