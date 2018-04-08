import React, { Component } from 'react';
import { Link } from 'react-router';
import ThemeColor from '../containers/themeColor'

class Index extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="wrap">
                <ThemeColor />
                <div>
                    <Link to="/chat">chat</Link>
                </div>
            </div>
        )
    }
}

export default Index
