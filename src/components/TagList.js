import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"
const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [tagName, value] = tag
          const slug = slugify(tagName, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {tagName} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
