
import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'seg-trabalho',
    title: 'Técnico em Segurança do Trabalho',
    duration: 'CONCLUSÃO EM 6 MESES',
    category: 'Segurança',
    description: 'Proteja vidas e garanta a conformidade legal nas empresas. Curso com foco em NRs atualizadas.',
    icon: '🦺'
  },
  {
    id: 'mecanica',
    title: 'Técnico em Mecânica',
    duration: 'CONCLUSÃO EM 6 MESES',
    category: 'Tecnologia',
    description: 'Domine processos industriais, maintenance e projetos. Alta demanda no setor industrial.',
    icon: '⚙️'
  },
  {
    id: 'farmacia',
    title: 'Técnico em Farmácia',
    duration: 'CONCLUSÃO EM 6 MESES',
    category: 'Saúde',
    description: 'Atue em drogarias, farmácias de manipulação e hospitais. Mercado em constante crescimento.',
    icon: '💊'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Alberto',
    role: 'ALUNO CERTIFICADO',
    content: 'A BIAS facilitou muito minha formação. O conteúdo online é direto ao ponto e o suporte é nota 10!',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    id: 2,
    name: 'Fernanda Lima',
    role: 'ALUNA CERTIFICADA',
    content: 'Consegui meu emprego na farmácia do bairro antes mesmo de terminar o curso. O diploma é muito respeitado.',
    avatar: 'https://i.pravatar.cc/150?u=fernanda'
  },
  {
    id: 3,
    name: 'João Pedro',
    role: 'ALUNO CERTIFICADO',
    content: 'Processo rápido e transparente. Consegui meu registro no conselho em tempo recorde!',
    avatar: 'https://i.pravatar.cc/150?u=joao'
  }
];

export const WHATSAPP_NUMBER = '553197690284'; 
export const INSTAGRAM_URL = 'https://instagram.com/biascentroeducacional';
export const PRICE_INSTALLMENT = '12x de R$ 61,66 NO CARTÃO';
export const FACEBOOK_PIXEL_ID = '876824591991075';
