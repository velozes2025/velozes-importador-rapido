import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      app: {
        title: 'VELOZES',
        slogan: 'Fast and secure car rental'
      },
      nav: {
        home: 'Home',
        search: 'Search',
        bookings: 'Bookings',
        messages: 'Messages',
        profile: 'Profile',
        login: 'Login',
        register: 'Register',
        logout: 'Logout'
      },
      home: {
        title: 'Find the perfect ride',
        subtitle: 'Rent fast. Drive smart.',
        searchPlaceholder: 'Where do you want to pick up?',
        searchButton: 'Search',
        featured: 'Featured',
        howItWorks: 'How It Works',
        step1: 'Search',
        step1Desc: 'Find the perfect vehicle for your needs',
        step2: 'Book',
        step2Desc: 'Choose your dates and book instantly',
        step3: 'Drive',
        step3Desc: 'Pick up and enjoy your ride',
        becomeHost: 'Earn money sharing your car',
        becomeHostDesc: 'Turn your car into a money-making opportunity',
        listCar: 'List Your Car'
      },
      login: {
        title: 'Access your account',
        button: 'Login'
      },
      register: {
        title: 'Create new account',
        button: 'Register'
      },
      profile: {
        title: 'My Profile',
        logout: 'Logout'
      },
      footer: {
        company: 'Company',
        about: 'About',
        contact: 'Contact',
        careers: 'Careers',
        support: 'Support',
        help: 'Help',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        followUs: 'Follow Us',
        rights: 'All rights reserved.'
      },
      listing: {
        day: 'day'
      },
      vehicle: {
        car: 'Car',
        suv: 'SUV',
        boat: 'Boat',
        'jet ski': 'Jet Ski',
        luxury: 'Luxury',
        convertible: 'Convertible',
        exotic: 'Exotic'
      }
    }
  },
  pt: {
    translation: {
      app: {
        title: 'VELOZES',
        slogan: 'Aluguel de carros rápido e seguro'
      },
      nav: {
        home: 'Início',
        search: 'Buscar',
        bookings: 'Reservas',
        messages: 'Mensagens',
        profile: 'Perfil',
        login: 'Entrar',
        register: 'Cadastrar',
        logout: 'Sair'
      },
      home: {
        title: 'Encontre o carro ideal',
        subtitle: 'Alugue rápido. Dirija com inteligência.',
        searchPlaceholder: 'Onde deseja retirar?',
        searchButton: 'Buscar',
        featured: 'Em destaque',
        howItWorks: 'Como Funciona',
        step1: 'Busque',
        step1Desc: 'Encontre o veículo perfeito para suas necessidades',
        step2: 'Reserve',
        step2Desc: 'Escolha suas datas e reserve instantaneamente',
        step3: 'Dirija',
        step3Desc: 'Retire e aproveite sua viagem',
        becomeHost: 'Ganhe dinheiro compartilhando seu carro',
        becomeHostDesc: 'Transforme seu carro em uma oportunidade de renda',
        listCar: 'Anunciar Seu Carro'
      },
      login: {
        title: 'Acesse sua conta',
        button: 'Entrar'
      },
      register: {
        title: 'Criar nova conta',
        button: 'Cadastrar'
      },
      profile: {
        title: 'Meu Perfil',
        logout: 'Sair'
      },
      footer: {
        company: 'Empresa',
        about: 'Sobre',
        contact: 'Contato',
        careers: 'Carreiras',
        support: 'Suporte',
        help: 'Ajuda',
        terms: 'Termos de Serviço',
        privacy: 'Política de Privacidade',
        followUs: 'Siga-nos',
        rights: 'Todos os direitos reservados.'
      },
      listing: {
        day: 'dia'
      },
      vehicle: {
        car: 'Carro',
        suv: 'SUV',
        boat: 'Barco',
        'jet ski': 'Jet Ski',
        luxury: 'Luxo',
        convertible: 'Conversível',
        exotic: 'Exótico'
      }
    }
  },
  es: {
    translation: {
      app: {
        title: 'VELOZES',
        slogan: 'Alquiler de autos rápido y seguro'
      },
      nav: {
        home: 'Inicio',
        search: 'Buscar',
        bookings: 'Reservas',
        messages: 'Mensajes',
        profile: 'Perfil',
        login: 'Iniciar sesión',
        register: 'Registrarse',
        logout: 'Cerrar sesión'
      },
      home: {
        title: 'Encuentra el auto ideal',
        subtitle: 'Alquila rápido. Maneja con inteligencia.',
        searchPlaceholder: '¿Dónde desea recoger?',
        searchButton: 'Buscar',
        featured: 'Destacado',
        howItWorks: 'Cómo Funciona',
        step1: 'Buscar',
        step1Desc: 'Encuentra el vehículo perfecto para tus necesidades',
        step2: 'Reservar',
        step2Desc: 'Elige tus fechas y reserva al instante',
        step3: 'Conducir',
        step3Desc: 'Recoge y disfruta tu viaje',
        becomeHost: 'Gana dinero compartiendo tu auto',
        becomeHostDesc: 'Convierte tu auto en una oportunidad de ingresos',
        listCar: 'Listar Tu Auto'
      },
      login: {
        title: 'Accede a tu cuenta',
        button: 'Iniciar sesión'
      },
      register: {
        title: 'Crear nueva cuenta',
        button: 'Registrarse'
      },
      profile: {
        title: 'Mi Perfil',
        logout: 'Cerrar sesión'
      },
      footer: {
        company: 'Empresa',
        about: 'Acerca de',
        contact: 'Contacto',
        careers: 'Carreras',
        support: 'Soporte',
        help: 'Ayuda',
        terms: 'Términos de Servicio',
        privacy: 'Política de Privacidad',
        followUs: 'Síguenos',
        rights: 'Todos los derechos reservados.'
      },
      listing: {
        day: 'día'
      },
      vehicle: {
        car: 'Auto',
        suv: 'SUV',
        boat: 'Barco',
        'jet ski': 'Moto de Agua',
        luxury: 'Lujo',
        convertible: 'Convertible',
        exotic: 'Exótico'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: undefined, // Let i18next detect language
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;