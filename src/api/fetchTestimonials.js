const fetchTestimonials = async () => {
  const testimonials = await fetch('../../public/testimonials.json');
  const data = await testimonials.json();
  return data.testimonials;
};

export default fetchTestimonials;
