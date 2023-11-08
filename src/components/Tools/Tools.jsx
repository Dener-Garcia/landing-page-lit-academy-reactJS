import React from 'react';
import './module.css';
import ServiceImg from '../../../public/assets/ballon.opti.webp';
import ChatImg from '../../../public/assets/chat-example.opti.webp';

const Tools = () => {
  return(
    <section id="solutions" className="tools">
      <img className="bot-img" src={ServiceImg} alt="robo voando com um sorriso e 3 caixas de texto acima dela mostrando que ela pode conversar"/>
      <div className="bot-work" alt="Um robo com aparencia feminina e tres balões flutuando ao seu lado direito simulando uma conversa">
        <h3>Como a <span>Cute Bot</span> te ajuda</h3>
        <p>Nossos bots são selecionados por tipos de serviços como atendimento ao cliente, captura de leads, engajamento e SAC. Também podemos criar uma solução única de acordo com sua necessidade.</p>
        <img src={ChatImg} alt="Um print de uma conversa no whatsapp de cliente e o robo da yourbots"/>
      </div>
    </section>
  );
};

export default Tools;