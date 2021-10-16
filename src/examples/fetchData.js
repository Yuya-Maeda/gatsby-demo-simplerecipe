import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        simpleData
        title
        complexData {
          age
          name
        }
      }
    }
  }
`
//info: siteMetadata this is using Field Alias
const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData) //using js deconstruction

  return (
    <div>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
      <h2>Site Title is : {title}</h2>
    </div>
  )
}

export default FetchData
