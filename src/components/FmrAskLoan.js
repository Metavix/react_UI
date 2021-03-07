import React, { Component } from 'react'

import '../styles/Button.css';
import '../styles/Input.css';
import '../styles/InputHeader.css';
import '../styles/fmrContainer.css';
import '../styles/headerAns.css';
import axios from 'axios';

export default class FmrAskLoan extends Component {
    state = {
        months: 0,
        name: '',
        amount: 0,
        user: this.props.userId,
        loanStatusAsked: false,
        loanState:''
    }
    onChange = (element) => {
        this.setState({
            [element.target.name]: element.target.value
        })
    }
    getData  = async() => {
        let body = {
            id: parseInt(this.state.user),
            amount:  parseInt(this.state.amount)
        }
        console.log(body);
        const ans = await axios.post('http://127.0.0.1:5000/askLoan', body);
        console.log(ans);
        this.handleLoanAsk();
        this.setState({loanState: ans.data.application_status})
    }
    // this is to handle the ask of loan
    handleLoanAsk = () => {
        this.setState({loanStatusAsked:true});
    }
    render() {
        const loanIsAsked = this.state.loanStatusAsked;
        return (
            <div> {loanIsAsked
                    ?<div className="fmr-container">
                       <h1 className="input-header">User: {this.state.user}</h1>
                       <br/>
                       <br/>
                       <br/>
                       <h2 className="input-header">The status of your loan is:</h2>
                       <h3 className="header-ans">{this.state.loanState}</h3>
                    </div>
                    :(
                        <div className="fmr-container">
                        <h2 className="input-header">Welcome user:</h2>
                        <h3 className="input-header" >{this.state.user}</h3>
                        <h3 className="input-header">Please type your bussines name:</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input"
                            onChange={this.onChange}
                            value={this.state.name}
                            name="name"
                        />
                        <br/>
                        <h3 className="input-header">Please select the months</h3>
                        <input
                            type="number"
                            placeholder="Select"
                            className="input"
                            onChange={this.onChange}
                            value={this.state.months}
                            name="months"
                        />
                        <br/>
                        <h3 className="input-header">Please select your amount:</h3>
                        <input
                            type="number"
                            placeholder="Amount"
                            className="input"
                            onChange ={this.onChange}
                            name="amount"
                        />
                        <br/>
                        <input
                            type="button"
                            value="send"
                            className="login-button"
                            onClick={this.getData}
                        />
                        <br/>
                        </div>
                    )
                }
                
            </div>
        )
    }
}
