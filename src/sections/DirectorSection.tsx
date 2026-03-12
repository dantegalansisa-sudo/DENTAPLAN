import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

export default function DirectorSection() {
  return (
    <section className="director section">
      <div className="section-container">
        <div className="director__grid">
          {/* Photo side */}
          <motion.div
            className="director__photo-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            <img
              src="/imagenes/director medico.jpg"
              alt="Dr. Alejandro Reyes — Director Médico"
              className="director__photo"
            />
            {/* Accent frame */}
            <div className="director__frame" />
          </motion.div>

          {/* Content side */}
          <div className="director__content">
            <motion.span
              className="label-mono"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Director Médico
            </motion.span>

            <RevealText tag="h2" className="director__name">
              Dr. Alejandro Reyes
            </RevealText>

            <motion.div
              className="director__credentials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="director__credential">Implantología Avanzada</span>
              <span className="director__credential-dot" />
              <span className="director__credential">Estética Dental</span>
              <span className="director__credential-dot" />
              <span className="director__credential">+15 Años de Experiencia</span>
            </motion.div>

            <motion.blockquote
              className="director__quote"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              "Mi misión es que cada paciente salga de nuestra clínica con la
              mejor versión de su sonrisa. No hacemos tratamientos genéricos —
              diseñamos sonrisas únicas, porque cada persona merece un resultado
              que refleje quién es."
            </motion.blockquote>

            <motion.div
              className="director__stats"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
              }}
            >
              {[
                { value: '+2,400', label: 'Pacientes atendidos' },
                { value: '+500', label: 'Implantes colocados' },
                { value: '15+', label: 'Años de trayectoria' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="director__stat"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
                    },
                  }}
                >
                  <span className="director__stat-value">{stat.value}</span>
                  <span className="director__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="director__signature"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="director__signature-line" />
              <span className="director__signature-name">Dr. Alejandro Reyes M.</span>
              <span className="director__signature-role">Fundador & Director Médico — DentaPlan</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
