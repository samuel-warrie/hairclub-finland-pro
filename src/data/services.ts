import { Scissors, CircleDot, Baby, Palette, Sparkles, Waves, Wind, Heart } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: any;
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'premium-haircut',
    title: 'Premium Haircut',
    description: 'Classic cut with a luxurious 15-minute head and shoulder massage. Experience the ultimate grooming session with expert styling and total relaxation.',
    price: '€49.90',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'classic-haircut',
    title: 'Classic Haircut',
    description: 'Complete grooming package including professional cut, wash, eyebrow trim, and nose & ear hair trimming. Everything you need for a polished look.',
    price: '€39.90',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'basic-haircut',
    title: 'Basic Haircut',
    description: 'Clean, professional cut tailored to your style. Perfect for maintaining your look with precision and care.',
    price: '€37.90',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'beard-styling',
    title: 'Beard Styling',
    description: 'Expert beard trimming and shaping to complement your facial features. From subtle refinement to complete redesign.',
    price: '€29.90',
    icon: CircleDot,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'traditional-shave',
    title: 'Traditional Shave',
    description: 'Experience the art of traditional barbering with a hot towel shave. Smooth, close shave using premium products and classic techniques.',
    price: '€34.90',
    icon: CircleDot,
    image: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'hair-beard-combo',
    title: 'Hair + Beard Combo',
    description: 'Complete grooming package combining haircut and beard styling. Save time and look sharp with our signature combination service.',
    price: '€64.90',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'childrens-haircut',
    title: "Children's Haircut",
    description: 'Gentle, patient haircuts for children under 10 years. We create a comfortable, fun environment so kids leave happy with their new style.',
    price: '€29.90',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&q=80',
    category: 'Barber Services',
  },
  {
    id: 'salon-haircut',
    title: 'Salon hair cut for women',
    description: 'Professional salon styling with precision cutting techniques. Perfect for longer hair and advanced styling needs.',
    price: '€59.90',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80',
    category: 'Salon Services',
  },
  {
    id: 'single-color',
    title: 'Single Color',
    description: 'Full head color application with premium products. Achieve vibrant, lasting color with expert application and care.',
    price: '€89.90',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    category: 'Color Services',
  },
  {
    id: 'multi-color',
    title: 'Multi-Color Highlights',
    description: 'Advanced multi-dimensional color techniques for stunning depth and dimension. Create a unique, eye-catching look with expert color blending.',
    price: '€189.90',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    category: 'Color Services',
  },
  {
    id: 'color-removal',
    title: 'Color Removal',
    description: 'Safe, professional color correction and removal. Reset your hair color with care to prepare for your next transformation.',
    price: '€159.90',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1562322140-8baeacacf450?w=800&q=80',
    category: 'Color Services',
  },
  {
    id: 'highlights',
    title: 'Highlights',
    description: 'Classic highlighting techniques to add brightness and dimension. Natural-looking results that enhance your base color beautifully.',
    price: '€189.90',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80',
    category: 'Color Services',
  },
  {
    id: 'hair-coloring',
    title: 'Hair Coloring',
    description: 'Professional hair coloring with premium products. From subtle changes to dramatic transformations, we bring your vision to life.',
    price: '€79.90',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    category: 'Color Services',
  },
  {
    id: 'blow-dry',
    title: 'Blow Dry Styling',
    description: 'Professional blow dry and styling for volume, smoothness, and shine. Perfect finish for any occasion.',
    price: '€39.90',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    category: 'Styling Services',
  },
  {
    id: 'express-blow-dry',
    title: 'Express Blow Dry',
    description: 'Quick professional blow dry for when you are short on time. Look polished in minutes.',
    price: '€19.90',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&q=80',
    category: 'Styling Services',
  },
  {
    id: 'special-styling',
    title: 'Special Occasion Styling',
    description: 'Elegant updos, intricate braiding, and special event styling. Look stunning for parties, events, or nights out.',
    price: '€89.90',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    category: 'Styling Services',
  },
  {
    id: 'wedding-styling',
    title: 'Wedding Styling',
    description: 'Bridal hair styling for your special day. Beautiful, long-lasting styles that photograph perfectly and stay flawless all day.',
    price: '€99.90',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    category: 'Styling Services',
  },
  {
    id: 'perm-short',
    title: 'Perm - Short Hair',
    description: 'Add lasting volume and texture to short hair with professional perming. Beautiful waves and curls that last for months.',
    price: '€119.90',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    category: 'Salon Services',
  },
  {
    id: 'perm-long',
    title: 'Perm - Long Hair',
    description: 'Transform long hair with gorgeous, bouncy curls. Professional perming for lasting body and movement.',
    price: '€169.90',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80',
    category: 'Salon Services',
  },
  {
    id: 'head-massage',
    title: 'Head Massage + Wash',
    description: 'Relaxing head massage combined with professional wash and styling. The perfect add-on to any service or standalone treatment.',
    price: '€19.90',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
    category: 'Add-ons',
  },
];

export const serviceCategories = [
  'Barber Services',
  'Salon Services',
  'Color Services',
  'Styling Services',
  'Add-ons',
];

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const featuredServices = [
  services[0],  // Premium Haircut - Barber Services
  services[1],  // Classic Haircut - Barber Services
  services[7],  // Salon Haircut - Salon Services
  services[8],  // Single Color - Color Services
  services[15], // Special Occasion Styling - Styling Services
  services[12], // Blow Dry Styling - Styling Services
];
