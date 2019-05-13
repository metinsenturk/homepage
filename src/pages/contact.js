import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FormField, TextInput, TextArea, Button, Markdown, Anchor } from 'grommet'
import { Box, Select, Heading, Text, Form, } from 'grommet'
import { Previous } from "grommet-icons"
import Layout from '../components/layout/layout'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

/**
 * SELF NOTE: 
 * Grommet from has its own state where it outputs the form values in Form's onSubmit value. 
 * Here, I implemented my own, which I believe slows down the page. 
 */

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "ready", /* ready || success || failure */
            error: "",
            name: "",
            select: "Discussion",
            email: "",
            message: ""
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onSelectChange = (event) => {
        this.setState({ select: event.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(this.setState({ status: "success" }))
            .catch(error => this.setState({ status: "failure", error: error }));
    }

    render() {
        const failure = () => {
            return (
                <Box basis="large" fill={true}>
                    <Box pad="xsmall" justify="between" align="end" direction="row">
                        <Text color="status-error" >Failure!</Text>
                        <Anchor as={Link} to='contact/'>
                            <Box direction="row" gap="xsmall">
                                <Previous />
                                <Text>Back</Text>
                            </Box>
                        </Anchor>
                    </Box>
                    <Box elevation="small" pad="medium" gap="medium">
                        <Heading>Something went wrong.</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    </Box>
                </Box>
            )
        }

        const success = () => {
            var { status, name, select, email, message } = this.state
            const CONTENT = `
            \`\`\`json             
            ${JSON.stringify({ status, name, select, email, message }, null, 4)}
            \`\`\`
            `
            return (
                <Box basis="large" fill={true}>
                    <Box pad="xsmall" justify="between" align="end" direction="row">
                        <Text color="status-ok" >Success!</Text>
                        <Anchor as={Link} to='contact/'>
                            <Box direction="row" gap="xsmall">
                                <Previous />
                                <Text>Back</Text>
                            </Box>
                        </Anchor>
                    </Box>
                    <Box elevation="small" pad="medium" gap="medium" >
                        <Heading >Message recieved!</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Markdown>
                            {CONTENT}
                        </Markdown>
                    </Box>
                </Box>
            )
        }

        const ready = () => {
            // eslint-disable-next-line
            const emailRegex = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
            const selectOptions = ['Hire', 'Discussion', 'Thanks', 'Complaint', 'No Reason']
            return (
                <Box elevation="small" pad="medium" gap="medium" fill={true}>
                    <Heading>Contact with me.</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Form name="contactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        {/* You still need to add the hidden input with the form name to your JSX form */}
                        <input type="hidden" name="form-name" value="contact" />
                        <FormField label="Full Name" required={true}>
                            <TextInput placeholder="John Applessed" onChange={this.onNameChange} />
                        </FormField>
                        {/** TODO: required and validate does not work. */}
                        <FormField label="Email" required={true} validate={{ regexp: emailRegex, message: "e-mail required.." }}>
                            <TextInput placeholder="john@apple.com" onChange={this.onEmailChange}/>
                        </FormField>
                        <FormField label="Why?">
                            <Select options={selectOptions} value={this.state.select} onChange={this.onSelectChange} />
                        </FormField>
                        <FormField label="Message" required={true}>
                            <TextArea placeholder="type here" rows="5" onChange={this.onMessageChange} />
                        </FormField>
                        <Box pad={{ vertical: 'medium' }} direction="row" justify="end">
                            <Button label="Send" primary={true} onClick={this.onSubmit}></Button>
                        </Box>
                    </Form>
                </Box>
            )
        }

        switch (this.state.status) {
            case "failure":
                return <Layout>{failure()}</Layout>
            case "success":
                return <Layout>{success()}</Layout>
            default:
                return <Layout>{ready()}</Layout>
        }
    }
}

export default Contact