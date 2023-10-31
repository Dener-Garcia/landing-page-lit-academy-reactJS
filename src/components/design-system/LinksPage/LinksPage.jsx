import React from 'react';
import './module.css';

const LinksPage = (props) => {

  const {linkName} = props;

  return(
    <a href="#" className="linkPrimary">{linkName}</a>
  );
};

export default LinksPage;