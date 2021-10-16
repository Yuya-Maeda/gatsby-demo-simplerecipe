import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
export default function Home() {
  return (
    <Layout>
      <SEO title="home" description="this is home page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="main"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Gatsby デモ</h1>
              <h4>Gatsbyjsの高速ウェブサイトデモサイト</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
