import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';


/* This part is to add each component of the App */
import FmrSignin from './components/FmrSignIn';
import FmrAskLoan from './components/FmrAskLoan';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            User_id: '',
        }   
    }
    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }
    handleUserId = (id) => {
        this.setState({User_id: id});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (        
            <div>
                <Router>
                    {isLoggedIn
                        ?<Route exact path="/" render = {() => {
                            return <div>
                                <FmrAskLoan userId={this.state.User_id}/>
                            </div>
                        }}>
                        </Route>
                        :<Route exact path="/" render = {() => {
                            return <div>
                                <FmrSignin
                                    changeLogin={this.handleLoginClick}
                                    handleId={this.handleUserId} />
                            </div>
                        }}></Route>
                    }                    
                </Router>
            </div>
        )
    }
}
