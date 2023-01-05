export const Testimonials: Testimonial[] = [
  {
    name: "Samanta Rodriguez",
    desc: "excelentes productos!! excelente atención de Sebastián y Jaime, muchas gracias por asesorarme!!!",
    image: "/testimonials/Testimonial 1.png",
  },
  {
    name: "Vale Calzetta",
    desc: "excelente calidad, la entrega a domicilio sin cargo, en horario y todo impecable!!!!",
    image: "/testimonials/Testimonial 2.png",
  },
  {
    name: "Veronica Truyol",
    desc: "Excelente relación calidad y precio",
    image: "/testimonials/Testimonial 3.png",
  },
  {
    name: "Silvia Macedra",
    desc: "15 años comprándole cera excelente!",
    image: "/testimonials/Testimonial 4.png",
  },
];

export interface Testimonial {
  name: string;
  desc: string;
  image: string;
}
