import React, { useEffect, useState } from 'react';
import './module.css';
import fetchTestimonials from '../../api/fetchTestimonials';
import TestimonialsCard from '../design-system/TestimonialsCard/TestimonialsCard';

const Testimonials = () => {

  const [dataTestimony, setDataTestimony] = useState([]);

  useEffect(() => {
    fetchTestimonials().then((res) => {
      setDataTestimony(res);
    })
      .catch((err) =>{
        console.error('erro ao receber dados', err);
      });

    // //exemplo com try e catch
    // const data = fetchTestimonials();
    // try {
    //   console.log('dentro try',data);
    //   setDataTestimony(data);
    // } catch (error) {
    //   console.error('Erro ao buscar testemunhos', error);
    // }
  }, []);

  console.log(dataTestimony.length);

  return(
    <section id="customers" className="testimonials">
      <h3>Nossos clientes</h3>
      <p>Veja o que dizem sobre nós e como nossos bots tem ajudado nossos clientes.</p>
      <div className="testimonyCards myScroll scrollMozilla">
        {
          dataTestimony.map((data, i) => 
            <TestimonialsCard 
              key={i++} 
              avatar={data.avatar}
              name={data.name}
              testimony={data.testimony} />)
        }
      </div>
    </section>
  );
};

export default Testimonials;