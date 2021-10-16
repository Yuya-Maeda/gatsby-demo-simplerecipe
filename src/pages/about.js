import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const featuredRecipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="about" description="This is about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h3>Gatsby</h3>
            <h3>レシピサイトデモ</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              ab. Delectus vero perferendis, modi quidem harum molestias eum!
              Pariatur hic est perspiciatis, earum reiciendis aliquam omnis
              quis. Quod, adipisci iste.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              esse omnis reprehenderit in doloribus. Est minima adipisci
              quisquam fugit asperiores!
            </p>
            <Link to="/contact" className="btn">
              お問い合わせ
            </Link>
          </article>

          <StaticImage
            src="../assets/images/about.jpeg"
            alt="about"
            layout="fullWidth"
            className="about-img"
            placeholder="blurred"
          />
        </section>

        <section className="featured-recipes" style={{ marginTop: "100px" }}>
          <h5>おすすめのレシピ</h5>
          <RecipesList recipes={featuredRecipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`
export default About
