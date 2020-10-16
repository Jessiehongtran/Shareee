import React from 'react';
import { musics } from '../data/musics';
import Table from '../components/table';

export default class Musics extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="musics">
                <h1>Musics</h1>
                <Table data={musics}/>
            </div>
        )
    }
}