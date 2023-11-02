import React from 'react';
import './module.css';

const TestimonialsCard = (props) =>{

  const {avatar, name, testimony} = props;

  console.log(name, 'props recebidas no cad');
  return(
    <div className="testimonyCard">
      <img src={avatar} alt={name} />
      <h4>{name}</h4>
      <p>{testimony}</p>
    </div>
  );
};

export default TestimonialsCard;