import React, { useState } from 'react';
import './module.css';
import logoImg from '../../../../public/assets/logo.opti.webp';
import LinksPage from '../LinksPage/LinksPage';

const ButtonMobile = () => {

  const [showMenu, setShowMenu] = useState(false);

  const menuIsActive = () => {
    console.log('botao clicado');
    setShowMenu(!showMenu);
  };

  const menuIsOff = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="mbl-header">

        <img src={logoImg} alt='alt="Logo da empresa ficticia Your Bots' />

        <button className="show-menu-mbl" aria-label="Menu"
          onClick={menuIsActive}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
      </div>

      <aside className={showMenu ? 'active-menu' : ''}>
        <nav>

          <div className="click-link" onClick={menuIsOff}>
            <LinksPage linkName="Produtos" linkAnchor="#products" />
          </div>

          <div className="click-link" onClick={menuIsOff}>
            <LinksPage linkName="Soluções" linkAnchor="#solutions" />
          </div>

          <div className="click-link" onClick={menuIsOff}>
            <LinksPage linkName="Clientes" linkAnchor="#customers" />
          </div>

          <div className="click-link" onClick={menuIsOff}>
            <LinksPage linkName="Contato" linkAnchor="#contact" />
          </div>

        </nav>

      </aside>
    </>
  );
};

export default ButtonMobile;