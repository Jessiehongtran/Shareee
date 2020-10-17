import React from 'react';
import '../styles/profile.scss'

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
                    <a href="#">Books</a>
                    <a href="#">Movies</a>
                    <a href="#">Musics</a>
               </div>
            </div>
        )
    }
}