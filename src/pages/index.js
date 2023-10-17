import * as React from "react"
import { Link } from "gatsby"
import '@fontsource/rubik'
import styled from "styled-components"
import './styles.css'
import { StaticImage } from "gatsby-plugin-image"

// const CalendlyWidget = () => (
//   <div dangerouslySetInnerHTML={{ __html: require('../static/calendly.html') }} />
// );

export const LogoStyled = styled.div`
    font-size: 36px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
`
export const Logo = () =>{
  return <LogoStyled><b>&lt;H</b><span style={{color: 'rgb(223, 123, 30)'}}>old</span><b>TML/&gt;</b></LogoStyled>
}

const IndexPage = () => {
  return (
    <main>

      <section className="headline">
        <Logo></Logo>
        <h1>Paquete de diseño Web para bares y restaurantes</h1>


        <div className="whats_the_catch">
          <div className="catch_CTA">

            <h2>Sin Costo? =&gt;</h2>

            <div className="scarecity">
              <p>Tenemos cupos limitados para esta oferta, y solo trabajamos con 1 cliente a la vez, asi que si te interesa, contactanos pronto para reservar tu cupo</p>
              <button className="redeem_btn">me interesa</button>
            </div>
          </div>
          
          <div className="catch_list">
            <h3>Si, no hay costo para esta oferta mientras estes dispuesto ha</h3>
            <ul className='catch_list_wrapper'>
              <li className="catch_list_item">Darnos un review y testimonio honestos de tu experiencia</li>
              <li className="catch_list_item">Contestar un formulario, para ayudarnos a mejorar nuestro servicio</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="solution_webdev">
          <div className="title-wrapper">
            <h2>Sitios Web programados en <Link target='_blank' to='https://gatsbyjs.com'>Gatsby</Link></h2>
            <StaticImage src="../images/icon.png" className="gatsby-logo" alt="gatsby logo"></StaticImage>
          </div>

          <div className="paragraph-wrapper">
            <StaticImage src="../images/gatsby-code.jpg" className="code-img" alt="code editor, with gatsby code"></StaticImage>
            <p>Nuestras paginas funcionan con un modelo de generación estatica, haciendolas extremadamente rapidas y optimizadas</p>
          </div>

          <div className='insights_wraper'>
            <p>Verificamos optimización y velocidad con <Link target="_blac" to='https://pagespeed.web.dev'>google page speed insights</Link></p>
            {/* <StaticImage src="" className="gmb-logo" alt="page speed insights example"></StaticImage> */}
          </div>
        </div>

        <div className="mail-prismic-wrapper">
          <div className="solution_email">
            <p>Manten a tus clientes al día de tus ofertas con marketing a traves de email, para mantenerlos anciosos de volver regularmente</p>
          </div>
          <div className="solution_gmb">
            <p>implementamos prismic en nuestros sitios para que puedas editar el contenido del sitio sin necesidad de aprender a programar</p>
            {/* <StaticImage src="../images/prismic-image.jpg" className="prismic-img" alt="interfaz prismic"></StaticImage> */}
          </div>
        </div>

        <div className="solution_GMB">
          <p>Optimización de perfil gmb (google my business) para optimizar busquedas locales</p>
          {/* <StaticImage src="" className='gmb-img' ></StaticImage> */}
        </div>
      </section>


      <section className="audience">
        <h3>para quien es este servicio?</h3>
        <p>Nuestro servicio es para bares y restaurantes en concepción y san pedro de la paz</p>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25545.783642168273!2d-73.07365301254436!3d-36.83713606286773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbares!5e0!3m2!1sen!2scl!4v1697381978274!5m2!1sen!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </section>
      <section className="identity">
        {/* <StaticImage src="../images/carnet-pic.jpg" className="benjamin-img" ></StaticImage> */}
        <p>Yo soy Benjamin Astudillo, in joven empresario y desarrollador web que lleva mas de 2 años estudiando y practicando para mejorar mis servicios</p>
      </section>
      <section className="calendly">
        {/* <CalendlyWidget /> */}
      {/* <!-- Calendly inline widget begin --> */}
        {/* <div className="calendly-inline-widget" data-url="https://calendly.com/holdtml-benjamin/reunion-inicial?primary_color=df7b1e"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
      {/* <!-- Calendly inline widget end --> */}
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
