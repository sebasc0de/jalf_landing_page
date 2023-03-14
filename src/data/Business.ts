import { ChatData } from "../interfaces/Questioner";
import { RRSS as RRSS_Props } from "../interfaces/Business";
import { v4 as uuid } from "uuid";

// Price list
export const PriceList =
  "https://www.dropbox.com/s/jdpa7ydvj030gvg/LISTA%20MAR23%20Profesionales.pdf?dl=0";

// Whatsapp
export const WhatsAppLink =
  "https://api.whatsapp.com/send?phone=+5491130963298&text=Hola%20!%20Vengo%20desde%20la%20web...";

// Email
export const EmailLink = "mailto:jalfarg@gmail.com";

// Social networks
export const RRSS: RRSS_Props[] = [
  {
    id: 1,
    icon: "bx bxl-facebook",
    url: "https://www.facebook.com/jalfarg",
  },
  {
    id: 2,
    icon: "bx bxl-instagram",
    url: "https://www.instagram.com/jalfarg",
  },
  {
    id: 3,
    icon: "bx bxl-tiktok",
    url: "https://www.tiktok.com/@jalfarg",
  },
  {
    id: 4,
    icon: "bx bx-envelope",
    url: EmailLink,
  },
];

// Benefits
export const Benefits = [
  {
    id: 1,
    title: "Envios con garantia",
    desc: "Hacemos envios a todo el pais y los protegemos con nuestra garantia para envios",
  },
  {
    id: 2,
    title: "Descuentos a estudiantes y profesionales",
    desc: "Nuestra lista de precios es exclusiva para estudiantes y profesionales de estetica.",
  },
  {
    id: 3,
    title: "Distribuidores oficiales",
    desc: "Somos distribuidores ",
  },
];

// How it works Section - Steps data
export const Steps = [
  {
    id: 1,
    desc: `Descarga la lista de precios y conoce todos nuestros productos.`,
    img: "/images/Step 1.jpeg",
    title: "Paso 1",
    short_desc: "Conocer los productos",
    videoUrl: "videos/Step 1.mp4",
  },
  {
    id: 2,
    desc: "Haz una lista de los productos que necesitas.",
    img: "/images/Step 2.jpeg",
    title: "Paso 2",
    short_desc: "Elegir lo que necesitas",
    videoUrl: "videos/Step 2.mp4",
  },
  {
    id: 3,
    desc: "Envíanos tu pedido para que podamos coordinar el envio.",
    img: "/images/Step 3.jpeg",
    title: "Paso 3",
    short_desc: "Recibir tu pedido",
    videoUrl: "videos/Step 3.mp4",
  },
];

// Frecuent questions
export const Questions: ChatData[] = [
  {
    id: uuid(),
    question: "De donde son?",
    response:
      "Nos encontramos en Aldo Bonzi, Zona Oeste, La Matanza, Gran Buenos Aires. Hacemos envios a tu domicilio",
  },
  {
    id: uuid(),
    question: "Hacen envios?",
    response:
      "Sisi, hacemos envios a todo Argentina. Podemos enviar el pedido a tu domicilio por motomensajeria o correo.",
  },
  {
    id: uuid(),
    question: "Como hago un pedido?",
    response: "Hola Sebas, contame... Como puedo ayudarte? 😁",
  },
];
