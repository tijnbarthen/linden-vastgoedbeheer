'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Author01 from '@/public/images/author-01.jpg';
import CategorySelector from '@/components/organisms/CategorySelector';
import HouseCard from '@/components/organisms/HouseCard';

export default function Inspiration() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-6 md:pb-6">
            <div className="relative text-center">
              <h2 className="h2  font-cabinet-grotesk">Ons portfolio</h2>
            </div>
          </div>
          {/* Content */}
          <CategorySelector />
          <div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <HouseCard
                  house={{
                    id: '1',
                    image: 'https://source.unsplash.com/random?house&303',
                    title: 'Mooi huis',
                    description: 'Dit is een mooi huis',
                    price: '€ 1.000.000',
                    location: 'Amsterdam',
                  }}
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <HouseCard
                  house={{
                    id: '2',
                    image: 'https://source.unsplash.com/random?house&303',
                    title: 'Mooi huis',
                    description: 'Dit is een mooi huis',
                    price: '€ 1.000.000',
                    location: 'Amsterdam',
                  }}
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <HouseCard
                  house={{
                    id: '3',
                    image: 'https://source.unsplash.com/random?house&303',
                    title: 'Mooi huis',
                    description: 'Dit is een mooi huis',
                    price: '€ 1.000.000',
                    location: 'Amsterdam',
                  }}
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <HouseCard
                  house={{
                    id: '4',
                    image: 'https://source.unsplash.com/random?house&303',
                    title: 'Mooi huis',
                    description: 'Dit is een mooi huis',
                    price: '€ 1.000.000',
                    location: 'Amsterdam',
                  }}
                />
              </div>
            </div>
          </div>

          <div>{/* Category buttons */}</div>
        </div>
      </div>
    </section>
  );
}
