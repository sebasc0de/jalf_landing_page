import { WhatsAppLink } from "../data/Business";

export const WhatsApp = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={WhatsAppLink}
      className="whatsapp"
    >
      Hablar por whatsApp
      <i className="bx bxl-whatsapp"></i>
    </a>
  );
};
