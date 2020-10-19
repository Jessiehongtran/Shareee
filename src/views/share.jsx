import React from 'react';
import '../styles/share.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../apiConfig';
import Axios from 'axios';

export default class Share extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {
                link: "",
                title: "",
                genre: "",
                by: "",
                review: "",
                added_by: localStorage.getItem('username') !== null ? localStorage.getItem('username') : "",
                likes: 0,
                category_id: 1
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({item: {...this.state.item, [e.target.name]: e.target.value}})
    }

    async postItem(item){
        try {
            const res = await Axios.post(`${API_URL}/items`, item)
            console.log(res.data)
        } catch (err){
            console.error(err)
        }
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('item', this.state.item)
        //post an item
        this.postItem(this.state.item)
    }


    render(){
        
        return (
            <div className="share-container">
                <div className="share">
                    <span className="close" onClick={() => this.props.toggleSharePage()}>&times;</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="each-row">
                            <span className="header">I recommend a</span>
                            <select name="category_id" onChange={this.handleChange}>
                                <option value="1">book</option>
                                <option value="1">movie</option>
                                <option value="1">song</option>
                            </select>
                        </div>
                        <div className="each-row">
                            <label>Title</label>
                            <input 
                                placeholder="Becoming"
                                name="title"
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        <div className="each-row">
                            <label>By</label>
                            <input 
                                placeholder="Michelle Obama"
                                name="by"
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        {localStorage.getItem('username') === null
                        ? <div className="each-row">
                            <label>Your name</label>
                            <input 
                                placeholder="Grace Kim"
                                name="added_by"
                                onChange={this.handleChange}
                            />
                            <FontAwesomeIcon 
                                icon={faPencilAlt} 
                                className="icon"
                            />
                        </div>
                        : null}
                        <button className="share-btn">Share</button>
                    </form>
                </div>
            </div>
        )
    }
}