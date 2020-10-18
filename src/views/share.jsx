import React from 'react';
import '../styles/share.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default class Share extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        
        return (
            <div className="share-container">
                <div className="share">
                    <span className="close" onClick={() => this.props.toggleSharePage()}>&times;</span>
                    <form>
                        <div className="each-row">
                            <span className="header">I recommend a</span>
                            <select>
                                <option>book</option>
                                <option>movie</option>
                                <option>song</option>
                            </select>
                        </div>
                        <div className="each-row">
                            <label>Title</label>
                            <input 
                                placeholder="Becoming"
                                name="title"
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        <div className="each-row">
                            <label>Genre</label>
                            <input 
                                placeholder="memoir"
                                name="genre"
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        <div className="each-row">
                            <label>Created by</label>
                            <input 
                                placeholder="Michelle Obama"
                                name="by"
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        <div className="each-row">
                            <label>Link</label>
                            <input 
                                placeholder="https://www.amazon.com/Becoming-Guided-Journal-Discovering-Voice/dp/0593139127/ref=pd_lpo_14_t_0/139-4365208-4787934?_encoding=UTF8&pd_rd_i=0593139127&pd_rd_r=416433e1-86e6-4bac-96d5-9d06e8c02c5a&pd_rd_w=v84Im&pd_rd_wg=Hi3GY&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=KN6GB5HCZQ2MRMVNYRV7&psc=1&refRID=KN6GB5HCZQ2MRMVNYRV7"
                                name="link"
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        <div className="each-row">
                            <label>Review</label>
                            <input 
                                placeholder="very initimate and powerful"
                                name="review"
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}