
export interface Course {
  id: string;
  title: string;
  duration: string;
  category: 'Saúde' | 'Tecnologia' | 'Gestão' | 'Segurança';
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FilterState {
  area: string;
  availability: string;
  objective: string;
}
