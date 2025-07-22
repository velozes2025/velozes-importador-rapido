import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
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
        register: 'Criar conta',
        logout: 'Sair'
      },
      home: {
        title: 'Encontre o carro perfeito para sua viagem',
        subtitle: 'Encontre e alugue carros em segundos',
        searchPlaceholder: 'Buscar por marca, modelo ou local',
        searchButton: 'Buscar agora',
        featured: 'Em destaque'
      },
      login: {
        title: 'Acesse sua conta',
        button: 'Entrar'
      },
      register: {
        title: 'Criar nova conta',
        button: 'Registrar'
      },
      profile: {
        title: 'Meu Perfil',
        logout: 'Sair'
      },
      footer: {
        company: 'Empresa',
        about: 'Sobre nós',
        contact: 'Contato',
        careers: 'Carreiras',
        support: 'Suporte',
        help: 'Ajuda',
        terms: 'Termos de uso',
        privacy: 'Política de privacidade',
        followUs: 'Siga-nos',
        rights: 'Todos os direitos reservados.'
      },
      listing: {
        day: 'dia'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;