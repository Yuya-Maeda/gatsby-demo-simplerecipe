import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"
const Tags = ({ data }) => {
  console.log(data.allContentfulRecipe.nodes)
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [tagName, value] = tag
            const slug = slugify(tagName, { lower: true })
            return (
              <Link key={index} to={`/tags/${slug}`} className="tag">
                <h5>{tagName}</h5>
                <p>{value} recipes</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
