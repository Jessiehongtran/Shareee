import React from 'react';
import '../styles/profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faMusic, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: localStorage.getItem('username') !== null? localStorage.getItem('username') : "Your name",
            nameUpdated: false
        }

        this.updateName = this.updateName.bind(this)
        this.submitName = this.submitName.bind(this)
    }

    updateName(e){
        this.setState({
            name: e.target.value, 
            nameUpdated: true
        })
    }

    submitName(e){
        e.preventDefault()
        localStorage.setItem('username', this.state.name)
        this.setState({nameUpdated: false})
    }


    render(){
        //how to save username in localStorage

        return (
            <div className="profile">
               <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/048_girl_avatar_profile_woman_waiter_butler-512.png" alt="profile image" className="profile_image"/>
               <h3 className="header">Your library</h3>
               <div className="name">
                    <input 
                        className="name-input"
                        value={this.state.name}
                        onChange={this.updateName}
                    />
                    {this.state.nameUpdated 
                    ? <button onClick={(e) => this.submitName(e)}>Ok</button>
                    : <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                    />
                    }
                </div>
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