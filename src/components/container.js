import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

class Container extends Component {
    static propTypes = {
        themeColor : PropTypes.string,
        changeColor: PropTypes.func
    }
    
    constructor(){
        super()
    }
    
    changeColor(color) {
        const {changeColor} = this.props
        changeColor(color)
    }

    render() {
        const { themeColor } = this.props
        return (
          <div>
            <p style= {{ color: themeColor }} >container</p>
            <Button onClick={this.changeColor.bind(this, '#f00')}>red</Button>
            <Button onClick={this.changeColor.bind(this, '#002bff')}>blue</Button>
          </div>
        )
    }
}


export default Container