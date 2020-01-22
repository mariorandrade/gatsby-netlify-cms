import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  mainpitch
}) => (
  <div>
    <div
      className="full-width-image margin-top-0 has-overlay"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        backgroundAttachment: `fixed`,
        overflow: `hidden`
      }}
    >
      
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>

      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.5) 0.5rem 0px 0px, rgba(0, 0, 0, 0.5) -0.5rem 0px 0px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            zIndex: 1
          }}
        >
          {title}
        </h1>
      
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content center">
                
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Featured articles
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered m-t-l m-b-l">
                    <Link className="btn" to="/blog">
                      More articles
                    </Link>
                  </div>
                </div>

                <div className="content">
                  <h2 className="title">{mainpitch.title}</h2>  
                  <div className="columns">
                    <div className="column is-12">
                      <p>{mainpitch.description}</p>
                    </div>
                  </div> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) 
    {
      frontmatter {
        title

        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) 
            {
              ...GatsbyImageSharpFluid
            }
          }
        }

        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`
