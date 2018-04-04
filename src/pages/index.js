import React, { Component } from 'react';
import { Link } from 'react-router';
import ThemeColor from '../containers/themeColor'

class Index extends Component {
    constructor() {
        super()
    }
// http://img.ivsky.com/img/tupian/pre/201802/11/lofoten-010.jpg
    render() {
        return (
            <div>
                <ThemeColor />
                <div>
                    <Link to="/chat">chat</Link>
                </div>
            </div>
        )
    }
}

export default Index
