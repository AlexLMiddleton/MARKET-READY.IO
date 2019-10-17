import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../pages/mystyles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faExclamationTriangle, faUser, faDesktop } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"

library.add(faEnvelope, faExclamationTriangle, faUser, faDesktop)

const ContactForm = () => (
    <Layout>
        <div className="columns">
            <div className="column is-half is-offset-2">
                <div style={{padding: 15}}>
                    <h2 className="is-size-2 has-text-link">
                        Contact Us
                    </h2>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control has-icons-left has-icons-right">
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="user" />
                        </span>
                        <input className="input" type="text" placeholder="Enter your name" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email input" />
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="envelope" />
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Website address (optional):</label>
                    <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Website address" />
                        <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="desktop" />
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                    <div className="select">
                        <select>
                        <option>Optimize existing website</option>
                        <option>Build a new website</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">If you have any questions or comments, please enter them below</label>
                    <div className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </Layout>
)

export default ContactForm