import React from 'react';
import './module.css';
import LinksPage from '../design-system/LinksPage/LinksPage';
import ButtonPrimary from '../design-system/Button-primary/ButtonPrimary';

const Header = () =>{
  return(
    <header className="header">
      <div className="links">
        <LinksPage linkName="dener" />
        <LinksPage />
        <LinksPage />
        <LinksPage />
      </div>
      <ButtonPrimary />
    </header>
  );
};

export default Header;