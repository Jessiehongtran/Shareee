import React from 'react';
import '../styles/table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../apiConfig';
import Axios from 'axios';

export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }

    isValidUrl(string) {
        try {
          new URL(string);
        } catch (_) {
          return false;  
        }
      
        return true;
      }

    getDateOnly(timeString){
        for (let i = 0; i< timeString.length; i++){
            if (timeString[i] === 'T'){
              return timeString.slice(0,i)
            }
          }
        return timeString
    }

    render(){       

        return (
            <div className="table_container">
                <table>
                    <tr>
                        {this.props.data[0] 
                        ? (Object.keys(this.props.data[0])).map(header => <th>{header}</th>)
                        : null}
                    </tr>
                    {this.props.data 
                    ? this.props.data.map((thing,i) => 
                            <tr className="each-row">
                                {Object.values(thing).map((content, j) => 
                                <td>
                                    {(Object.keys(this.props.data[0]))[j] == "likes" 
                                    ? <a
                                        className="like-emoji"
                                        href="#"
                                        onClick={() => this.props.updateLike(thing.id, thing.likes)}
                                      >👍</a>
                                    : null}
                                    {this.isValidUrl(content) 
                                    ? <a href={content}> 
                                        <FontAwesomeIcon 
                                            icon={faExternalLinkAlt} 
                                            className="icon"
                                        />
                                      </a> 
                                    : (Object.keys(this.props.data[0]))[j] == "created_at" 
                                        ? <p className="content">{this.getDateOnly(content)}</p>
                                        : <p className="content">{content}</p>}
                                </td>)}
                            </tr>
                        )
                    : null
                    }
                </table>
            </div>
        )
    }
}