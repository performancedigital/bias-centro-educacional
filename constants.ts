
import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'seg-trabalho',
    title: 'Técnico em Segurança do Trabalho',
    duration: 'CONCLUSÃO EM 6 MESES',
    category: 'Segurança',
    description: 'Torne-se um especialista em prevenção de acidentes e doenças ocupacionais. Você aprenderá a elaborar planos de segurança, aplicar Normas Regulamentadoras (NRs) e garantir a integridade física dos colaboradores em ambientes industriais e corporativos. Essencial para empresas de todos os portes.',
    icon: '🦺'
  },
  {
    id: 'mecanica',
    title: 'Técnico em Mecânica',
    duration: 'CONCLUSÃO EM 6 MESES',
    category: 'Tecnologia',
    description: 'Domine a manutenção de máquinas, sistemas de automação e controle de qualidade industrial. O curso abrange desde o desenho técnico e metrologia até a gestão de processos produtivos complexos. Prepare-se para atuar no coração da indústria com uma formação técnica robusta e prática.',
    icon: '⚙️'
  },
  {
    id: 'farmacia',
    title: 'Técnico em Farmácia',
    duration: 'CONCLUSÃO EM 6 MESES',
    category: 'Saúde',
    description: 'Capacite-se para atuar na manipulação, controle de estoque e assistência na dispensação de medicamentos. Aprenda sobre ética farmacêutica, farmacologia básica e atendimento ao cliente em drogarias, hospitais e unidades de saúde. Um mercado seguro com alta taxa de empregabilidade.',
    icon: '💊'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'William De Jesus',
    role: 'ALUNO FORMADO',
    content: 'Concluí o meu curso de habilitação técnica em meio ambiente pelo Bias Centro educacional, foi uma ótima experiência, pessoal sempre atencioso. Quando vi meu nome e diploma no Sistec fiquei até emocionado❤️',
    avatar: 'https://ui-avatars.com/api/?name=William+De+Jesus&background=0047AB&color=fff'
  },
  {
    id: 2,
    name: 'Lucas O Barbosa',
    role: 'ALUNO SATISFEITO',
    content: 'Gostaria de registrar meu agradecimento e elogio ao excelente atendimento prestado pela atendente Ana Carolina Oliveira. Desde o primeiro contato, ela demonstrou profissionalismo, simpatia e total disposição em ajudar.',
    avatar: 'https://ui-avatars.com/api/?name=Lucas+O+Barbosa&background=FFB800&color=000'
  },
  {
    id: 3,
    name: 'Bruno Correa',
    role: 'LOCAL GUIDE',
    content: 'A atendente Ana super solicita, tinha minhas dúvidas por ser EAD e de outro estado, mas foi bem claro me mandando todos os dados da empresa, as normas e políticas da empresa! Parabéns e feedback positivo pra Ana.',
    avatar: 'https://ui-avatars.com/api/?name=Bruno+Correa&background=002D6B&color=fff'
  }
];

export const WHATSAPP_NUMBER = '+55 31 99112-1377'; 
export const INSTAGRAM_URL = 'https://instagram.com/biascentroeducacional';
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=bias+centro+educacional#lrd=0xa5542172c22513:0x36677310c96dc912,1,,,,';
export const PRICE_INSTALLMENT = '12x de R$ 61,66 NO CARTÃO';
export const FACEBOOK_PIXEL_ID = '876824591991075';
