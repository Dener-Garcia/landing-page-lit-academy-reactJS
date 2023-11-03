import React from 'react';
import './module.css';
import LinksPage from '../design-system/LinksPage/LinksPage';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';

const Header = () =>{
  return(
    <header className="header">
      <div className="links">
        <nav>
          <LinksPage linkName="Produtos" linkAnchor="#products" />
          <LinksPage linkName="Soluções" linkAnchor="#solutions"/>
          <LinksPage linkName="Clientes" linkAnchor="#customers"/>
          <LinksPage linkName="Contato" linkAnchor="#contact" />
        </nav>
      </div>
      <ButtonPrimary btnTitle="Criar conta" />
    </header>
  );
};

export default Header;