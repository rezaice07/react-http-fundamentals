import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userId:'',
            title:'',
            body:'',
        }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)        
        .then((response) => {
            console.log(response);            
        }).catch((err) => {
            console.log(err);
            this.setState({errorMessage:'Error Saving Data'})
        });
    }
    render() {
        const {userId, title, body}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div><input onChange={this.changeHandler} type="text" name="userId" value={userId} /></div>      
                    <div><input onChange={this.changeHandler} type="text" name="title" value={title} /></div>  
                    <div><input onChange={this.changeHandler} type="text" name="body" value={body} /></div>  

                   <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
