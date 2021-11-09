import axios from 'axios';

export const PostService= async ()=>{  
    let postList = await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.data;        
    }).catch((err) => {
        console.log(err);
        return ('Error Retrieving Data');
    });

    return postList;    
}