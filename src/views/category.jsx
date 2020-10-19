import React from 'react';
import Table from '../components/table';
import Profile from '../components/profile';
import '../styles/category.scss'

export default class Category extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="wrapper">
                <div className="main-container">
                    <div className="profile-container">
                        <Profile />
                    </div>
                    <div className="info-container">
                        <h1 className="page-title">{this.props.name}</h1>
                        <div className="content-table">
                            <Table 
                                data={this.props.data}
                                updateLike={this.props.updateLike}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}