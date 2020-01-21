import React from 'react'

import Layout from '../../components/Layout'
import BlogRollFull from '../../components/BlogRollFull'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0 has-overlay"
          style={{
            backgroundImage: `url('/img/ivana-cajina-xv0qJKmUTyk-unsplash.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #000, -0.5rem 0 0 #000',
              backgroundColor: '#000',
              color: 'white',
              padding: '1rem',
              zIndex: 1
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollFull />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
