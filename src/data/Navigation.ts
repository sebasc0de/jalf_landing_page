import { PriceList, WhatsAppLink, EmailLink } from "../data/Business";
import { Navigation as Props } from "../interfaces/Navigation";

export const Navigation: Props[] = [
  { id: 0, name: "Lista de precios", url: PriceList },
  { id: 1, name: "Hablar por whatsapp", url: WhatsAppLink },
  { id: 2, name: "Contactar", url: EmailLink },
];
