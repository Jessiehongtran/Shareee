import React from 'react';
import '../styles/table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

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

        const { headers } = this.state
        console.log(this.isValidUrl("https://www.amazon.com/Overstory-Novel-Richard-Powers/dp/039335668X/ref=sr_1_1?crid=YXE9AQ5YD88H&dchild=1&keywords=overstory&qid=1602851910&sprefix=overst%2Caps%2C255&sr=8-1"))

        return (
            <div className="table_container">
                <table>
                    <tr>
                        {headers.map(header => <th>{header}</th>)}
                    </tr>
                    {this.props.data 
                    ? this.props.data.map((thing,i) => 
                            <tr>
                                {Object.values(thing).map(content => 
                                <td>
                                    {this.isValidUrl(content) 
                                    ? <a href={content}> 
                                        <FontAwesomeIcon 
                                            icon={faPaperclip} 
                                            className="icon"
                                        />
                                      </a> 
                                    : content}
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