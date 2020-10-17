import React from 'react';
import '../styles/table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headers: this.props.data && this.props.data.length > 0 ? Object.keys(this.props.data[0]) : []
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

    render(){

        const { headers } = this.state;
        console.log('props in table', this.props)

        return (
            <div className="table_container">
                <table>
                    <tr>
                        {headers.map(header => <th>{header}</th>)}
                    </tr>
                    {this.props.data 
                    ? this.props.data.map((thing,i) => 
                            <tr className="each-row">
                                {Object.values(thing).map((content, j) => 
                                <td>
                                    {headers[j] == "likes" ? <span className="like-emoji">👍</span>: null}
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