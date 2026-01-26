
import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'seg-trabalho',
    title: 'Técnico em Segurança do Trabalho',
    duration: 'Conclusão em 12 meses',
    category: 'Segurança',
    description: 'Proteja vidas e garanta a conformidade legal nas empresas. Curso com foco em NRs atualizadas.',
    icon: '🦺'
  },
  {
    id: 'mecanica',
    title: 'Técnico em Mecânica',
    duration: 'Conclusão em 18 meses',
    category: 'Tecnologia',
    description: 'Domine processos industriais, manutenção e projetos. Alta demanda no setor industrial.',
    icon: '⚙️'
  },
  {
    id: 'farmacia',
    title: 'Técnico em Farmácia',
    duration: 'Conclusão em 18 meses',
    category: 'Saúde',
    description: 'Atue em drogarias, farmácias de manipulação e hospitais. Mercado em constante crescimento.',
    icon: '💊'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Alberto',
    role: 'Técnico em Segurança do Trabalho',
    content: 'A BIAS facilitou muito minha formação. O conteúdo online é direto ao ponto e o suporte é nota 10!',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    id: 2,
    name: 'Fernanda Lima',
    role: 'Técnica em Farmácia',
    content: 'Consegui meu emprego na farmácia do bairro antes mesmo de terminar o curso. O diploma é muito respeitado.',
    avatar: 'https://i.pravatar.cc/150?u=fernanda'
  },
  {
    id: 3,
    name: 'João Pedro',
    role: 'Técnico por Competência',
    content: 'Processo rápido e transparente. Consegui meu registro no conselho em tempo recorde!',
    avatar: 'https://i.pravatar.cc/150?u=joao'
  }
];

export const WHATSAPP_NUMBER = '553197690284'; 
export const INSTAGRAM_URL = 'https://instagram.com/biascentroeducacional';
export const PRICE_INSTALLMENT = '12x de R$ 61,66';
