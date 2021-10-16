const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true }) // using slugify space becomes hyphen
      createPage({
        path: `/tags/${tagSlug}`, // URL for the pages
        component: path.resolve(`src/templates/tag-template.js`), // Point to components
        context: {
          tag: tag,
        }, // passing the variable
      })
    })
  })
}
