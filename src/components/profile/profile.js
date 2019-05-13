import React from 'react'
import { Box, Heading, Text, Markdown, Anchor } from 'grommet'
import { InternalLink } from '../internal/internal'

export default class Profie extends React.Component {
    render() {
        return (
            <Box>
                <Box direction="row-responsive">
                    <Box
                        width="xsmall"
                        height="xsmall"
                        overflow="hidden"
                        margin={{ bottom: 'small', left: 'none', right: 'small' }}
                    >
                        <img
                            title={this.props.profile.title}
                            alt={this.props.profile.alt}
                            src={this.props.profile.src}
                        />
                    </Box>
                    <Box>
                        <Heading level="3" margin="0">Metin Senturk</Heading>
                    </Box>

                </Box>
                <Box>
                    <Heading level="4" margin="0">About Me</Heading>
                    <Markdown>{this.props.profile.bio}</Markdown>
                    <Text>Read more about <InternalLink to="/about/"><Anchor as="span">me.</Anchor></InternalLink>
                    </Text>
                </Box>
            </Box>
        )
    }
}

Profie.defaultProps = {
    profile: {
        title: "profile picture",
        alt: "placeholder profile pic",
        src: "//via.placeholder.com/150",
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }
}