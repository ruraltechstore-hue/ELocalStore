import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/91${CONTACT_INFO.phone}?text=Hi, I want to know more about eLocal Store franchise`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
