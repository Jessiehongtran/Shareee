import React from 'react';
import '../styles/nav.scss';
import Search from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        return (
            <div className="nav">
                <h1 className="logo">Shareee</h1>
                <div className="search-bar">
                    <Search/>
                </div>
                <button className="share-btn">
                    <FontAwesomeIcon 
                            icon={faPlus} 
                            className="icon"
                        />
                    Share
                </button>
            </div>
        )
    }
}