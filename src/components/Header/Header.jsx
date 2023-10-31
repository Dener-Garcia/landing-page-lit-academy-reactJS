import React from 'react';
import './module.css';
import LinksPage from '../design-system/LinksPage/LinksPage';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';

const Header = () =>{
  return(
    <header className="header">
      <div className="links">
        <LinksPage linkName="Produtos" />
        <LinksPage linkName="Soluções"/>
        <LinksPage linkName="Clientes" />
        <LinksPage linkName="Contato" />
      </div>
      <ButtonPrimary btnTitle="Criar conta" />
    </header>
  );
};

export default Header;