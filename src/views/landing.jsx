import React from 'react';
import '../styles/landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faMusic } from '@fortawesome/free-solid-svg-icons';

export default class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        console.log('props in landing', this.props)
        return (
            <div className="landing">
                <div className="categories">
                    <div className="each_cate" onClick={() => this.props.history.push('/books')}>
                        <FontAwesomeIcon 
                            icon={faBook} 
                            className="icon"
                        />
                        <h1 className="category_name">Book</h1>
                    </div>
                    <div className="each_cate" onClick={() => this.props.history.push('/movies')}>
                        <FontAwesomeIcon 
                            icon={faFilm} 
                            className="icon"
                        />
                        <h1 className="category_name">Movie</h1>
                    </div>
                    <div className="each_cate" onClick={() => this.props.history.push('/musics')}>
                        <FontAwesomeIcon 
                            icon={faMusic} 
                            className="icon"
                        />
                        <h1 className="category_name">Music</h1>
                    </div>
                </div>
            </div>
        )
    }
}