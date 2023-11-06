import React from 'react';
import './module.css';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';
import heroImg from '../../assets/hero-img.png';

const Hero = () =>{
  return(
    <section className="hero">
      <div className="titleHero">
        <h1><span>A.I Bot</span> Yours</h1>
        <p>Mudar o mundo otimizando o tempo das pessoas através da inteligência artificial. Com honestidade e transparência oferecemos a mais alta tecnologia em bots de conversação.</p>
        <ButtonPrimary btnTitle="Quero testar grátis"/>
      </div>
      <img src={heroImg} />
    </section>
  );
};

export default Hero;