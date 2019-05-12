import React, { Component } from 'react'
import { Box, Select, Heading, Text, Form, FormField, TextInput, TextArea } from 'grommet'
import Layout from '../components/layout/layout'
class Contact extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            select: "Discussion",
            email: "",
            message: ""
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    } 

    onSelectChange = (event) => {        
        console.log(event)
        this.setState({ select: event.value })
    }

    onEmailChange = (event) => {
        console.log(event)
        this.setState({email: event.target.value})
    }

    onMessageChange = (event) => {
        console.log(event)
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <Layout>
                <Box elevation="small" pad="medium" gap="medium" fill={true}>
                    <Heading>Contact with me.</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Form>
                        <FormField label="Full Name">
                            <TextInput placeholder="John Applessed" onChange={this.onNameChange} />
                        </FormField>
                        <FormField label="Email">
                            <TextInput placeholder="john@apple.com" onChange={this.onEmailChange} />
                        </FormField>
                        <FormField label="Why?">
                            <Select options={['Hire', 'Discussion', 'Thanks', 'Complaint', 'No Reason']} value={this.state.select} onChange={this.onSelectChange} />
                        </FormField>
                        <FormField>
                            <TextArea placeholder="type here" onChange={this.onMessageChange} />
                        </FormField>

                    </Form>
                </Box>
            </Layout>
        )
    }
}

export default Contact