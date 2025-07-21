// Mock data for featured vehicles
export const mockFeaturedVehicles = [
  {
    id: 'v1',
    title: '2023 Lamborghini Huracán EVO',
    imageUrl: 'https://images.pexels.com/photos/3752269/pexels-photo-3752269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 899,
    currency: '$',
    location: 'Miami Beach, FL',
    rating: 4.9,
    reviewCount: 12,
    category: 'Exotic',
    seats: 2,
    featured: true
  },
  {
    id: 'v2',
    title: '2023 Ferrari F8 Tributo',
    imageUrl: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 999,
    currency: '$',
    location: 'Fort Lauderdale, FL',
    rating: 4.8,
    reviewCount: 8,
    category: 'Exotic',
    seats: 2,
    featured: true
  },
  {
    id: 'v3',
    title: '2023 Yamaha WaveRunner FX Cruiser',
    imageUrl: 'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 299,
    currency: '$',
    location: 'Miami Beach, FL',
    rating: 4.9,
    reviewCount: 15,
    category: 'Jet Ski',
    seats: 3,
    featured: true
  },
  {
    id: 'v4',
    title: '2023 Sea Ray Sundancer 320',
    imageUrl: 'https://images.pexels.com/photos/673030/pexels-photo-673030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 899,
    currency: '$',
    location: 'Miami Marina, FL',
    rating: 4.8,
    reviewCount: 21,
    category: 'Boat',
    seats: 8,
    featured: true
  }
];

// Mock data for all vehicles
export const mockAllVehicles = [
  ...mockFeaturedVehicles,
  {
    id: 'v5',
    title: '2023 Chevrolet Camaro SS',
    imageUrl: 'https://images.pexels.com/photos/7813163/pexels-photo-7813163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 199,
    currency: '$',
    location: 'Tampa, FL',
    rating: 4.7,
    reviewCount: 25,
    category: 'Sports',
    seats: 4
  },
  {
    id: 'v6',
    title: '2023 Sea-Doo RXT-X 300',
    imageUrl: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 249,
    currency: '$',
    location: 'Key West, FL',
    rating: 4.8,
    reviewCount: 19,
    category: 'Jet Ski',
    seats: 2
  },
  {
    id: 'v7',
    title: '2023 Boston Whaler 280 Vantage',
    imageUrl: 'https://images.pexels.com/photos/2611757/pexels-photo-2611757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 799,
    currency: '$',
    location: 'Fort Lauderdale, FL',
    rating: 4.9,
    reviewCount: 17,
    category: 'Boat',
    seats: 10
  },
  {
    id: 'v8',
    title: '2023 Mercedes-AMG GT',
    imageUrl: 'https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 599,
    currency: '$',
    location: 'Coral Gables, FL',
    rating: 4.9,
    reviewCount: 9,
    category: 'Exotic',
    seats: 2
  },
  {
    id: 'v9',
    title: '2023 Kawasaki Ultra 310LX',
    imageUrl: 'https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 279,
    currency: '$',
    location: 'Naples, FL',
    rating: 4.7,
    reviewCount: 23,
    category: 'Jet Ski',
    seats: 3
  },
  {
    id: 'v10',
    title: '2023 Regal 33 SAV',
    imageUrl: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 849,
    currency: '$',
    location: 'Miami Beach, FL',
    rating: 4.8,
    reviewCount: 11,
    category: 'Boat',
    seats: 12
  }
];

// Mock user vehicles
export const mockUserVehicles = [
  {
    id: 'uv1',
    title: '2023 Porsche Cayenne',
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 299,
    currency: '$',
    location: 'Miami, FL',
    rating: 4.8,
    reviewCount: 14,
    category: 'SUV',
    seats: 5
  },
  {
    id: 'uv2',
    title: '2023 Chevrolet Corvette C8',
    imageUrl: 'https://images.pexels.com/photos/8826800/pexels-photo-8826800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 499,
    currency: '$',
    location: 'Miami, FL',
    rating: 4.9,
    reviewCount: 8,
    category: 'Sports',
    seats: 2
  }
];

// Mock reviews
export const mockReviews = [
  {
    id: 'r1',
    userName: 'John D.',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    date: 'May 2023',
    comment: 'Fantastic experience! Very clean and well-maintained. The owner was super friendly and accommodating. Would definitely rent again.'
  },
  {
    id: 'r2',
    userName: 'Sarah M.',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    date: 'April 2023',
    comment: 'Great experience overall. Perfect for our trip. The pickup process was a bit delayed, but otherwise excellent service.'
  },
  {
    id: 'r3',
    userName: 'Michael T.',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    date: 'March 2023',
    comment: 'Amazing rental! Super comfortable and perfect for our needs. The host was very responsive and helpful throughout.'
  }
];

// Mock messages
export const mockMessages = [
  {
    id: 'm1',
    conversationId: 'c1',
    text: 'Hi, I\'m interested in renting your jet ski. Is it available next weekend?',
    time: '2:30 PM',
    isSender: false
  },
  {
    id: 'm2',
    conversationId: 'c1',
    text: 'Hello! Yes, it\'s available from Friday to Sunday next weekend. When would you like to pick it up?',
    time: '2:45 PM',
    isSender: true
  },
  {
    id: 'm3',
    conversationId: 'c1',
    text: 'Great! I would like to pick it up on Friday around 10 AM and return it on Sunday evening. Is that possible?',
    time: '3:00 PM',
    isSender: false
  },
  {
    id: 'm4',
    conversationId: 'c1',
    text: 'That works perfectly for me. I\'ll be available for the pickup at 10 AM on Friday. Looking forward to meeting you!',
    time: '3:15 PM',
    isSender: true
  },
  {
    id: 'm5',
    conversationId: 'c2',
    text: 'Hello, I noticed your boat listing. Does it include safety equipment?',
    time: '11:20 AM',
    isSender: false
  },
  {
    id: 'm6',
    conversationId: 'c2',
    text: 'Hi there! Yes, it comes with all required safety equipment including life jackets, flares, and a first aid kit.',
    time: '11:45 AM',
    isSender: true
  }
];

// Mock contacts
export const mockContacts = [
  {
    id: 'c1',
    name: 'Carlos Rodriguez',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'That works perfectly for me. I\'ll be available for the pickup at 10 AM on Friday.',
    lastMessageTime: '3:15 PM',
    isOnline: true
  },
  {
    id: 'c2',
    name: 'Anna Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'Hi there! Yes, it comes with all required safety equipment.',
    lastMessageTime: '11:45 AM',
    isOnline: false
  },
  {
    id: 'c3',
    name: 'Miguel Santos',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'Thanks for the quick response! I\'ll get back to you soon.',
    lastMessageTime: 'Yesterday',
    isOnline: false
  }
];

// Mock bookings
export const mockBookings = [
  {
    id: 'b1',
    startDate: 'Jun 15, 2023',
    endDate: 'Jun 18, 2023',
    pickupTime: '10:00 AM',
    status: 'upcoming',
    totalPrice: 2697,
    currency: '$',
    vehicle: {
      id: 'v1',
      title: '2023 Yamaha WaveRunner FX Cruiser',
      imageUrl: 'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Miami Beach, FL'
    }
  },
  {
    id: 'b2',
    startDate: 'May 5, 2023',
    endDate: 'May 8, 2023',
    pickupTime: '9:00 AM',
    status: 'past',
    totalPrice: 897,
    currency: '$',
    vehicle: {
      id: 'v5',
      title: '2023 Sea Ray Sundancer 320',
      imageUrl: 'https://images.pexels.com/photos/673030/pexels-photo-673030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Miami Marina, FL'
    },
    hasReview: true
  },
  {
    id: 'b3',
    startDate: 'Apr 20, 2023',
    endDate: 'Apr 22, 2023',
    pickupTime: '11:00 AM',
    status: 'cancelled',
    totalPrice: 1398,
    currency: '$',
    vehicle: {
      id: 'v3',
      title: '2023 Kawasaki Ultra 310LX',
      imageUrl: 'https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Naples, FL'
    }
  }
];