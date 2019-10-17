import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
import './mystyles.scss'

import Layout from "../components/layout"
import Header from '../components/header'

const buildNewSite = () => (
    <Layout>
        <Header siteTitle="MARKET-READY.IO"/>
        <div className="columns has-background-white">
            <div className="column is-half is-offset-2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{padding: 15}}>
                <h3 className="is-size-3 is-size-4-mobile has-text-link has-text-weight-semibold" style={{paddingBottom: 15}}>Build a New Site</h3>
            </div>
            </div>
        </div>
    </Layout>
)

export default buildNewSite