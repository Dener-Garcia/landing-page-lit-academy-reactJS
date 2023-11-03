import React from 'react';
import './module.css';

const LinksPage = (props) => {

  const {linkName, linkAnchor} = props;

  return(
    <a href={linkAnchor} className="linkPrimary">{linkName} </a>
  );
};

export default LinksPage;