'use client';

import Image from 'next/image';
import Particles from '@/components/Particles';

export default function CVContent() {
  const education = [
    {
      year: '2023',
      items: [
        {
          title: 'Máster en investigación en psicología',
          institution: 'Universidad Nacional de Educación a Distancia Facultad de Psicología',
          icon: 'graduation',
        },
      ],
    },
    {
      year: '2021',
      items: [
        {
          title: 'Curso Universitario de Técnicas de Apoyo Psicológico y Social en Situaciones de Crisis',
          institution: 'Talentia Formación, Universidad de Nebrija',
          icon: 'graduation',
        },
        {
          title: 'Curso Universitario en Inteligencia Emocional plena, Mindfulness para regular emociones en tu vida cotidiana (avanzado)',
          institution: 'Fundación general de la Universidad de Málaga',
          icon: 'graduation',
        },
      ],
    },
    {
      year: '2017',
      items: [
        {
          title: 'Doctor en el Programa Oficial de Doctorado en Arte (D01.56.1) proyecto de tesis, línea de investigación Cultura Artística y Neuroestética',
          institution: 'Escuela de Posgrado, Universidad de Granada',
          icon: 'graduation',
        },
      ],
    },
    {
      year: '2013',
      items: [
        {
          title: 'Master Oficial de Profesorado de Educación Secundaria Obligatoria y Bachillerato, Formación Profesional y Enseñanzas de Idiomas.',
          institution: 'Escuela de Posgrado, Universidad de Granada',
          icon: 'graduation',
        },
        {
          title: 'Período de Experiencia Docente (140 h. febrero-abril)',
          institution: 'IES Severo Ochoa, La Chana, Granada',
          icon: 'teaching',
        },
      ],
    },
    {
      year: '2012',
      items: [
        {
          title: 'Master Oficial en Arte: Producción e Investigación. Programa oficial en Artes y Humanidades',
          institution: 'Escuela de Posgrado. Universidad de Granada',
          icon: 'graduation',
        },
      ],
    },
    {
      year: '2011',
      items: [
        {
          title: 'Obtención Suficiencia Investigadora/Diploma de Estudios Avanzados',
          institution: 'Escuela de Posgrado. Universidad de Granada',
          icon: 'trophy',
        },
        {
          title: 'Colaboración-prácticas (300 h. abril-julio) en el Centro José Guerrero y Palacio de los Condes de Gabia',
          institution: 'Diputación de Granada',
          icon: 'trophy',
        },
        {
          title: 'Programa Oficial de Doctorado (Master) en Lenguajes y Poéticas del Arte Contemporáneo. P60 ECTS',
          institution: 'Escuela de Posgrado. Universidad de Granada',
          icon: 'graduation',
        },
      ],
    },
    {
      year: '2010',
      items: [
        {
          title: 'Ldo. Bellas Artes por la Facultad de «Alonso Cano»',
          institution: 'Universidad de Granada',
          icon: 'graduation',
        },
      ],
    },
    {
      year: '2007-2008',
      items: [
        {
          title: 'Beca del programa deI intercambio LLP Erasmus en la «Accademia di Belle Arti di Brera»',
          institution: 'Milán (Italia)',
          icon: 'graduation',
        },
      ],
    },
  ];

  const publications = [
    {
      year: '2023',
      items: [
        {
          type: 'video',
          title: 'Ponencia: «La estética supernormal de la existencia: etic y emic en una sociedad vivida mediante la pantalla»',
          description: 'dentro del I Congreso Internacional en URJC de "Cultura Visual. Periferia e interdisciplinariedad en los estudios visuales" 23-25 Octubre de 2023',
          link: 'https://eventos.urjc.es/97197/detail/i-congreso-internacional-sobre-cultura-visual-periferia-e-interdisciplinariedad-en-los-estudios-vis.html',
        },
        {
          type: 'book',
          title: 'Capítulo de libro: «Psicología cultural y redes sociales: la mediación por artefactos en la (re)creación identitaria»',
          description: 'dentro del libro "Acciones y realidades ante la manipulación social: redes sociales, publicidad y marketing", con ISBN "978-84-1170-142-6"',
          link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9166926',
        },
        {
          type: 'video',
          title: 'Ponencia: «Las redes sociales como mediación identitaria: un análisis desde la psicología cultural»',
          description: 'dentro del VIII Congreso Internacional de "Comunicación y pensamiento Imagen y manipulación. Viejas prácticas, nuevas fronteras" 11 y 12 de Abril de 2023',
          link: 'https://www.youtube.com/watch?v=arhdYF1un0g',
        },
      ],
    },
    {
      year: '2022',
      items: [
        {
          type: 'article',
          title: 'Artículo: «Estímulos supernormales en la experimentación estética: porno y belkitsch»',
          description: 'Revista Valenciana, Estudios de Filosofía y Letras, Universidad de Guanajuato, México',
          link: 'http://www.revistavalenciana.ugto.mx/index.php/valenciana/article/view/546/1038',
        },
        {
          type: 'book',
          title: 'Capítulo de libro: «El uso de las artes plásticas como herramienta metodológica en el desarrollo emocional y empático»',
          description: 'dentro del libro "Aprender innovando. Transferencia del conocimiento en los estudios de Historia, Artes, Arquitectura y Diseño"", con ISBN "978-841-918-792-5"',
          link: 'https://juanjosemogat.art/wp-content/uploads/2022/08/2022_CAP_23-TRANSEMOCIONALIDAD_TEORIZACIO%CC%81N-DE-LA-TRASCENDENCIA-DE-LAS-EMOCIONES-MEDIANTE-SU-CATALIZACIO%CC%81N-A-TRAVE%CC%81S-DE-LA-PANTALLA.pdf',
        },
        {
          type: 'video',
          title: 'Ponencia: «Metodología Didáctica basada en el desarrollo emocional y empático mediante las Artes Plásticas»',
          description: 'dentro del I Congreso Internacional de "Innovación Docente, Educación y Transferencia del Conocimiento" 7 y 8 de julio de 2022',
          link: 'https://ciineco.org/ponencia/metodologia-didactica-basada-en-el-desarrollo-emocional-y-empatico-mediante-las-artes-plasticas/',
        },
        {
          type: 'book',
          title: 'Capítulo de libro: «Transemocionalidad: Teorización de la trascendencia de las emociones mediante su catalización a través de la pantalla»',
          description: 'dentro del libro "Investigación y transferencia de las ciencias sociales frente a un mundo en crisis", con ISBN "978-84-1377-924-9"',
          link: 'https://juanjosemogat.art/wp-content/uploads/2022/08/2022_CAP_23-TRANSEMOCIONALIDAD_TEORIZACIO%CC%81N-DE-LA-TRASCENDENCIA-DE-LAS-EMOCIONES-MEDIANTE-SU-CATALIZACIO%CC%81N-A-TRAVE%CC%81S-DE-LA-PANTALLA.pdf',
        },
        {
          type: 'book',
          title: 'Capítulo de libro: «Belkitsch: argumentos fenomenológicos en la re-confirmación de la evolución kitsch»',
          description: 'dentro del libro "Investigación y experiencias en educación artística, creatividad y patrimonio cultural e inmaterial", con ISBN "978-84-1377-925-6"',
          link: 'https://juanjosemogat.art/wp-content/uploads/2022/08/2022_CAP_46-BELKITSCH_ARGUMENTOS-FENOMENOLO%CC%81GICOS-EN-LA-RE-CONFIRMACIO%CC%81N-DE-LA-EVOLUCIO%CC%81N-KITSCH.pdf',
        },
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'graduation':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
            <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
          </svg>
        );
      case 'trophy':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
            <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" />
          </svg>
        );
      case 'teaching':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
            <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z" />
          </svg>
        );
      case 'video':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
            <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" />
          </svg>
        );
      case 'book':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
            <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z" />
          </svg>
        );
      case 'article':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
            <path d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section - Image and Text */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <Particles />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/cv-photo.jpg"
                  alt="Juan José Mogat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider">discurso artístico</p>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  La obra de J.J. Mogat es enteramente multidisciplinar. Tras sus comienzos dibujando por primera vez con 6 años una ilustración de Disney, de la Bella y la Bestia, pasó a desarrollar desde la infancia la técnica del dibujo en todas sus vertientes y posteriormente hizo suya la pintura como herramienta de comunicación artística. Hoy en día, después de formarse en Bellas Artes, pasando por varios másteres y acabando con el Doctorado, con más de 25 años de experiencia en el campo artístico, para él prima la idea sobre la técnica o materia. Ésta es ahora la que marca la disciplina a utilizar. Viaja desde la hiperrealidad en la pintura, haciendo uso de los estímulos supernormales en el arte, frente a la producción de ambientes reales dentro de ficciones, partiendo de la combinación de varias realidades -un realismo mágico 2.0-. Uno de sus recursos son los paisajes de nebulosas mezclados con retratos tanto de personajes del mundo del cine, gran pantalla y pequeña pantalla, así como neo-famosos o personajes provenientes de redes sociales como Instagram; en definitiva, la cultura contemporánea. Luego lleva a volumen este mismo retrato, pero dando formas abstractas a la madera, sin que recuerden a nada físico, sino más bien a un trozo de la esencia de la persona. Las formas finales sin embargo, resultan extrañamente familiares, trabajando la metáfora del retrato figurativo-conceptual.
                </p>
                <p>
                  El concepto teórico que desarrolla en esta línea es el del priming que sufrimos procedente del ambiente, del contexto social, que nos obliga a adaptarnos a unas necesidades artificiales que hacemos cotidianas sin cuestionarnos siquiera el porqué de ellas.
                </p>
                <p>
                  Por otra parte, otra fuente de inspiración son objetos cotidianos a veces usados directamente, interviniéndolos -usados en instalación-, como materia prima original; y otras veces manufacturados desde cero, en este caso conchas de vieira, accesorios como pajaritas para trabajar con el trampantojo del material, materiales sintéticos/orgánicos como plumas, etc.
                </p>
                <p>
                  Atender al contexto de creación para hacerlo protagonista de la obra es una de sus premisas, la re-contextualización y los bagajes adaptativo-trasformadores y negativos son las herramientas para la selección de las líneas de investigación artística.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formación Académica */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <Particles />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
                Formación académica
              </h2>
              <div className="w-20 h-px bg-white mb-8"></div>
            </div>

            {/* Right Column - Education Timeline */}
            <div className="space-y-12">
              {education.map((yearGroup, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-2xl font-light text-white">{yearGroup.year}</h3>
                  {yearGroup.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-4">
                      <div className="flex-shrink-0 text-gray-400 mt-1">
                        {getIcon(item.icon)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-normal text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publicaciones y Conferencias */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <Particles />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
                Publicaciones y conferencias
              </h2>
              <div className="w-20 h-px bg-white mb-8"></div>
              <p className="text-gray-400 text-sm mt-8">Haga click en el título para descargar</p>
            </div>

            {/* Right Column - Publications Timeline */}
            <div className="space-y-12">
              {publications.map((yearGroup, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-2xl font-light text-white">{yearGroup.year}</h3>
                  {yearGroup.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-4">
                      <div className="flex-shrink-0 text-gray-400 mt-1">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          {getIcon(item.type)}
                        </a>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-normal text-white mb-2">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors underline"
                          >
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
