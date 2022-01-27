import React, { Component } from 'react'
// Bootstrap
import { Container, Button } from 'react-bootstrap'

export default class test extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    handleChangeObjectElement(event) {
    console.log('event.value: ', event.value)
    console.log('event.value.id: ', event.value.id)
    }
    
    handleChangeSelectListMall= async(event) => {
        console.log(event)
        this.setState({
            mallSelected: event.value
        })
    }
    
    async handleChangeObjectElement() {
        console.log('handleChangeObjectElement: ')
    }
    
    handleOnChangeInputForm = async(event) => {
        if (event.target.name === 'desiredSubscriptionTopic') {
            await this.setState({desiredSubscriptionTopic: event.target.value})
        }
        if (event.target.name === 'desiredPublishTopic') {
            await this.setState({desiredPublishTopic: event.target.value})
        }
    }

    render() {
        return (
            <div>
                
                
            </div>
        )
    }
}
