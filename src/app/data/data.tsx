// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JSX } from 'react';

import { FlagIcon, MapIcon, ShieldIcon } from 'lucide-react';
import { BattlegroundsType, GalleryImagesType, ProductCategory } from '@/app/models/types';

export const fieldSpecsBattlegroundsData: BattlegroundsType[] = [
  {
    icon: <MapIcon className="h-6 w-6" />,
    label: 'Veličina',
    value: '150m x 200m',
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    label: 'Kapacitet igrališta',
    value: 'max. 10 na 10 igrača',
  },
  {
    icon: <FlagIcon className="h-6 w-6" />,
    label: 'Mod igre',
    value: 'Rekreacija',
  },
];

export const equipmentData: ProductCategory[] = [
  {
    category: 'Makeri',
    items: [
      {
        name: 'EMEK 100',
        image: '/images/puske.png',
        specs: [
          'Pouzdani i precizni',
          'Tihi rad i slab trzaj',
          'Lagani',
          'Redovito servisirani i provjereni',
        ],
      },
    ],
  },
  {
    category: 'Ostala oprema',
    items: [
      {
        name: 'HK HSL zaštitne maske',
        images: ['/images/maska1.jpg', '/images/maska2.jpg', '/images/maska3.jpg'],
        specs: [
          'Profesionalna zaštita cijelog lica i glave',
          'Dostupno u više boja',
          'Poboljšano periferno vidno polje',
          'Premaz protiv magljenja',
        ],
      },
      {
        name: 'Standardna zaštitna oprema',
        image: '/images/odijela1.png',
        specs: [
          'Profesionalni paintball kombinezoni',
          'Pojačani jastučići na koljenima i laktovima',
          'Taktičke rukavice s pojačanim prianjanjem',
        ],
      },
    ],
  },
];

export const galleryImages: GalleryImagesType[] = [
  {
    url: '/images/puske.png',
    title: 'Strategic Position',
  },
  {
    url: '/images/odijela1.png',
    title: 'Team Briefing',
  },
  {
    url: '/images/novi_dresovi.png',
    title: 'Tactical Advance',
  },
  {
    url: '/images/ekipa.svg',
    title: 'Mission Complete',
  },
];
