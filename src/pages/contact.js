import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>お問い合わせ</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, facere nesciunt recusandae et eligendi natus incidunt
              aliquid beatae quaerat fugiat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              animi eum provident facere rerum impedit aliquam est quis
              cupiditate dolores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dicta incidunt consectetur commodi temporibus molestiae eos hic
              maxime vero, cupiditate, dolore ex ab omnis eligendi nostrum iste
              quibusdam suscipit corrupti.
            </p>
          </article>
          <article className="contact-info">
            <form
              className="form contact-form"
              action="https://formspree.io/f/moqyzqkq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">おなまえ</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                送信
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
