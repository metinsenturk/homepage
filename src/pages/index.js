import React from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

import Layout from '../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'

const SocialItem = ({ children, href, title }) => (
  <div>
    <span
      style={{
        verticalAlign: 'text-top',
      }}
    >
      {children}
    </span>
    <span> </span>
    <a
      href={href}
      target="_blank"
      style={{
        textDecoration: 'none',
        color: '#663399',
        marginRight: 30,
      }}
    >
      {title}
    </a>
  </div>
)

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              socialConfig {
                facebook
                email
                twitter
                linkedin
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout>
            <h1>Hi there.</h1>
            <p>
              My name is Metin Senturk. Welcome to my site. I am a data
              scientist with great passion in technology. I live in Jersey City,
              NJ.
            </p>
            <p>
              Working with data is my passion. I do machine learning projects. I
              am developing projects in computer vision with OpenCV. I code in
              Python and R. 
            </p>
            <p>
              I like building software. Currently, I am developing this website
              using React and Gatsby. You can follow the future version of this
              website in{' '}
              <a
                href={
                  'https://github.com/metinsenturk/metinsenturk.github.io.git'
                }
                target={'_blank'}
              >
                here
              </a>
              .{' '}
            </p>
            <p>
              I will be very happy to get in touch with you. Reach me at the
              following links.
            </p>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <li>
                <SocialItem
                  title={'Email'}
                  href={`mailto:${data.site.siteMetadata.socialConfig.email}`}
                >
                  <FaEnvelope color={'#663399'} />
                </SocialItem>
              </li>
              <li>
                <SocialItem
                  title={'Linkedin'}
                  href={data.site.siteMetadata.socialConfig.linkedin}
                >
                  <FaLinkedin color={'#663399'} />
                </SocialItem>
              </li>
              <li>
                <SocialItem
                  title={'Twitter'}
                  href={data.site.siteMetadata.socialConfig.twitter}
                >
                  <FaTwitterSquare color={'#663399'} />
                </SocialItem>
              </li>
              <li>
                <SocialItem
                  title={'Facebook'}
                  href={data.site.siteMetadata.socialConfig.facebook}
                >
                  <FaFacebookSquare color={'#663399'} />
                </SocialItem>
              </li>
            </ul>
          </Layout>
        )
      }}
    />
  )
}

export default IndexPage
