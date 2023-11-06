import React from 'react';
import './module.css';
import logoImg from '../../assets/logo.png';
import xIcon from '../..//assets/x.png';
import zapIcon from '../../assets/zap.png';
import linkedinIcon from '../../assets/linkedin.png';
import LinksPage from '../design-system/LinksPage/LinksPage';


const Footer = () => {
  return(
    <section className="footer-section">
      <footer>
        <img src={logoImg} alt="Logo da empresa ficticia Your Bots" />
        <nav className="nav-footer">

          <LinksPage linkName="Produtos" linkAnchor="#products" />
          <LinksPage linkName="Soluções" linkAnchor="#solutions"/>
          <LinksPage linkName="Clientes" linkAnchor="#customers"/>
          <LinksPage linkName="Contato" linkAnchor="#contact" />

        </nav>
        <div className="social-icons">
          <a href="#" aria-label="Twitter" ><img src={xIcon} /> </a>
          <a href="#" aria-label="Whatsapp"><img src={zapIcon} /> </a>
          <a href="https://www.linkedin.com/in/denergarcia/" aria-label="Linkedin" target="_blank" rel="noreferrer"><img src={linkedinIcon} /> </a>
        </div>
      </footer>
      <div className="made-for">
        <h6>Feito por <a href="https://dener.criarbr.com" target="_Blank" rel="noreferrer">Dener Garcia</a></h6>
      </div>
    </section>
  );
};

export default Footer;