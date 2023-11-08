import React from 'react';
import './module.css';
import ProductCard from '../design-system/ProductCard/ProductCard';
import imgCard1 from '../../../public/assets/escolha-bot.opti.webp';
import imgCard2 from '../../../public/assets/treine-seu-bot.opti.webp';
import imgCard3 from '../../../public/assets/integracao.opti.webp';
import imgCard4 from '../../../public/assets/usando-bot.opti.webp';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';

const Products = () =>{
  return(
    <section id="products" className="products">
      <div className="backgroundBlur"></div>
      <h2>Conheça seu próximo <span>bot</span></h2>
      <p>Temos um bot que combina com sua necessidade, eles são treinados por você e aperfeiçoados com a mais nova tecnologia do ChatGPT.</p>
      <div className="cards">
        <ProductCard 
          imgCard={imgCard1}
          titleCard={'Escolha seu bot'}
          descriptionCard={'São mais de 30 bot\'s para você, também podemos criar a sua versão customizada.'} />
      
        <ProductCard 
          imgCard={imgCard2}
          titleCard={'Treine seu bot'}
          descriptionCard={'Responda as perguntas, dê sua voz para seu bot e ele vai aprender a como responder seu público.'} />

        <ProductCard 
          imgCard={imgCard3}
          titleCard={'Integre seu bot'}
          descriptionCard={'Chegou a hora de integrar seu bot a sua rede social ou e-commerce, com nossa API de integração isso é fácil.'} />

        <ProductCard 
          imgCard={imgCard4}
          titleCard={'Usando seu bot'}
          descriptionCard={'Tudo pronto, agora é só ir acompanhando e ficar de olhos nas notificações que sue bot vai te mandar.'} />
      </div>
      <ButtonPrimary btnTitle={'Quero testar grátis'} />
    </section>
  );
};

export default Products;