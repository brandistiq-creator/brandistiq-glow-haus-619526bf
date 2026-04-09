import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "385958280800";
  const url = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktirajte nas putem WhatsAppa"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
