import Particles from '@/components/Particles';

export const metadata = {
  title: "Bio / Statement | Juan José Mogat",
  description: "Biografía y statement artístico de Juan José Mogat",
};

export default function Bio() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
        <Particles />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
            BIO / STATEMENT
          </h1>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Docente universitario, investigador interdisciplinar y artista plástico y visual multidisciplinar, 
              <strong className="text-white"> Juan José Mora Galeote</strong> —conocido como <strong className="text-white">J.J. Mogat</strong>— vive y trabaja 
              entre Málaga, Sevilla y Berlín. Doctor en Arte y Cultura Artística y titular de cuatro másteres 
              (en Lenguajes y Poéticas del Arte Contemporáneo; Producción e Investigación en Arte; Profesorado 
              con especialidad en Dibujo, Imagen y Artes Plásticas por la UGR; e Investigación en Psicología 
              por la UNED), su práctica no conoce fronteras técnicas: <em>la idea define el medio</em>.
            </p>

            <p>
              Su obra abarca desde la producción literaria, la ilustración y la fotografía hasta la escultura, 
              la instalación, el uso de nuevas tecnologías y la pintura, disciplina en la que explora los contrastes 
              de la realidad analógica y las múltiples opciones que nos ofrece la pantalla.
            </p>

            <p>
              Sus intereses teóricos examinan las estructuras que configuran la identidad cultural, individual y 
              social, empleando herramientas artísticas y psicológicas para el autoconocimiento y la compartición 
              de emociones. Al trasladar la imaginería cotidiana de la pantalla al lienzo y dialogar con técnicas 
              clásicas e inteligencia artificial, su obra realiza una crítica social de la injusticia y la erradicación 
              autoritaria de identidades entendidas como desidentes. El detalle depurado, el color vibrante y el brillo 
              subrayan la vida como un derecho a existir.
            </p>

            <p>
              El contraste dentro de una aparente homogeneidad es la clave del análisis estético que ofrece su trabajo 
              plástico y visual. El pintor tradicional Antonio López dice: <em>"Un artista pinta lo que ve; si estoy en 
              Madrid, pinto Madrid"</em>. Hoy, un artista —armado con conectividad absoluta— ve mucho más allá de la 
              realidad analógica. La pantalla nos brinda un inmenso mundo de información visual y la posibilidad de 
              visitar lugares desde el sofá o en el metro. Pinto todo lo que esta pequeña pero vasta ventana de la 
              pantalla me ofrece. La naturaleza cotidiana y globalizada de la pantalla nos une, y es justo que el arte 
              proporcione este análisis visual y social, tal como lo hicieron los pintores antes de la invención de 
              la fotografía.
            </p>

            <h2 className="text-2xl font-light text-white mt-12 mb-6">
              Líneas de Investigación
            </h2>

            <p>
              Sus principales líneas de investigación se centran en las estructuras que conforman la identidad cultural, 
              social e individual, poniendo en diálogo herramientas de análisis psicológico y estético para el autoconocimiento 
              y la compartición de emociones. En este marco, la neuroestética conecta aprendizaje, desarrollo y creatividad, 
              mientras que la inteligencia emocional, la interpretación y el reconocimiento de afectos atraviesan transversalmente 
              su creación visual. A partir de estos intereses, Mogat ha acuñado el término <strong className="text-white">belkitsch</strong> para 
              describir el cambio de visión estético contemporáneo y reivindicar el kitsch desde un planteamiento conceptual, 
              cruzando estéticas vecinas y explorando cómo el contexto, la interacción con el mismo e interindividual configuran 
              la experiencia artística.
            </p>

            <h2 className="text-2xl font-light text-white mt-12 mb-6">
              Ámbito Docente
            </h2>

            <p>
              En el ámbito docente, aporta innovaciones inspiradas en la psicología social y cultural y en la terapia de las 
              artes expresivas —como la Didáctica Triádica Integral y el estudio de fondos identitarios— con especial atención 
              al vínculo entre docente y discente. Paralelamente, profundiza en los efectos de las redes sociales y el uso de 
              pantallas sobre el autoconcepto y los rasgos de personalidad, dando lugar al constructo de <em>"autoconcepto 
              proyectado-digital"</em>. A través de su obra y su labor académica, J.J. Mogat promueve la empatía y el apego 
              como ejes de la enseñanza y la creación, subrayando el arte como vehículo de análisis social y reivindicación 
              del derecho a existir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
