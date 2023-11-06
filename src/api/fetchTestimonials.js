const fetchTestimonials = async () => {
  const testimonials = await fetch('src/api/testimonials.json');
  const data = await testimonials.JSON();
  return data.testimonials;
};

export default fetchTestimonials;
