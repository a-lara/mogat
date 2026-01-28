'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  ExternalLink, 
  Award, 
  FileText, 
  LayoutList, 
  LayoutGrid, 
  Palette, 
  Brain, 
  Users,
  Sparkles,
  Scroll
} from 'lucide-react';

// --- TYPES & DATA ---

type Category = 'art' | 'psychology' | 'education' | 'general';

interface EducationItem {
  title: string;
  institution: string;
  description?: string;
  category: Category;
}

interface EducationGroup {
  year: string;
  isHighlight?: boolean;
  items: EducationItem[];
}

interface PublicationItem {
  type: string;
  title: string;
  description: string;
  link: string;
  category: Category;
}

interface PublicationGroup {
  year: string;
  items: PublicationItem[];
}

const CVJuanJoseModern = () => {
  const [viewMode, setViewMode] = useState<'simple' | 'complex'>('complex');

  // Helper for category styles
  const getCategoryStyle = (cat: Category) => {
    switch (cat) {
      case 'art': return 'text-amber-400 border-amber-400/30 bg-amber-400/10';
      case 'psychology': return 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10';
      case 'education': return 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10';
      default: return 'text-zinc-400 border-zinc-700 bg-zinc-800';
    }
  };

  const getCategoryIcon = (cat: Category) => {
    switch (cat) {
      case 'art': return <Palette size={12} />;
      case 'psychology': return <Brain size={12} />;
      case 'education': return <Users size={12} />;
      default: return null;
    }
  };

  const getCategoryLabel = (cat: Category) => {
    switch (cat) {
      case 'art': return 'arte';
      case 'psychology': return 'psicología';
      case 'education': return 'educación';
      default: return cat;
    }
  };

  const educationData: EducationGroup[] = [
    {
      year: '2023',
      items: [
        {
          title: 'Máster en investigación en psicología',
          institution: 'UNED - Facultad de Psicología',
          category: 'psychology',
          description: 'Especialización en metodología científica y análisis de datos conductuales.'
        },
      ],
    },
    {
      year: '2021',
      items: [
        {
          title: 'Experto en Apoyo Psicológico y Crisis',
          institution: 'Talentia Formación, Universidad de Nebrija',
          category: 'psychology',
        },
        {
          title: 'Inteligencia Emocional Plena y Mindfulness',
          institution: 'Fundación general de la Universidad de Málaga',
          category: 'psychology',
        },
      ],
    },
    {
      year: '2017',
      isHighlight: true,
      items: [
        {
          title: 'Doctorado en Arte (Mención Cum Laude)',
          institution: 'Universidad de Granada',
          category: 'art',
          description: 'Tesis: Cultura Artística y Neuroestética. Investigación sobre la percepción visual y estímulos supernormales.',
        },
      ],
    },
    {
      year: '2013',
      items: [
        {
          title: 'Máster Profesorado (ESO, Bachillerato, FP)',
          institution: 'Universidad de Granada',
          category: 'education',
        },
        {
          title: 'Período de Experiencia Docente',
          institution: 'IES Severo Ochoa, La Chana, Granada',
          category: 'education',
        },
      ],
    },
    {
      year: '2012',
      items: [
        {
          title: 'Máster Oficial en Arte: Producción e Investigación',
          institution: 'Universidad de Granada',
          category: 'art',
          description: 'Programa oficial en Artes y Humanidades focusing on contemporary production.',
        },
      ],
    },
    {
      year: '2011',
      items: [
        {
          title: 'Diploma de Estudios Avanzados (DEA)',
          institution: 'Universidad de Granada',
          category: 'art',
        },
        {
          title: 'Colaboración en Centro José Guerrero',
          institution: 'Diputación de Granada',
          category: 'art',
          description: 'Prácticas profesionales (300h) en gestión cultural y expositiva.',
        },
        {
          title: 'Máster en Lenguajes y Poéticas del Arte',
          institution: 'Universidad de Granada',
          category: 'art',
        },
      ],
    },
    {
      year: '2010',
      items: [
        {
          title: 'Licenciatura en Bellas Artes',
          institution: 'Universidad de Granada - Facultad Alonso Cano',
          category: 'art',
        },
      ],
    },
    {
      year: '2007-08',
      items: [
        {
          title: 'Beca Erasmus',
          institution: 'Accademia di Belle Arti di Brera, Milán',
          category: 'art',
        },
      ],
    },
  ];

  const publicationData: PublicationGroup[] = [
    {
      year: '2023',
      items: [
        {
          type: 'Ponencia',
          title: 'La estética supernormal de la existencia: etic y emic...',
          description: 'I Congreso Internacional en URJC de "Cultura Visual".',
          link: 'https://eventos.urjc.es/97197/detail/i-congreso-internacional-sobre-cultura-visual-periferia-e-interdisciplinariedad-en-los-estudios-vis.html',
          category: 'art',
        },
        {
          type: 'Capítulo',
          title: 'Psicología cultural y redes sociales: la mediación...',
          description: 'Libro "Acciones y realidades ante la manipulación social". ISBN 978-84-1170-142-6',
          link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9166926',
          category: 'psychology',
        },
        {
          type: 'Ponencia',
          title: 'Las redes sociales como mediación identitaria...',
          description: 'VIII Congreso Internacional de "Comunicación y pensamiento".',
          link: 'https://www.youtube.com/watch?v=arhdYF1un0g',
          category: 'psychology',
        },
      ],
    },
    {
      year: '2022',
      items: [
        {
          type: 'Artículo',
          title: 'Estímulos supernormales en la experimentación estética...',
          description: 'Revista Valenciana, Estudios de Filosofía y Letras.',
          link: 'http://www.revistavalenciana.ugto.mx/index.php/valenciana/article/view/546/1038',
          category: 'art',
        },
        {
          type: 'Capítulo',
          title: 'El uso de las artes plásticas como herramienta metodológica...',
          description: 'Libro "Aprender innovando". ISBN 978-841-918-792-5',
          link: '#',
          category: 'education',
        },
        {
          type: 'Ponencia',
          title: 'Metodología Didáctica basada en el desarrollo emocional...',
          description: 'I Congreso Internacional de "Innovación Docente".',
          link: 'https://ciineco.org/ponencia/metodologia-didactica-basada-en-el-desarrollo-emocional-y-empatico-mediante-las-artes-plasticas/',
          category: 'education',
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-transparent text-zinc-200 font-poppins selection:bg-[#ff6b35] selection:text-black">
      <div className="max-w-6xl mx-auto p-4 md:p-12">
        
            {/* TOP BAR: View Toggle */}
            <div className="sticky top-4 z-50 flex justify-end mb-8">
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-1 rounded-full flex items-center shadow-xl gap-1">
                <button
                  onClick={() => setViewMode('simple')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    viewMode === 'simple' ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  <Sparkles size={14} /> CV Reducido
                </button>
                <button
                  onClick={() => setViewMode('complex')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    viewMode === 'complex' ? 'bg-[#ff6b35] text-black shadow-[0_0_10px_rgba(255,107,53,0.4)]' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  <Scroll size={14} /> CV Académico
                </button>
              </div>
            </div>

            {/* HEADER */}
            <header className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ marginBottom: '2rem' }}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-800 gap-8" style={{ paddingBottom: '3rem' }}>
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white font-arbonnie leading-tight whitespace-nowrap">
                    JUAN JOSÉ <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-orange-600">MOGAT</span>
                  </h1>
                  <div className="flex flex-wrap gap-4" style={{ marginTop: '1rem' , marginBottom: '-1rem'}}>
                     <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 border border-amber-500/30 text-amber-500 rounded-full">Doctor en Arte</span>
                     <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 border border-indigo-500/30 text-indigo-500 rounded-full">Investigador</span>
                     <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 border border-zinc-700 text-zinc-500 rounded-full">Multidisciplinar</span>
                  </div>
                </div>
                
                <button className="group flex items-center gap-3 px-6 py-3 bg-zinc-100 text-black hover:bg-[#ff6b35] transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-sm">
                  <FileText size={16} className="group-hover:scale-110 transition-transform"/> 
                  Descargar PDF
                </button>
              </div>

              {/* STATEMENT */}
              <div className="transition-all duration-500" style={{ marginTop: '1rem' }}>
                 <div className="bg-zinc-900/20 backdrop-blur-sm pt-8 pb-8 pr-8 relative" style={{ paddingLeft: '2rem' }}>
                   {/* Vertical bar with glow effect */}
                   <div 
                     className="absolute left-0 top-0 bottom-0 w-0.5"
                     style={{
                       backgroundColor: '#ff6b35',
                       boxShadow: '0 0 10px rgba(255, 107, 53, 0.8), 0 0 20px rgba(255, 107, 53, 0.6), 0 0 30px rgba(255, 107, 53, 0.4)',
                       filter: 'blur(0.5px)',
                     }}
                   />
                  {viewMode === 'simple' ? (
                    <p className="text-lg md:text-xl leading-relaxed font-playfair text-zinc-300 italic animate-in fade-in">
                      "Exploro la intersección entre la <span className="text-[#ff6b35] not-italic font-medium font-poppins">neuroestética</span> y la cultura contemporánea, utilizando la pintura y la madera como herramientas para diseccionar el <span className="text-[#ff6b35] not-italic font-medium font-poppins">priming social</span> en la era digital."
                    </p>
                  ) : (
                    <div className="space-y-6 text-zinc-300 font-light leading-relaxed animate-in fade-in">
                      <p>
                        La obra de J.J. Mogat es enteramente <span className="text-[#ff6b35] font-medium">multidisciplinar</span>. Tras sus comienzos dibujando por primera vez con 6 años una ilustración de Disney, pasó a desarrollar desde la infancia la técnica del dibujo en todas sus vertientes y posteriormente hizo suya la pintura como herramienta de comunicación artística. Hoy en día, después de formarse en Bellas Artes, pasando por varios másteres y acabando con el Doctorado, con más de 25 años de experiencia en el campo artístico, para él prima la <span className="text-[#ff6b35] font-medium">idea sobre la técnica</span> o materia.
                      </p>
                      <p>
                        Viaja desde la <span className="text-[#ff6b35] font-medium">hiperrealidad</span> en la pintura, haciendo uso de los <span className="text-[#ff6b35] font-medium">estímulos supernormales</span> en el arte, frente a la producción de ambientes reales dentro de ficciones, partiendo de la combinación de varias realidades -un <span className="text-[#ff6b35] font-medium">realismo mágico 2.0</span>-. Uno de sus recursos son los paisajes de <span className="text-[#ff6b35] font-medium">nebulosas</span> mezclados con retratos tanto de personajes del mundo del cine, gran pantalla y pequeña pantalla, así como neo-famosos o personajes provenientes de redes sociales como Instagram; en definitiva, la <span className="text-[#ff6b35] font-medium">cultura contemporánea</span>.
                      </p>
                      <p>
                        El concepto teórico que desarrolla en esta línea es el del <span className="text-[#ff6b35] font-medium">priming</span> que sufrimos procedente del ambiente, del contexto social, que nos obliga a adaptarnos a unas necesidades artificiales que hacemos cotidianas sin cuestionarnos siquiera el porqué de ellas.
                      </p>
                      <p>
                        Atender al <span className="text-[#ff6b35] font-medium">contexto de creación</span> para hacerlo protagonista de la obra es una de sus premisas, la <span className="text-[#ff6b35] font-medium">re-contextualización</span> y los bagajes adaptativo-trasformadores y negativos son las herramientas para la selección de las líneas de investigación artística.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          
          {/* --- LEFT COLUMN: TIMELINE --- */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-[#ff6b35]" size={24} />
              <h2 className="text-sm uppercase tracking-[0.2em] font-black text-white">Méritos Académicos</h2>
            </div>

            {/* FLEXBOX TIMELINE STRUCTURE */}
            <div className="flex flex-col gap-12">
              {educationData.map((group, i) => (
                <div key={i} className="flex gap-8 md:gap-12">
                  
                  {/* LEFT: LINE AND DOT (FIXED WIDTH) */}
                  <div className="flex flex-col items-center w-8 md:w-12 flex-shrink-0 relative">
                    {/* The Line - Goes full height to connect to next item */}
                    {i !== educationData.length - 1 && (
                      <div className="absolute top-2 bottom-[-3rem] w-0.5 bg-zinc-800"></div>
                    )}
                    
                    {/* The Dot */}
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 z-10 mt-2 transition-all duration-300 ${
                      group.isHighlight 
                        ? 'bg-[#ff6b35] border-[#ff6b35] shadow-[0_0_15px_rgba(255,107,53,0.5)] scale-110' 
                        : 'bg-zinc-950 border-zinc-700 group-hover:border-[#ff6b35]'
                    }`}></div>
                  </div>

                  {/* RIGHT: CONTENT (YEAR + ITEMS) */}
                  <div className="flex-1 pt-1 pb-4">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-light text-zinc-500 font-playfair">{group.year}</span>
                      {group.isHighlight && viewMode === 'complex' && (
                        <span className="bg-[#ff6b35]/10 text-[#ff6b35] text-[10px] font-bold px-2 py-1 rounded border border-[#ff6b35]/20 flex items-center gap-1.5 uppercase tracking-wider">
                          <Award size={12} /> Mención Cum Laude
                        </span>
                      )}
                    </div>

                    {/* Items Container with explicit Flex Gap */}
                    <div className="flex flex-col gap-8">
                      {group.items.map((item, j) => {
                        const style = getCategoryStyle(item.category);
                        const isLastItem = j === group.items.length - 1;
                        
                        return (
                          <div key={j} className={`relative group ${!isLastItem ? 'border-b border-zinc-800/50 pb-6' : ''}`}>
                            
                            <div className="flex flex-col gap-2">
                              <div className="flex items-start justify-between gap-6">
                                <h3 className={`font-bold leading-tight transition-colors ${
                                  group.isHighlight ? 'text-white text-2xl' : 'text-zinc-200 text-xl'
                                }`}>
                                  {item.title}
                                </h3>
                                
                                {/* Category Tag (Always Visible) */}
                                <span className={`flex-shrink-0 text-[9px] uppercase font-black px-2 py-1 rounded border flex items-center gap-1.5 ${style}`}>
                                  {getCategoryIcon(item.category)}
                                  <span className="hidden sm:inline">{getCategoryLabel(item.category)}</span>
                                </span>
                              </div>
                              
                              {viewMode === 'complex' && (
                                <p className="text-sm text-zinc-500 font-medium animate-in fade-in slide-in-from-top-1 duration-300">
                                  {item.institution}
                                </p>
                              )}
                            </div>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              viewMode === 'complex' && item.description ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}>
                              <p className="text-sm text-zinc-400 border-l-2 border-zinc-800 pl-4 py-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: PUBLICATIONS --- */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <BookOpen className="text-zinc-500" size={24} />
              <h2 className="text-sm uppercase tracking-[0.2em] font-black text-white">Publicaciones</h2>
            </div>

            <div className="flex flex-col gap-10">
              {publicationData.flatMap(g => g.items).map((pub, i) => {
                 const style = getCategoryStyle(pub.category);
                 const categoryColor = 
                    pub.category === 'art' ? 'bg-amber-500' : 
                    pub.category === 'psychology' ? 'bg-indigo-500' : 'bg-emerald-500';
                 
                 return (
                  <a 
                    key={i} 
                    href={pub.link}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex gap-6 group p-4 rounded-lg hover:bg-zinc-900/30 transition-all duration-300"
                  >
                    {/* Left: Color Accent Bar */}
                    <div className="relative w-1 flex-shrink-0 flex justify-center pt-1">
                      <div className={`w-0.5 h-full rounded-full ${categoryColor} opacity-40 group-hover:opacity-100 group-hover:w-1 transition-all duration-300`}></div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em] group-hover:text-zinc-300 transition-colors">
                          {pub.type}
                        </span>
                        <ExternalLink size={16} className="text-zinc-700 group-hover:text-[#ff6b35] transition-colors opacity-0 group-hover:opacity-100" />
                      </div>

                      <h4 className={`font-playfair font-medium text-zinc-200 group-hover:text-white leading-tight transition-colors ${
                        viewMode === 'simple' ? 'text-lg' : 'text-xl'
                      }`}>
                        "{pub.title}"
                      </h4>

                      {viewMode === 'complex' && (
                        <div className="mt-2 animate-in fade-in slide-in-from-left-2 duration-300">
                          <p className="text-xs text-zinc-500 leading-relaxed font-sans line-clamp-2">
                            {pub.description}
                          </p>
                          <div className="mt-3 flex">
                             <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-bold border ${
                               pub.category === 'art' ? 'border-amber-500/20 text-amber-500/70' : 
                               pub.category === 'psychology' ? 'border-indigo-500/20 text-indigo-500/70' : 'border-emerald-500/20 text-emerald-500/70'
                             }`}>
                                {getCategoryLabel(pub.category)}
                             </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CVJuanJoseModern;