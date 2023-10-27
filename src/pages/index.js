import * as React from "react"
import { Link } from "gatsby"
import '@fontsource/rubik'
import styled from "styled-components"
import './styles.css'
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Helmet } from "react-helmet"

// const CalendlyWidget = () => (
//   <div dangerouslySetInnerHTML={{ __html: require('../static/calendly.html') }} />
// );

export const LogoStyled = styled.div`
    font-size: 46px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
    justify-self: center;
`
export const Logo = () =>{
  return <LogoStyled><b>&lt;H</b><span style={{color: 'rgb(223, 123, 30)'}}>old</span><b>TML/&gt;</b></LogoStyled>
}

const IndexPage = () => {
  return (
    <main>

      <section className="headline">
        <Logo className="logo-head"></Logo>
        <h1>Paquete de diseño Web para bares y restaurantes</h1>


        <div className="whats_the_catch">
          <div className="catch_CTA">

            <h2>Sin Costo? =&gt;</h2>

            <div className="scarecity">
              <p>Tenemos cupos limitados para esta oferta, y solo trabajamos con 1 cliente a la vez, asi que si te interesa, contactanos pronto para reservar tu cupo</p>
              <button onClick={()=> scrollTo("#calendly")} className="redeem_btn">me interesa</button>
            </div>
          </div>
          
          <div className="catch_list">
            <h3>Si, no hay costo para esta oferta mientras estes dispuesto ha</h3>
            <ul className='catch_list_wrapper'>
              <li className="catch_list_item">Darnos un review y testimonio honestos de tu experiencia</li>
              <li className="catch_list_item">Contestar un formulario, para ayudarnos a mejorar nuestro servicio</li>
              <li className="catch_list_item">Referirnos a alguien que le interese nuestros servicios, en caso de que estes satisfecho</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="line-break"/>
      
      <section className="solution">
        <div className="solution_webdev">
          <div className="title-wrapper">
            <h2>Sitios Web programados en <Link target='_blank' to='https://gatsbyjs.com'>Gatsby</Link></h2>
            <StaticImage src="../images/icon.png" className="gatsby-logo" alt="gatsby logo"></StaticImage>
          </div>

          <div className="paragraph-wrapper solution-block">
            <StaticImage src="../images/ssg-host-flow.png" className="code-img" alt="code editor, with gatsby code"></StaticImage>
            <p>Nuestras paginas funcionan con un modelo de generación estatica, haciendolas extremadamente rapidas y optimizadas</p>
          </div>

          <div className='insights-wrapper solution-block'>
            <p>Verificamos optimización y velocidad con <Link target="_blac" to='https://pagespeed.web.dev'>google page speed insights</Link></p>
            <StaticImage src="../images/google-pagespeed-insights-logo" className="insights-logo" alt="page speed insights example"></StaticImage>
          </div>
        </div>

        <div className="mail-prismic-wrapper">

          <div className="solution_prismic solution-block">
            <StaticImage src="../images/prismic-logo.png" className="prismic-img" alt="logo prismic"></StaticImage>
            <p>Implementamos <Link to="https://prismic.io" target="_blank">prismic</Link> en nuestros sitios para que puedas editar el contenido del sitio sin necesidad de aprender a programar</p>
          </div>

          <div className="solution_email solution-block">
            <p>Manten a tus clientes al día de tus ofertas con marketing a traves de email, para mantenerlos anciosos de volver regularmente</p>
            <StaticImage src="../images/mailerlite-logo" className="email-img" alt="logo email"></StaticImage>
          </div>

        </div>

        <div className="solution_GMB solution-block">
          <StaticImage src="../images/google-my-business-logo" className='gmb-img' ></StaticImage>
          <p>Optimización de perfil gmb (google my business) para optimizar busquedas locales</p>
        </div>
      </section>

      <div className="line-break"/>

      <section className="audience">
        <h3>Para quien es este servicio?</h3>
        <p>Nuestro servicio es ideal para bares y restaurantes en concepción y san pedro de la paz</p>
        <div className="map-imbed" dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12773.719717687067!2d-73.07352979325164!3d-36.83217824284281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbares!5e0!3m2!1ses-419!2scl!4v1697406203709!5m2!1ses-419!2scl" width="100%" height="560" style="border: 0; border-radius: 14px; box-shadow: rgba(2, 1, 0, 0.14) 0px 1px 41px 2px; margin-bottom: 10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
      </section>

      <section className="identity">
        <StaticImage src="../images/carnet-pic.jpeg" className="benjamin-img" ></StaticImage>
        <p>Yo soy Benjamin Astudillo, in joven empresario y desarrollador web que lleva mas de 2 años estudiando y practicando para mejorar mis servicios</p>
      </section>
  
      <section id="calendly">
        <h2>Coordina una videollamada sin atados, para discutir si te interesa nuestro servicio</h2>
        <Helmet>
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        </Helmet>
        <div id="calendly-imbed">
          <div class="calendly-inline-widget" data-url="https://calendly.com/holdtml-benjamin/reunion-inicial?primary_color=df7b1e" style={{ minWidth: '320px', height: '700px', width: '100%', margin: ' 0px 0px 120px 0px', padding: '0px' }}></div>
        </div>
      </section>
  
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
