import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Info = () => {
  return (
    <div>
            <div className="info--container">
        <img
          src="/src/assets/me.jpg"
          alt="Imagen de perfil"
          className="info--image"
        />
      </div>
      
      <div className="aboutMe--container">
        <h3 className="aboutMe--heading main--content">
          Javier Ruiz
        </h3>
        <h4 className="aboutMe--h4--one main--content">
          Desarrollador Backend
        </h4>
        <p className="aboutMe--span--two main--content">
          <a href="https://youtu.be/FtEYp7x-lI4?si=Nu5hdqa6zgHjFUd8" target="_blank" rel="noopener noreferrer">
            Visita mi sitio web
          </a>
        </p>
      </div>
      
      <div className="btn--class">
        <a href="https://api.whatsapp.com/send?phone=3017346875&text=Hola, Javier, espero estés muy bien. ¿Me ayudas con algo, por favor?" className="aboutMe--btn btn--whatsapp">
          Whatsapp <FaWhatsapp className="Wha" />
        </a>
        
        <a href="https://www.linkedin.com/in/javier-ruiz-arango-dev" className="aboutMe--btn btn--linkedin">
          LinkedIn <FaLinkedin className="linkedin-icon" />
        </a>
      </div>
    </div>
  )
}

export default Info
