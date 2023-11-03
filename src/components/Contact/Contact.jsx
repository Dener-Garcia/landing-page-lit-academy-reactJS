import React, { useState } from 'react';
import './module.css';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';


const Contact = () => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table('Suas informações:', name, mail, phone, message);
    alert('Obrigado por testar essa aplicação, você pode ver suas informações no console.log');
  };


  return(
    <section className="contact">

      <div className="backgroundBlur2"></div>
      <div className="form-div">

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input type="text"
              id="name"
              placeholder="Digite seu nome"
              required
              onChange={e => {setName(e.target.value);}}
            />
          </div>
          <div className="field">
            <label htmlFor="mail">Email</label>
            <input type="email"
              id="mail"
              placeholder="Digite seu melhor email"
              required
              onChange={e => {setMail(e.target.value);}} />
          </div>
          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input type="tel"
              id="phone"
              placeholder="Qual seu número?"
              required
              onChange={e => {setPhone(e.target.value);}} />
          </div>
          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea type="message"
              id="message"
              placeholder="Mande sua dúvida pra gente."
              required
              onChange={e => {setMessage(e.target.value);}} />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="contact-info">
        <h4>Contato</h4>
        <p>Ainda tem alguma dúvida? Mande uma mensagem pra gente que te retornamos, ou teste nossos serviçõs por 30 dias grátis.</p>
        <ButtonPrimary btnTitle={'Quero testar'} />
      </div>
    </section>
  );
};

export default Contact;