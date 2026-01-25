'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Nebula from '@/components/Nebula';
import StarField from '@/components/StarField';
import Link from 'next/link';

type IsotopeType = typeof import('isotope-layout');
type ImagesLoadedType = typeof import('imagesloaded');

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const isotopeRef = useRef<any>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: '*', label: 'All' },
    { id: '.sculpture', label: 'Sculpture' },
    { id: '.photography', label: 'Photography' },
    { id: '.literature', label: 'Literature' },
    { id: '.installation', label: 'Installation' },
    { id: '.artwork', label: 'Artwork' },
  ];

  // Todas las obras del portfolio original
  const artworks = [
    {
      id: 1,
      title: 'Proud and Unprejudiced',
      category: 'artwork',
      image: '/portfolio/2025_proud_and_unprejudiced_web-980x1645.jpg',
      slug: 'proud-and-unprejudiced',
    },
    {
      id: 2,
      title: 'New Colabo',
      category: 'artwork',
      image: '/portfolio/2025_new_colabo_web-980x788.jpg',
      slug: 'new-colabo',
    },
    {
      id: 3,
      title: 'Historical Souvenir',
      category: 'artwork',
      image: '/portfolio/2_Historical-Souvenir-980x1244.jpg',
      slug: 'historical-souvenir',
    },
    {
      id: 4,
      title: 'DENDRITA ASÍNCRONA',
      category: 'installation',
      image: '/portfolio/dendritajpg-1-980x942.jpg',
      slug: 'dendrita-asincrona',
    },
    {
      id: 5,
      title: 'Like me',
      category: 'artwork',
      image: '/portfolio/IMG20240315110820-EDIT_2-980x1809.jpg',
      slug: 'like-me',
    },
    {
      id: 6,
      title: 'Actantes: Mira que te diga',
      category: 'literature',
      image: '/portfolio/libro-fondo-gris-1-scaled-980x610.jpg',
      slug: 'actantes',
    },
    {
      id: 7,
      title: 'I Neon Ucrania LGTBIQ',
      category: 'photography',
      image: '/portfolio/I-Neon_Ucrania_LGTBIQ_web-980x735.jpg',
      slug: 'i-neon-ucrania-lgtbiq',
    },
    {
      id: 8,
      title: 'Serena – Luz de Luna III',
      category: 'literature',
      image: '/portfolio/3258477010.jpg',
      slug: 'serena-luz-de-luna-iii',
    },
    {
      id: 9,
      title: 'ANATOMÍA UNIVERSAL: OJO',
      category: 'installation',
      image: '/portfolio/IMG20220427162158-scaled-980x980.jpg',
      slug: 'anatomia-universal-ojo',
    },
    {
      id: 10,
      title: 'Self-portrait: Transposition',
      category: 'artwork',
      image: '/portfolio/web_self-portrait_Exposoma_Nebulae-980x1325.jpg',
      slug: 'self-portrait-exposoma-nebulae',
    },
    {
      id: 11,
      title: 'SUPERNORMAL JEWEL: SELFPORTRAIT',
      category: 'sculpture',
      image: '/portfolio/supernormal_jewel.jpg',
      slug: 'supernormal-jewel-selfportrait',
    },
    {
      id: 12,
      title: 'Serie: Ambioma de Rorschach',
      category: 'installation',
      image: '/portfolio/Ambioma-de-Rorschach.-Erato-Calíope-Euterpe-2015.jpg',
      slug: 'serie-ambioma-de-rorschach',
    },
    {
      id: 13,
      title: 'AMBIOMA & GENOMA​: Europa',
      category: 'artwork',
      image: '/portfolio/IMG_20190915_123002-scaled-scaled.jpg',
      slug: 'ambioma-genoma-europa',
    },
    {
      id: 14,
      title: 'AMBIOMA & GENOMA​: Joan',
      category: 'artwork',
      image: '/portfolio/IMG_20190915_122329-e1608332627224.jpg',
      slug: 'ambioma-genoma-joan',
    },
    {
      id: 15,
      title: 'AMBIOMA & GENOMA​: Vanessa',
      category: 'artwork',
      image: '/portfolio/IMG_20190915_122049-scaled-e1608289329948.jpg',
      slug: 'ambioma-genoma-vanessa',
    },
    {
      id: 16,
      title: 'El Síndrome de Stendhall de Hércules, hoy',
      category: 'installation',
      image: '/portfolio/Pag-15.jpg',
      slug: 'el-sindrome-de-stendhall-de-hercules-hoy',
    },
    {
      id: 17,
      title: 'THE BIRTH OF… PETROLEUM',
      category: 'artwork',
      image: '/portfolio/Pag-17-e1600798968283.jpg',
      slug: 'the-birth-of-petroleum',
    },
    {
      id: 18,
      title: 'CRSS ¿Quién es el culpable?',
      category: 'installation',
      image: '/portfolio/crss3.jpg',
      slug: 'crss-quien-es-el-culpable',
    },
    {
      id: 19,
      title: 'THE BIRTH OF…',
      category: 'installation',
      image: '/portfolio/Pag-19.jpg',
      slug: 'the-birth-of',
    },
    {
      id: 20,
      title: 'PÓDIUM SOCIAL: ORO, PLATA, BRONCE',
      category: 'installation',
      image: '/portfolio/Pag-233-1.jpg',
      slug: 'podium-social-oro-plata-bronce',
    },
  ];

  // Initialize Isotope with dynamic imports
  useEffect(() => {
    if (typeof window === 'undefined' || !galleryRef.current) return;

    let mounted = true;
    let timer: NodeJS.Timeout | null = null;

    const initIsotope = async () => {
      try {
        // Dynamically import Isotope and imagesLoaded
        const [IsotopeModule, imagesLoadedModule] = await Promise.all([
          import('isotope-layout'),
          import('imagesloaded'),
        ]);

        if (!mounted || !galleryRef.current) return;

        const Isotope = IsotopeModule.default || IsotopeModule;
        const imagesLoaded = imagesLoadedModule.default || imagesLoadedModule;

        // Wait for images to load first
        const imgLoad = imagesLoaded(galleryRef.current);
        
        const init = () => {
          if (!mounted || !galleryRef.current) return;

          // Destroy existing instance if any
          if (isotopeRef.current) {
            isotopeRef.current.destroy();
          }

          const iso = new Isotope(galleryRef.current!, {
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            masonry: {
              columnWidth: '.portfolio-item-sizer',
              gutter: 20,
            },
            transitionDuration: '0.5s',
            filter: activeFilter === '*' ? '*' : activeFilter,
          });

          isotopeRef.current = iso;
        };

        imgLoad.on('always', init);
        
        // Also try to initialize immediately in case images are already loaded
        timer = setTimeout(() => {
          if (galleryRef.current && galleryRef.current.querySelectorAll('img').length > 0) {
            init();
          }
        }, 100);
      } catch (error) {
        console.error('Error loading Isotope:', error);
      }
    };

    initIsotope();

    return () => {
      mounted = false;
      if (timer) {
        clearTimeout(timer);
      }
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
        isotopeRef.current = null;
      }
    };
  }, [activeFilter]);

  // Update Isotope when filter changes
  useEffect(() => {
    if (!isotopeRef.current || typeof window === 'undefined') return;

    const filterValue = activeFilter === '*' ? '*' : activeFilter;
    
    isotopeRef.current.arrange({
      filter: filterValue,
    });
  }, [activeFilter]);

  // Split text for title animation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const splitTitles = () => {
      const titles = document.querySelectorAll('.portfolio-title-text');
      titles.forEach((title) => {
        // Skip if already split
        if (title.querySelector('.char')) return;
        
        const text = title.textContent || '';
        const chars = text.split('').map((char, index) => 
          `<span class="char" style="--char-index: ${index}">${char === ' ' ? '&nbsp;' : char}</span>`
        );
        title.innerHTML = chars.join('');
      });
    };

    // Run after a delay to ensure DOM is ready
    const timer = setTimeout(splitTitles, 300);
    return () => clearTimeout(timer);
  }, [artworks]);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header Section with Nebula */}
      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <Nebula />
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="portfolio-title text-6xl md:text-8xl lg:text-9xl font-arbonnie font-bold mb-12 tracking-[0.15em] uppercase">
            PORTFOLIO
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="relative w-full py-6 md:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
            {filters.map((filter, index) => (
              <span key={filter.id} className="flex items-center">
                <button
                  onClick={() => setActiveFilter(filter.id)}
                  className={`text-xs md:text-sm font-poppins font-light tracking-wider transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'text-[#0693e3]'
                      : 'text-white hover:opacity-70'
                  }`}
                >
                  {filter.label}
                </button>
                {index < filters.length - 1 && (
                  <span className="text-red-500 mx-1.5 md:mx-2 text-xs md:text-sm">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
        <Nebula />
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div ref={galleryRef} className="portfolio-gallery">
            {/* Sizer for Isotope masonry */}
            <div className="portfolio-item-sizer"></div>
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`portfolio-item ${artwork.category} items star-birth`}
                data-category={artwork.category}
                data-filter={`.${artwork.category}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="item-img">
                  <Link href={`#`} className="block" onClick={(e) => { e.preventDefault(); }}>
                    {!imageErrors[artwork.id] ? (
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        width={980}
                        height={1645}
                        className="portfolio-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImageErrors(prev => ({ ...prev, [artwork.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Imagen no disponible</span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="item-img-overlay">
                      <div className="overlay-info">
                        <h5 className="portfolio-title-text">{artwork.title}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
