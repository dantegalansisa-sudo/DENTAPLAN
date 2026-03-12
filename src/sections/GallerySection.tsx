import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const galleryImages = [
  { src: '/imagenes/area real.jpeg', alt: 'Área de la clínica', label: 'Nuestra Clínica' },
  { src: '/imagenes/area real1.jpeg', alt: 'Instalaciones de la clínica', label: 'Instalaciones' },
  { src: '/imagenes/area real.jpeg', alt: 'Consultorio', label: 'Consultorio' },
  { src: '/imagenes/area real1.jpeg', alt: 'Sala de tratamiento', label: 'Sala de Tratamiento' },
  { src: '/imagenes/area real.jpeg', alt: 'Área de atención', label: 'Área de Atención' },
  { src: '/imagenes/area real1.jpeg', alt: 'Espacio clínico', label: 'Espacio Clínico' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function GallerySection() {
  return (
    <section id="galeria" className="gallery section" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestro espacio
        </motion.span>
        <RevealText tag="h2" className="section-title">
          LA CLÍNICA
        </RevealText>
        <motion.p
          className="gallery__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Instalaciones diseñadas para tu comodidad, equipadas con tecnología de última generación.
        </motion.p>

        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.label}
              className="gallery__item"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <img src={img.src} alt={img.alt} className="gallery__img" loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__label">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
