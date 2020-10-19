import React from 'react';
import '../styles/nav.scss';
import Search from './search';
import Share from '../views/share';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seen: false
        }

        this.toggleSharePage = this.toggleSharePage.bind(this)
    }

    toggleSharePage(){
        this.setState({seen: !this.state.seen})
    }

    render(){
        console.log('props in Nav', this.props)

        return (
            <div className="nav">
                <h1 className="logo">Shareee</h1>
                <div className="search-bar">
                    <Search updateSearchVal = {this.props.updateSearchVal} />
                </div>
                <button 
                    className="share-btn"
                    onClick={() => this.toggleSharePage()}
                >
                    Share
                </button>
                {this.state.seen
                ? <Share 
                    toggleSharePage={this.toggleSharePage} 
                    postItem = {this.props.postItem}
                  /> 
                : null}
            </div>
        )
    }
}