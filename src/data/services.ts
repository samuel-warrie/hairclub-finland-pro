import { Scissors, CircleDot, Baby, Palette, Eye, Sparkles } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Hairstyling',
    description: 'Modern and classic cuts tailored to your personal style and face shape. Our expert barbers ensure you leave looking your best.',
    price: 'From €25',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
  },
  {
    id: 2,
    title: 'Beard Trim',
    description: 'Precision beard trimming and shaping to sharpen your look. From subtle cleanup to complete beard redesign.',
    price: 'From €15',
    icon: CircleDot,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
  },
  {
    id: 3,
    title: "Children's Cuts",
    description: 'Friendly and precise haircuts for our youngest clients. We make sure kids feel comfortable and leave with a smile.',
    price: 'From €20',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
  },
  {
    id: 4,
    title: 'Hair Colouring & Balayage',
    description: 'Professional coloring services for bold transformations or natural enhancement. Expert techniques for stunning results.',
    price: 'From €45',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80',
  },
  {
    id: 5,
    title: 'Eyebrow Threading',
    description: 'Precise eyebrow shaping for a clean, polished finish. The ancient art of threading for perfect brows.',
    price: 'From €12',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
  },
  {
    id: 6,
    title: 'Special Styling',
    description: 'Blowdry, updos, and glossing treatments for special occasions. Look your absolute best for any event.',
    price: 'From €30',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1562322140-8baeacacf450?w=800&q=80',
  },
];

export const featuredServices = services.slice(0, 4);
