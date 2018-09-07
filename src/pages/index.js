import React, { Component } from 'react';
import { Link } from 'react-router';
import ThemeColor from '../containers/themeColor';
import { login } from '../api/index';
import Base from '../components/base'

class Index extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        console.log(this.props)
    }

    handelClick() {
        login('10086','123456')
            .then(res => {
                
            })
    }

    render() {
        return (
            <div className="wrap">
                <ThemeColor />
                <Base props={this.props} />
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
