import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const doctors = [
  {
    name: 'Dr. Alejandro Reyes',
    specialty: 'Director Médico · Implantología',
    bio: 'Más de 15 años de experiencia en implantología avanzada.',
    img: '/imagenes/director medico.jpg',
  },
  {
    name: 'Dra. Valentina Torres',
    specialty: 'Estética Dental',
    bio: 'Especialista en diseño de sonrisa y carillas de porcelana.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    name: 'Dr. Sebastián Mora',
    specialty: 'Ortodoncia',
    bio: 'Certificado en alineadores invisibles y ortodoncia digital.',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
  },
  {
    name: 'Dra. Camila Herrera',
    specialty: 'Odontopediatría',
    bio: 'Atención especializada para los más pequeños de la casa.',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TeamSection() {
  return (
    <section id="equipo" className="team-section section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          El Equipo
        </motion.span>
        <RevealText
          tag="h2"
          className="section-title"
          style={{ color: 'var(--primary)' }}
        >
          ESPECIALISTAS
        </RevealText>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {doctors.map((doc) => (
            <motion.div key={doc.name} className="doctor-card" variants={cardVariants}>
              <img src={doc.img} alt={doc.name} className="doctor-card__img" />
              <div className="doctor-card__info">
                <span className="doctor-card__name">{doc.name}</span>
                <span className="doctor-card__specialty">{doc.specialty}</span>
                <p className="doctor-card__bio">{doc.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
