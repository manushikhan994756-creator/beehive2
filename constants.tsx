
import { NavItem, RoomPackage, Activity, Destination } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Resort', path: '/resort' },
  { label: 'Nearby', path: '/nearby' },
  { label: 'Activities', path: '/activities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Tariff', path: '/tariff' },
  { label: 'Booking', path: '/booking' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_IMAGES = [
  'https://beehivewayanad.com/images/banner5.png',
  'https://beehivewayanad.com/images/banner2.png',
  'https://beehivewayanad.com/images/banner3.png'
];

export const ROOMS: RoomPackage[] = [
  { 
    title: 'Family Room', 
    price: '₹5,500 / night', 
    image: 'https://beehivewayanad.com/images/f1.png',
    description: 'Spacious AC accommodation perfect for family bonding with modern en-suite bathrooms.'
  },
  { 
    title: 'Private Cottage', 
    price: '₹4,500 / night', 
    image: 'https://beehivewayanad.com/images/f2.png',
    description: 'Intimate setting surrounded by coffee plantations, offering ultimate privacy and peace.'
  },
  { 
    title: 'Tent Stay', 
    price: '₹1,500 / night', 
    image: 'https://beehivewayanad.com/images/f3.png',
    description: 'Rustic experience for adventurous backpackers looking to connect directly with nature.'
  }
];

export const EXPERIENCES = [
  {
    title: 'AC & Non-AC Rooms',
    description: 'Elegantly designed sanctuaries tailored for comfort and rest.',
    image: 'https://beehivewayanad.com/images/f1.png'
  },
  {
    title: 'Outdoor Sitting Areas',
    description: 'Sip your morning brew while soaking in the plantation vibes.',
    image: 'https://beehivewayanad.com/images/resort.jpg'
  },
  {
    title: 'Natural Pond Views',
    description: 'Reflections of tranquility right outside your doorstep.',
    image: 'https://beehivewayanad.com/images/banner2.png'
  },
  {
    title: 'Tent Stays',
    description: 'An authentic backpacker experience under the stars.',
    image: 'https://beehivewayanad.com/images/f3.png'
  },
  {
    title: 'Homely Food & Private Dining',
    description: 'Farm-to-table flavors served with Wayanad hospitality.',
    image: 'https://beehivewayanad.com/images/banner5.png'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    title: 'Karapuzha Dam',
    description: 'One of the largest earth dams in India, offering breathtaking sunset views and a peaceful environment for evening strolls.',
    image: 'https://beehivewayanad.com/images/near-destination3.jpg'
  },
  {
    title: 'Edakkal Caves',
    description: 'Ancient rock etchings dating back to the Neolithic period. A steep trek that rewards you with prehistoric wonder.',
    image: 'https://beehivewayanad.com/images/near-destination2.jpg'
  },
  {
    title: 'Phantom Rock',
    description: 'A natural metamorphic rock structure resembling a skull, standing tall amidst the lush greenery of Wayanad.',
    image: 'https://beehivewayanad.com/images/near-destination.jpg'
  },
  {
    title: 'Cheengeri Hills',
    description: 'A trekking paradise offering panoramic views of the Western Ghats, perfect for sunrise enthusiasts.',
    image: 'https://beehivewayanad.com/images/near-destination3.jpg'
  },
  {
    title: 'Banasura Sagar Dam',
    description: 'The largest earth dam in India and the second largest in Asia, known for its scenic beauty and speed boating.',
    image: 'https://picsum.photos/seed/banasura/1200/800'
  }
];

export const ACTIVITIES: Activity[] = [
  { title: 'Horse Riding', image: 'https://beehivewayanad.com/images/f4.png' },
  { title: 'Campfire with Music', image: 'https://picsum.photos/seed/campfire/800/1000' },
  { title: 'Tent Stay', image: 'https://beehivewayanad.com/images/f3.png' },
  { title: 'Steam Bath & Jacuzzi', image: 'https://picsum.photos/seed/spa/800/1000' },
  { title: 'Ayurveda Spa', image: 'https://picsum.photos/seed/ayurveda/800/1000' },
  { title: 'Fishing', image: 'https://picsum.photos/seed/fishing/800/1000' },
  { title: 'Boat Ride', image: 'https://picsum.photos/seed/boat/800/1000' },
  { title: 'Play Area', image: 'https://picsum.photos/seed/play/800/1000' }
];

export const FACILITIES_IMAGES = [
  'https://beehivewayanad.com/images/f1.png',
  'https://beehivewayanad.com/images/f2.png',
  'https://beehivewayanad.com/images/f3.png',
  'https://beehivewayanad.com/images/f4.png'
];

export const COLORS = {
  deepForest: '#0F2A1D',
  coffeeBrown: '#3B2F2F',
  honeyGold: '#C9A44C',
  softSand: '#EFE9DD',
  mistWhite: '#F8F8F6',
  charcoal: '#1C1C1C',
};
