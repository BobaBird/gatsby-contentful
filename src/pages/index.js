import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h2>Post</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
       <PostListing key={node.id} post={node} /> 
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
query SiteMeta {
  site{
    siteMetadata{
      title
      desc
    }
  }
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM DD YYYY")
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}
`