import React from 'react';
import './module.css';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';

const Contact = () => {
  return(
    <section className="contact">
      <div className="backgroundBlur2"></div>
      <form action="post">
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input type="text"
            id="name"
            placeholder="algo aqui"
            required />
        </div>
        <div className="field">
          <label htmlFor="mail">Email</label>
          <input type="email"
            id="mail"
            placeholder="algo aqui"
            required />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefone</label>
          <input type="tel"
            id="phone"
            placeholder="algo aqui"
            required />
        </div>
        <div className="field">
          <label htmlFor="message">Mensagem</label>
          <textarea type="message"
            id="message"
            placeholder="algo aqui"
            required />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <h4>Contato</h4>
        <p>Ainda tem alguma dúvida? Mande uma mensagem pra gente que te retornamos, ou teste nossos serviçõs por 30 dias grátis.</p>
        <ButtonPrimary btnTitle={'Quero testar'} />
      </div>
    </section>
  );
};

export default Contact;