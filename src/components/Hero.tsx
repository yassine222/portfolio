"use client";

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-24">
      <div className="container-max">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="gradient-text">Yassine Romdhane</span>
          </h1>
          
          {/* Profile Photo Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/me.jpeg"
                    alt="Yassine Romdhane"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Optional: Add a small badge or indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-muted-foreground mb-8 max-w-3xl mx-auto">
            Junior Full Stack Mobile Developer specializing in Flutter development. 
            Experienced in creating innovative mobile solutions with over a year in mobile app development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 