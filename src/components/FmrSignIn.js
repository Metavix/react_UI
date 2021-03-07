import React, { Component } from 'react'
import '../styles/Button.css';
import '../styles/Input.css';
import '../styles/InputHeader.css';
import '../styles/fmrContainer.css';
import axios from 'axios';

export default class FmrSignIn extends Component {
    state = {
        username: '',
        password: ''
    }
    getData  = async() => {
        let body = {
            username: this.state.username,
            password: this.state.password
        }
        const ans = await axios.post('http://127.0.0.1:5000/sigIn', body);
        console.log(ans.data.user_id);
        if (ans.data.user_id) {
            console.log("it exist!");
            this.props.handleId(ans.data.user_id);
            this.props.changeLogin();
        }
        else
            console.log("sorry")
    }
    onChange = (element) => {
        this.setState({
            [element.target.name]: element.target.value
        })
    }    
    render() {
        return (
            <div >
                <div className="fmr-container">
                    <h3 className="input-header">Username:</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input"
                        onChange={this.onChange}
                        value={this.state.username}
                        name="username"
                    />
                    <br/>
                    <h3 className="input-header">Password:</h3>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        onChange = {this.onChange}
                        name="password"
                    />
                    <br/>
                    <input type="button" value="Login" className="login-button" onClick={this.getData}/>
                    <br/>
                </div>
            </div>
        )
    }
}




