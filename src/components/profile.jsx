import React from 'react';
import '../styles/profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        return (
            <div className="profile">
               <img src="https://i.dlpng.com/static/png/6837968_preview.png" alt="profile image" className="profile_image"/>
               <h3 className="header">Your library</h3>
               <p className="name">Your name</p>
               <div className="menu">
                    <Link className="each-session" to="/books">
                        <FontAwesomeIcon 
                            icon={faBook} 
                            className="icon"
                        />
                        Books
                    </Link>
                    <Link className="each-session" to="/movies">
                        <FontAwesomeIcon 
                            icon={faFilm} 
                            className="icon"
                        />
                        Movies
                    </Link>
                    <Link className="each-session" to="/musics">
                        <FontAwesomeIcon 
                            icon={faMusic} 
                            className="icon"
                        />
                        Musics
                    </Link>
               </div>
            </div>
        )
    }
}