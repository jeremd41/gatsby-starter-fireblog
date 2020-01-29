import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Pagination from "../components/Pagination";
import ImgNonStreched from "../components/ImgNonStreched";

function PostListTemplate({ data, location, pageContext }) {
  const title = data.fireblog.blog.name;
  const postsPerPage = data.site.siteMetadata.postsPerPage;

  const edges = data.fireblog.posts.edges;
  return (
    <Layout location={location} headerTitle={title}>
      <SEO location={location} title={`${title} | all posts`} />
      <div className="list-posts">
        {edges.map(edge => {
          return (
            <div className="post columns" key={edge.node.slug}>
              <div className="column is-one-quarter">
                <div className="post-image">
                  {edge.node.gatsbyImage && (
                    <Link to={`/post/${edge.node.slug}`}>
                      <ImgNonStreched
                        fluid={edge.node.gatsbyImage.childImageSharp.fluid}
                        alt={edge.node.image.alt}
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div className="column">
                <div className="post-title">
                  <h2>
                    <Link to={`/post/${edge.node.slug}`}>
                      {edge.node.title}
                    </Link>
                  </h2>
                </div>
                <div className="post-date">
                  {new Date(edge.node.publishedAt).toLocaleDateString()}
                </div>
                <div className="post-teaser">
                  <p>{edge.node.teaser}</p>
                </div>
                <div className="post-link">
                  <Link className="read-more" to={`/post/${edge.node.slug}`}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <Pagination
          totalResults={pageContext.paginationTotalCount}
          resultsPerPage={postsPerPage}
        />
      </div>
    </Layout>
  );
}

export default PostListTemplate;

export const pageQuery = graphql`
  query PostListQuery($postsPerPage: Int!, $before: Fireblog_Cursor!) {
    site {
      siteMetadata {
        postsPerPage
        displayAuthor
      }
    }
    fireblog {
      blog {
        name
        description
        image {
          url
          alt
        }
      }
      posts(last: $postsPerPage, before: $before) {
        edges {
          node {
            publishedAt
            teaser
            slug
            title
            image {
              url
              alt
            }
            gatsbyImage {
              childImageSharp {
                fluid(maxWidth: 280, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`;
