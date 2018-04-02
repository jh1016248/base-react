import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Input, Button } from 'antd';
import Header from '../components/header'
import Container from '../components/container'


class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            themeColor: '#002bff'
        }
    }
    changeColor(themeColor) {
        this.setState({
            themeColor
        })
    }
    render() {
        return (
            <div>
                <Header themeColor = { this.state.themeColor } />
                <Container 
                    themeColor = { this.state.themeColor }  
                    changeColor = {this.changeColor.bind(this)}
                    />
                <div>
                    <Link to="/chat">chat</Link>
                </div>
            </div>
        )
    }
}
export default Index;
