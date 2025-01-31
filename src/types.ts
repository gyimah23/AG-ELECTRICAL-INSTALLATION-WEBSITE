export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

export interface ChatbotResponse {
  question: string;
  answer: string;
}