import React, { Component } from 'react';
import { Link } from 'react-router';
import ThemeColor from '../containers/themeColor';
import http from '../api/index';

class Index extends Component {
    constructor() {
        super()
    }

    handelClick() {
        http.login('10086','123321')
            .then(res => {
                
            })
    }

    render() {
        return (
            <div className="wrap">
                <ThemeColor />
                <div>
                    <a href="javascript:;" onClick={this.handelClick.bind(this)}>http request</a>
                    <br/>
                    <Link to="/chat">to chat</Link>
                </div>
            </div>
        )
    }
}

export default Index
