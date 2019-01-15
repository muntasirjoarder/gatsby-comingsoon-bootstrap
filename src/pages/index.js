import React from 'react'
import { FaTwitter,FaFacebookF,FaInstagram } from 'react-icons/fa'
import {graphql} from 'gatsby'


import Layout from '../components/layout'
import SEO from '../components/seo'
import Newsletter from '../components/newsletter'


const bgVideo = require('../dist/mp4/bg.mp4')

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="overlay"></div>
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src={bgVideo} type="video/mp4" />
    </video>

    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">Coming Soon!</h1>
              <p className="mb-5">{data.site.siteMetadata.launchpitch} Our target launch date is&nbsp;
                <strong>{data.site.siteMetadata.launchdate}</strong>! Sign up for updates using the form below!</p>
                <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href={data.site.siteMetadata.twitterlink} target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li className="list-unstyled-item">
        <a href={data.site.siteMetadata.facebookpage} target="_blank">
            <FaFacebookF />
          </a>
        </li>
        <li className="list-unstyled-item">
        <a href={data.site.siteMetadata.instagramlink} target="_blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        launchdate
        launchpitch
        twitterlink
        facebookpage
        instagramlink
      }
    }
  }
`


