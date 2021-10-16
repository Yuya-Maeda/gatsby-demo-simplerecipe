import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import RecipesList from "./RecipesList"
import TagList from "./TagList"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      totalCount
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query) // destructuring

  //   const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
