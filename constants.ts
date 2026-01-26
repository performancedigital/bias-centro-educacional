
import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'enfermagem',
    title: 'Técnico em Enfermagem',
    duration: 'Conclusão em até 24 meses',
    category: 'Saúde',
    description: 'A profissão que nunca para. Estude com simuladores e teoria 100% online com suporte total.',
    icon: '🩺'
  },
  {
    id: 'radiologia',
    title: 'Técnico em Radiologia',
    duration: 'Conclusão em 18 meses',
    category: 'Saúde',
    description: 'Alta demanda em hospitais e clínicas. Domine a teoria do diagnóstico por imagem de casa.',
    icon: '🦴'
  },
  {
    id: 'seg-trabalho',
    title: 'Segurança do Trabalho',
    duration: 'Conclusão em 12 meses',
    category: 'Segurança',
    description: 'Torne-se indispensável para as empresas. Foco total em normas regulamentadoras atualizadas.',
    icon: '🦺'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Juliana Mendes',
    role: 'Técnica em Estética',
    content: 'Pensei que por ser online seria difícil, mas a plataforma da BIAS é incrível. Já estou atendendo minhas clientes!',
    avatar: 'https://i.pravatar.cc/150?u=ju'
  },
  {
    id: 2,
    name: 'Ricardo Alves',
    role: 'Técnico por Competência (Eletrotécnica)',
    content: 'Trabalhava há 10 anos na área sem diploma. Com a BIAS, consegui minha certificação em 45 dias apenas comprovando minha experiência.',
    avatar: 'https://i.pravatar.cc/150?u=ri'
  }
];

export const WHATSAPP_NUMBER = '5511999999999'; 
export const INSTAGRAM_URL = 'https://instagram.com/biascentroeducacional';
export const PRICE_INSTALLMENT = '12x de R$ 61,66';
