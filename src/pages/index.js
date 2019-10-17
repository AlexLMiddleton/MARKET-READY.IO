import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import './mystyles.scss'

import Layout from "../components/layout"
import Header from '../components/header'

const IndexPage = ({siteTitle, siteDescription}) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomepage {
        homepageHeader
        homepageSubheader
        homepageHeroImage {
          fluid(maxWidth: 545) {
            src
          }
          description
        }
      }
    }
  `)
  return(
    <Layout>
      <Header siteTitle='MARKET-READY.IO' />
      <div className="columns has-background-link">
        <div className="column is-half is-offset-2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{padding: 15}}>
            <h3 className="is-size-3 is-size-4-mobile has-text-white has-text-weight-semibold" style={{paddingBottom: 15}}>{data.contentfulHomepage.homepageSubheader}</h3>
            <h4 className="is-size-4 is-size-5-mobile has-text-white" style={{paddingBottom: 15}}>
              Enter your URL below to receive a customized 
              report on your site's strengths and weaknesses.
            </h4>
            <div className="field">
              <div className="control">
                  <input className="input is-info is-large" type="text" placeholder="Enter your website address" />
                  <Link className="button is-link is-inverted" to="/">Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
