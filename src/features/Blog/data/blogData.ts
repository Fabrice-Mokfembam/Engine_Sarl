// src/features/Blog/data/blogData.ts

import blogImg1 from '../../../assets/images/en1.jpeg';
import blogImg2 from '../../../assets/images/en2.jpeg';
import blogImg3 from '../../../assets/images/en3.webp';
import blogImg4 from '../../../assets/images/en4.webp';

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Importance of Regular Oil Changes for Your Vehicle',
    summary: 'Learn why consistent oil maintenance is crucial for engine longevity and performance.',
    image: blogImg1,
    category: 'Engine Maintenance',
    tags: ['EngineOil', 'Maintenance', 'Automotive'],
    date: '2025-08-01',
    link: '#',
  },
  {
    id: 2,
    title: 'Choosing the Right Engine Oil: A Comprehensive Guide',
    summary: 'Our experts break down the different types of engine oils and help you make an informed choice.',
    image: blogImg2,
    category: 'Product Guides',
    tags: ['Lubricants', 'Innovation'],
    date: '2025-07-20',
    link: '#',
  },
  {
    id: 3,
    title: 'Understanding Engine Oil Viscosity: What Do the Numbers Mean?',
    summary: 'Demystifying SAE ratings and how they impact your engine\'s performance in various temperatures.',
    image: blogImg3,
    category: 'Industry News',
    tags: ['EngineOil', 'Innovation'],
    date: '2025-07-10',
    link: '#',
  },
  {
    id: 4,
    title: 'The Future of Lubricants: Innovations and Sustainability',
    summary: 'Explore the advancements in lubricant technology and our commitment to eco-friendly solutions.',
    image: blogImg4,
    category: 'Company Updates',
    tags: ['Lubricants', 'Innovation', 'Sustainability'],
    date: '2025-06-30',
    link: '#',
  },
];
