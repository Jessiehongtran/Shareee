import React from 'react';
import '../styles/table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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

    updateLike(){
        //update like of that item in backend
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
                                    ? <span 
                                        className="like-emoji"
                                        onClick={() => this.updateLike()}
                                      >👍</span>
                                    : null}
                                    {this.isValidUrl(content) 
                                    ? <a href={content}> 
                                        <FontAwesomeIcon 
                                            icon={faExternalLinkAlt} 
                                            className="icon"
                                        />
                                      </a> 
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