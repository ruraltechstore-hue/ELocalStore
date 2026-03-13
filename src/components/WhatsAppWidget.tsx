import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919492036363?text=Hi, I want to know more about eLocal Store franchise', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all z-40 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
