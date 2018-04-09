import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <li>
        <h2>{node.frontmatter.title}</h2>
        <Link to={node.fields.slug}>Go to</Link>
      </li>
    ))}
    </ul>

    <script>{`
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    `}
    </script>

  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            thumbnail
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
