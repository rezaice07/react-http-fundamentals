import React, { Component } from 'react'
import axios from 'axios';
import {ValidationForm} from '../ValidationForm'

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',

            error: {
                userId: '',
                title: '',
                body: ''
            }
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        
        const { name, value } = e.target;
        this.formValidationObject(name, value);
    }
    submitHandler = (e) => {
        e.preventDefault();

        this.validateFormOnSubmitForm();
        if (ValidationForm(this.state)) {
            console.log(this.state)
        } else {            
            console.log("Error occured");
        }

        return;

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
                this.setState({ errorMessage: 'Error Saving Data' })
            });
    }

    validateFormOnSubmitForm = () => {        
        this.formValidationObject('userId', this.state.userId);
        this.formValidationObject('title', this.state.title);
        this.formValidationObject('body', this.state.body);
    }    

    formValidationObject = (name, value) => {

        let error = this.state.error;
        switch (name) {
            case "userId":
                error.userId = value.length < 5 ? "UserId should be 5 characaters long" : "";
                break;
            case "title":
                error.title = !value.length || value === '' ? "Title is Required" : "";
                break;
            case "body":
                error.body = !value.length || value === '' ? "Body is Required" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {
        const { userId, title, body, error } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input onChange={this.changeHandler} type="text" name="userId" value={userId} />
                        <br />
                        {error.userId.length > 0 && (
                            <span className="invalid-feedback">{error.userId}</span>
                        )}
                    </div>
                    <div>
                        <input onChange={this.changeHandler} type="text" name="title" value={title} />
                        <br />
                        {error.title.length > 0 && (
                            <span className="invalid-feedback">{error.title}</span>
                        )}
                    </div>
                    <div>
                        <input onChange={this.changeHandler} type="text" name="body" value={body} />
                        <br />
                        {error.body.length > 0 && (
                            <span className="invalid-feedback">{error.body}</span>
                        )}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm






