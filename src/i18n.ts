import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.search': 'Search',
      'nav.listings': 'My Listings',
      'nav.bookings': 'Bookings',
      'nav.messages': 'Messages',
      'nav.profile': 'Profile',
      'nav.login': 'Login',
      'nav.register': 'Sign Up',
      'nav.logout': 'Logout',
      
      // Header/Footer
      'app.title': 'VELOZES',
      'app.slogan': 'Rent vehicles and watercraft, make connections',
      'footer.rights': 'All rights reserved',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.support': 'Support',
      
      // Home Page
      'home.title': 'Find your perfect ride or watercraft in Florida',
      'home.subtitle': 'Rent cars, boats, and jet skis directly from locals',
      'home.searchPlaceholder': 'Enter city or ZIP code',
      'home.searchButton': 'Search',
      'home.featured': 'Featured Vehicles',
      'home.howItWorks': 'How It Works',
      'home.step1': 'Find a vehicle',
      'home.step1Desc': 'Browse cars, boats, and jet skis',
      'home.step2': 'Book your ride',
      'home.step2Desc': 'Choose your dates and book instantly',
      'home.step3': 'Enjoy your trip',
      'home.step3Desc': 'Unlock and go with contactless pickup',
      'home.becomeHost': 'Earn money by sharing your vehicles',
      'home.becomeHostDesc': 'Turn your car, boat, or jet ski into income when you\'re not using it',
      'home.listCar': 'List Your Vehicle',
      
      // Search
      'search.title': 'Find vehicles near you',
      'search.filter': 'Filter',
      'search.sort': 'Sort By',
      'search.price': 'Price',
      'search.date': 'Date',
      'search.carType': 'Vehicle Type',
      'search.distance': 'Distance',
      'search.features': 'Features',
      'search.noResults': 'No vehicles found',
      'search.results': 'Results',
      'search.apply': 'Apply Filters',
      'search.reset': 'Reset',
      
      // Vehicle types
      'vehicle.car': 'Car',
      'vehicle.suv': 'SUV',
      'vehicle.truck': 'Truck',
      'vehicle.van': 'Van',
      'vehicle.luxury': 'Luxury',
      'vehicle.convertible': 'Convertible',
      'vehicle.exotic': 'Exotic',
      'vehicle.boat': 'Boat',
      'vehicle.jet ski': 'Jet Ski',
      
      // Listing
      'listing.day': 'day',
      'listing.book': 'Book Now',
      'listing.contact': 'Contact Owner',
      'listing.details': 'Details',
      'listing.features': 'Features',
      'listing.location': 'Location',
      'listing.reviews': 'Reviews',
      'listing.availability': 'Availability',
      'listing.similar': 'Similar Vehicles',
      
      // Profile
      'profile.title': 'My Profile',
      'profile.edit': 'Edit Profile',
      'profile.verify': 'Verify Identity',
      'profile.listings': 'My Listings',
      'profile.bookings': 'My Bookings',
      'profile.inbox': 'Messages',
      'profile.settings': 'Settings',
      'profile.addListing': 'Add New Listing',
      'profile.logout': 'Logout',
      
      // Authentication
      'auth.emailPlaceholder': 'Email',
      'auth.passwordPlaceholder': 'Password',
      'auth.confirmPassword': 'Confirm Password',
      'auth.namePlaceholder': 'Full Name',
      'auth.phonePlaceholder': 'Phone Number',
      'auth.login': 'Login',
      'auth.register': 'Sign Up',
      'auth.forgotPassword': 'Forgot Password?',
      'auth.noAccount': 'Don\'t have an account?',
      'auth.hasAccount': 'Already have an account?',
      'auth.verificationNeeded': 'Identity verification needed',
      'login.title': 'Access your account',
      'login.button': 'Login',
      'register.title': 'Create new account',
      'register.button': 'Register',
      
      // Bookings
      'booking.upcoming': 'Upcoming Bookings',
      'booking.past': 'Past Bookings',
      'booking.cancel': 'Cancel Booking',
      'booking.modify': 'Modify Booking',
      'booking.leaveReview': 'Leave a Review',
      'booking.pickupInfo': 'Pickup Information',
      'booking.total': 'Total',
      
      // Messages
      'messages.inbox': 'Inbox',
      'messages.sent': 'Sent',
      'messages.compose': 'New Message',
      'messages.reply': 'Reply',
      'messages.noMessages': 'No messages yet',
      
      // Common actions
      'action.save': 'Save',
      'action.cancel': 'Cancel',
      'action.delete': 'Delete',
      'action.edit': 'Edit',
      'action.confirm': 'Confirm',
      'action.back': 'Back',
      'action.next': 'Next',
      'action.search': 'Search',
      
      // Common errors
      'error.required': 'This field is required',
      'error.email': 'Please enter a valid email',
      'error.password': 'Password must be at least 8 characters',
      'error.passwordMatch': 'Passwords do not match',
      'error.generic': 'Something went wrong',
      'error.unauthorized': 'You must be logged in',
      
      // Footer sections
      'footer.company': 'Company',
      'footer.about': 'About',
      'footer.contact': 'Contact',
      'footer.careers': 'Careers',
      'footer.help': 'Help',
      'footer.followUs': 'Follow Us'
    }
  },
  pt: {
    translation: {
      // Navigation
      'nav.home': 'Início',
      'nav.search': 'Buscar',
      'nav.listings': 'Meus Anúncios',
      'nav.bookings': 'Reservas',
      'nav.messages': 'Mensagens',
      'nav.profile': 'Perfil',
      'nav.login': 'Entrar',
      'nav.register': 'Cadastrar',
      'nav.logout': 'Sair',
      
      // Header/Footer
      'app.title': 'VELOZES',
      'app.slogan': 'Alugue veículos e embarcações, faça conexões',
      'footer.rights': 'Todos os direitos reservados',
      'footer.privacy': 'Política de Privacidade',
      'footer.terms': 'Termos de Serviço',
      'footer.support': 'Suporte',
      
      // Home Page
      'home.title': 'Encontre seu veículo ou embarcação perfeita na Florida',
      'home.subtitle': 'Alugue carros, barcos e jet skis diretamente de locais',
      'home.searchPlaceholder': 'Digite cidade ou CEP',
      'home.searchButton': 'Buscar',
      'home.featured': 'Veículos em Destaque',
      'home.howItWorks': 'Como Funciona',
      'home.step1': 'Encontre um veículo',
      'home.step1Desc': 'Navegue por carros, barcos e jet skis',
      'home.step2': 'Reserve sua viagem',
      'home.step2Desc': 'Escolha suas datas e reserve instantaneamente',
      'home.step3': 'Aproveite sua viagem',
      'home.step3Desc': 'Desbloqueie e vá com retirada sem contato',
      'home.becomeHost': 'Ganhe dinheiro compartilhando seus veículos',
      'home.becomeHostDesc': 'Transforme seu carro, barco ou jet ski em renda quando não estiver usando',
      'home.listCar': 'Anuncie Seu Veículo',
      
      // Search
      'search.title': 'Encontre veículos perto de você',
      'search.filter': 'Filtrar',
      'search.sort': 'Ordenar Por',
      'search.price': 'Preço',
      'search.date': 'Data',
      'search.carType': 'Tipo de Veículo',
      'search.distance': 'Distância',
      'search.features': 'Características',
      'search.noResults': 'Nenhum veículo encontrado',
      'search.results': 'Resultados',
      'search.apply': 'Aplicar Filtros',
      'search.reset': 'Redefinir',
      
      // Vehicle types
      'vehicle.car': 'Carro',
      'vehicle.suv': 'SUV',
      'vehicle.truck': 'Caminhão',
      'vehicle.van': 'Van',
      'vehicle.luxury': 'Luxo',
      'vehicle.convertible': 'Conversível',
      'vehicle.exotic': 'Exótico',
      'vehicle.boat': 'Barco',
      'vehicle.jet ski': 'Jet Ski',
      
      // Listing
      'listing.day': 'dia',
      'listing.book': 'Reservar Agora',
      'listing.contact': 'Contatar Proprietário',
      'listing.details': 'Detalhes',
      'listing.features': 'Características',
      'listing.location': 'Localização',
      'listing.reviews': 'Avaliações',
      'listing.availability': 'Disponibilidade',
      'listing.similar': 'Veículos Similares',
      
      // Profile
      'profile.title': 'Meu Perfil',
      'profile.edit': 'Editar Perfil',
      'profile.verify': 'Verificar Identidade',
      'profile.listings': 'Meus Anúncios',
      'profile.bookings': 'Minhas Reservas',
      'profile.inbox': 'Mensagens',
      'profile.settings': 'Configurações',
      'profile.addListing': 'Adicionar Novo Anúncio',
      'profile.logout': 'Sair',
      
      // Authentication
      'auth.emailPlaceholder': 'Email',
      'auth.passwordPlaceholder': 'Senha',
      'auth.confirmPassword': 'Confirmar Senha',
      'auth.namePlaceholder': 'Nome Completo',
      'auth.phonePlaceholder': 'Número de Telefone',
      'auth.login': 'Entrar',
      'auth.register': 'Cadastrar',
      'auth.forgotPassword': 'Esqueceu a senha?',
      'auth.noAccount': 'Não tem uma conta?',
      'auth.hasAccount': 'Já tem uma conta?',
      'auth.verificationNeeded': 'Verificação de identidade necessária',
      'login.title': 'Acesse sua conta',
      'login.button': 'Entrar',
      'register.title': 'Criar nova conta',
      'register.button': 'Cadastrar',
      
      // Bookings
      'booking.upcoming': 'Próximas Reservas',
      'booking.past': 'Reservas Passadas',
      'booking.cancel': 'Cancelar Reserva',
      'booking.modify': 'Modificar Reserva',
      'booking.leaveReview': 'Deixar uma Avaliação',
      'booking.pickupInfo': 'Informações de Retirada',
      'booking.total': 'Total',
      
      // Messages
      'messages.inbox': 'Caixa de Entrada',
      'messages.sent': 'Enviadas',
      'messages.compose': 'Nova Mensagem',
      'messages.reply': 'Responder',
      'messages.noMessages': 'Ainda não há mensagens',
      
      // Common actions
      'action.save': 'Salvar',
      'action.cancel': 'Cancelar',
      'action.delete': 'Deletar',
      'action.edit': 'Editar',
      'action.confirm': 'Confirmar',
      'action.back': 'Voltar',
      'action.next': 'Próximo',
      'action.search': 'Buscar',
      
      // Common errors
      'error.required': 'Este campo é obrigatório',
      'error.email': 'Por favor digite um email válido',
      'error.password': 'Senha deve ter pelo menos 8 caracteres',
      'error.passwordMatch': 'Senhas não conferem',
      'error.generic': 'Algo deu errado',
      'error.unauthorized': 'Você deve estar logado',
      
      // Footer sections
      'footer.company': 'Empresa',
      'footer.about': 'Sobre',
      'footer.contact': 'Contato',
      'footer.careers': 'Carreiras',
      'footer.help': 'Ajuda',
      'footer.followUs': 'Siga-nos'
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.search': 'Buscar',
      'nav.listings': 'Mis Anuncios',
      'nav.bookings': 'Reservas',
      'nav.messages': 'Mensajes',
      'nav.profile': 'Perfil',
      'nav.login': 'Iniciar Sesión',
      'nav.register': 'Registrarse',
      'nav.logout': 'Cerrar Sesión',
      
      // Header/Footer
      'app.title': 'VELOZES',
      'app.slogan': 'Alquila vehículos y embarcaciones, crea conexiones',
      'footer.rights': 'Todos los derechos reservados',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos de Servicio',
      'footer.support': 'Soporte',
      
      // Home Page
      'home.title': 'Encuentra tu vehículo o embarcación perfecta en Florida',
      'home.subtitle': 'Alquila coches, barcos y motos acuáticas directamente de locales',
      'home.searchPlaceholder': 'Ingresa ciudad o código postal',
      'home.searchButton': 'Buscar',
      'home.featured': 'Vehículos Destacados',
      'home.howItWorks': 'Cómo Funciona',
      'home.step1': 'Encuentra un vehículo',
      'home.step1Desc': 'Explora coches, barcos y motos acuáticas',
      'home.step2': 'Reserva tu viaje',
      'home.step2Desc': 'Elige tus fechas y reserva al instante',
      'home.step3': 'Disfruta tu viaje',
      'home.step3Desc': 'Desbloquea y ve con recogida sin contacto',
      'home.becomeHost': 'Gana dinero compartiendo tus vehículos',
      'home.becomeHostDesc': 'Convierte tu coche, barco o moto acuática en ingresos cuando no lo uses',
      'home.listCar': 'Anuncia Tu Vehículo',
      
      // Search
      'search.title': 'Encuentra vehículos cerca de ti',
      'search.filter': 'Filtrar',
      'search.sort': 'Ordenar Por',
      'search.price': 'Precio',
      'search.date': 'Fecha',
      'search.carType': 'Tipo de Vehículo',
      'search.distance': 'Distancia',
      'search.features': 'Características',
      'search.noResults': 'No se encontraron vehículos',
      'search.results': 'Resultados',
      'search.apply': 'Aplicar Filtros',
      'search.reset': 'Reiniciar',
      
      // Vehicle types
      'vehicle.car': 'Coche',
      'vehicle.suv': 'SUV',
      'vehicle.truck': 'Camioneta',
      'vehicle.van': 'Furgoneta',
      'vehicle.luxury': 'Lujo',
      'vehicle.convertible': 'Convertible',
      'vehicle.exotic': 'Exótico',
      'vehicle.boat': 'Barco',
      'vehicle.jet ski': 'Moto Acuática',
      
      // Listing
      'listing.day': 'día',
      'listing.book': 'Reservar Ahora',
      'listing.contact': 'Contactar Propietario',
      'listing.details': 'Detalles',
      'listing.features': 'Características',
      'listing.location': 'Ubicación',
      'listing.reviews': 'Reseñas',
      'listing.availability': 'Disponibilidad',
      'listing.similar': 'Vehículos Similares',
      
      // Profile
      'profile.title': 'Mi Perfil',
      'profile.edit': 'Editar Perfil',
      'profile.verify': 'Verificar Identidad',
      'profile.listings': 'Mis Anuncios',
      'profile.bookings': 'Mis Reservas',
      'profile.inbox': 'Mensajes',
      'profile.settings': 'Configuración',
      'profile.addListing': 'Añadir Nuevo Anuncio',
      'profile.logout': 'Cerrar Sesión',
      
      // Authentication
      'auth.emailPlaceholder': 'Correo Electrónico',
      'auth.passwordPlaceholder': 'Contraseña',
      'auth.confirmPassword': 'Confirmar Contraseña',
      'auth.namePlaceholder': 'Nombre Completo',
      'auth.phonePlaceholder': 'Número de Teléfono',
      'auth.login': 'Iniciar Sesión',
      'auth.register': 'Registrarse',
      'auth.forgotPassword': '¿Olvidaste tu Contraseña?',
      'auth.noAccount': '¿No tienes una cuenta?',
      'auth.hasAccount': '¿Ya tienes una cuenta?',
      'auth.verificationNeeded': 'Se necesita verificación de identidad',
      'login.title': 'Accede a tu cuenta',
      'login.button': 'Iniciar Sesión',
      'register.title': 'Crear nueva cuenta',
      'register.button': 'Registrarse',
      
      // Bookings
      'booking.upcoming': 'Reservas Próximas',
      'booking.past': 'Reservas Pasadas',
      'booking.cancel': 'Cancelar Reserva',
      'booking.modify': 'Modificar Reserva',
      'booking.leaveReview': 'Dejar una Reseña',
      'booking.pickupInfo': 'Información de Recogida',
      'booking.total': 'Total',
      
      // Messages
      'messages.inbox': 'Bandeja de Entrada',
      'messages.sent': 'Enviados',
      'messages.compose': 'Nuevo Mensaje',
      'messages.reply': 'Responder',
      'messages.noMessages': 'Aún no hay mensajes',
      
      // Common actions
      'action.save': 'Guardar',
      'action.cancel': 'Cancelar',
      'action.delete': 'Eliminar',
      'action.edit': 'Editar',
      'action.confirm': 'Confirmar',
      'action.back': 'Atrás',
      'action.next': 'Siguiente',
      'action.search': 'Buscar',
      
      // Common errors
      'error.required': 'Este campo es obligatorio',
      'error.email': 'Por favor ingresa un correo válido',
      'error.password': 'La contraseña debe tener al menos 8 caracteres',
      'error.passwordMatch': 'Las contraseñas no coinciden',
      'error.generic': 'Algo salió mal',
      'error.unauthorized': 'Debes iniciar sesión',
      
      // Footer sections
      'footer.company': 'Empresa',
      'footer.about': 'Acerca de',
      'footer.contact': 'Contacto',
      'footer.careers': 'Carreras',
      'footer.help': 'Ayuda',
      'footer.followUs': 'Síguenos'
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