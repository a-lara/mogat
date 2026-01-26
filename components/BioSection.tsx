import React from 'react';

export default function BioSection() {
  return (
    <div 
      className="w-full py-16 min-h-screen flex items-start"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        paddingLeft: '6%',
        paddingRight: '6%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        paddingTop: '8%',
        overflow: 'hidden'
      }}
    >
      <div 
        className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-12 md:gap-16 w-full"
        style={{ minWidth: 0 }}
      >
        {/* Left Column - Title */}
        <div 
          className="flex flex-col justify-start" 
          style={{ 
            paddingRight: '4%',
            minWidth: 0,
            overflow: 'hidden'
          }}
        >
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-arbonnie font-bold uppercase leading-tight"
            style={{
              fontFamily: "'ARBONNIE', 'Americana', 'Bellerose', cursive, sans-serif",
              color: '#FFFFFF',
              lineHeight: '1.1',
              letterSpacing: '0.15em',
              fontWeight: 700,
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%'
            }}
          >
            <span className="block mb-2">BIO/</span>
            <span className="block relative inline-block">
              STATEMENT
              <span 
                className="absolute bottom-0 left-0 h-1"
                style={{ 
                  width: '45%',
                  backgroundColor: '#003153',
                  marginTop: '0.2em'
                }}
              />
            </span>
          </h1>
        </div>

        {/* Right Column - Text */}
        <div 
          className="flex flex-col justify-start" 
          style={{ 
            paddingLeft: '2%',
            minWidth: 0,
            overflow: 'hidden'
          }}
        >
          <div 
            className="text-white space-y-6 text-base md:text-lg"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              textAlign: 'justify',
              color: '#FFFFFF',
              lineHeight: '1.7',
              hyphens: 'auto',
              maxWidth: '100%',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            <p style={{ color: '#FFFFFF' }}>
              Docente universitario, investigador interdisciplinar y artista plástico y visual multidisciplinar, 
              <strong style={{ color: '#FFFFFF' }}> Juan José Mora Galeote</strong> —conocido como <strong style={{ color: '#FFFFFF' }}>J.J. Mogat</strong>— vive y trabaja 
              entre Málaga, Sevilla y Berlín. Doctor en Arte y Cultura Artística y titular de cuatro másteres 
              (en Lenguajes y Poéticas del Arte Contemporáneo; Producción e Investigación en Arte; Profesorado 
              con especialidad en Dibujo, Imagen y Artes Plásticas por la UGR; e Investigación en Psicología 
              por la UNED), su práctica no conoce fronteras técnicas: <em style={{ color: '#FFFFFF' }}>la idea define el medio</em>.
            </p>

            <p style={{ color: '#FFFFFF' }}>
              Su obra abarca desde la producción literaria, la ilustración y la fotografía hasta la escultura, 
              la instalación, el uso de nuevas tecnologías y la pintura, disciplina en la que explora los contrastes 
              de la realidad analógica y las múltiples opciones que nos ofrece la pantalla.
            </p>

            <p style={{ color: '#FFFFFF' }}>
              Sus intereses teóricos examinan las estructuras que configuran la identidad cultural, individual y 
              social, empleando herramientas artísticas y psicológicas para el autoconocimiento y la compartición 
              de emociones. Al trasladar la imaginería cotidiana de la pantalla al lienzo y dialogar con técnicas 
              clásicas e inteligencia artificial, su obra realiza una crítica social de la injusticia y la erradicación 
              autoritaria de identidades entendidas como desidentes. El detalle depurado, el color vibrante y el brillo 
              subrayan la vida como un derecho a existir.
            </p>

            <p style={{ color: '#FFFFFF' }}>
              El contraste dentro de una aparente homogeneidad es la clave del análisis estético que ofrece su trabajo 
              plástico y visual. El pintor tradicional Antonio López dice: <em style={{ color: '#FFFFFF' }}>"Un artista pinta lo que ve; si estoy en 
              Madrid, pinto Madrid"</em>. Hoy, un artista —armado con conectividad absoluta— ve mucho más allá de la 
              realidad analógica. La pantalla nos brinda un inmenso mundo de información visual y la posibilidad de 
              visitar lugares desde el sofá o en el metro. Pinto todo lo que esta pequeña pero vasta ventana de la 
              pantalla me ofrece. La naturaleza cotidiana y globalizada de la pantalla nos une, y es justo que el arte 
              proporcione este análisis visual y social, tal como lo hicieron los pintores antes de la invención de 
              la fotografía.
            </p>

            <h2 style={{ color: '#FFFFFF' }} className="text-2xl font-light mt-8 mb-4">
              Líneas de Investigación
            </h2>

            <p style={{ color: '#FFFFFF' }}>
              Sus principales líneas de investigación se centran en las estructuras que conforman la identidad cultural, 
              social e individual, poniendo en diálogo herramientas de análisis psicológico y estético para el autoconocimiento 
              y la compartición de emociones. En este marco, la neuroestética conecta aprendizaje, desarrollo y creatividad, 
              mientras que la inteligencia emocional, la interpretación y el reconocimiento de afectos atraviesan transversalmente 
              su creación visual. A partir de estos intereses, Mogat ha acuñado el término <strong style={{ color: '#FFFFFF' }}>belkitsch</strong> para 
              describir el cambio de visión estético contemporáneo y reivindicar el kitsch desde un planteamiento conceptual, 
              cruzando estéticas vecinas y explorando cómo el contexto, la interacción con el mismo e interindividual configuran 
              la experiencia artística.
            </p>

            <h2 style={{ color: '#FFFFFF' }} className="text-2xl font-light mt-8 mb-4">
              Ámbito Docente
            </h2>

            <p style={{ color: '#FFFFFF' }}>
              En el ámbito docente, aporta innovaciones inspiradas en la psicología social y cultural y en la terapia de las 
              artes expresivas —como la Didáctica Triádica Integral y el estudio de fondos identitarios— con especial atención 
              al vínculo entre docente y discente. Paralelamente, profundiza en los efectos de las redes sociales y el uso de 
              pantallas sobre el autoconcepto y los rasgos de personalidad, dando lugar al constructo de <em style={{ color: '#FFFFFF' }}>"autoconcepto 
              proyectado-digital"</em>. A través de su obra y su labor académica, J.J. Mogat promueve la empatía y el apego 
              como ejes de la enseñanza y la creación, subrayando el arte como vehículo de análisis social y reivindicación 
              del derecho a existir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
