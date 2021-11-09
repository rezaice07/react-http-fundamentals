import React, { Component } from 'react'
import axios from 'axios';
import { PostService } from '../utilities/Services';


class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMessage:''
        }
    }

    componentDidMount= async ()=>{

        await PostService().then(res=>console.log(res));
        /*
        //axios is the promise based library
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({posts:response.data})
            
        }).catch((err) => {
            console.log(err);
            this.setState({errorMessage:'Error Retrieving Data'})
        });

        */
    }
    
    render() {
        const {posts,errorMessage}=this.state;
        return (
            <div>
                <h5>List of posts</h5>
                { 
                    posts.length? posts.map(item=><div key={item.id}>{item.title}</div>):null
                }
                {
                    errorMessage? <div>{errorMessage}</div>  :null
                }
            </div>
        )
    }
}

export default PostList
