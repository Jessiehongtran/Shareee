import React from 'react';
import '../styles/search.scss'

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.updateSearchVal(e.target.value)
    }

    render(){

        return (
            <div className="search">
               <input 
                 placeholder="Search title..."
                 onChange={this.handleChange}
               />
            </div>
        )
    }
}