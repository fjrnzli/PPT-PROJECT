import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileX, ShieldQuestion } from 'lucide-react';
import ConcentricRings from '../components/ConcentricRings';

const problems = [
  {
    icon: FileX,
    title: 'Berkas Fisik ke Mailroom',
    description:
      'Pelamar harus mencetak CV, surat lamaran, dan transkrip, lalu mengantarkan langsung ke mailroom kantor OJK. Bagi yang berdomisili jauh dari Banjarmasin, ini berarti waktu dan biaya tambahan hanya untuk menyerahkan berkas.',
    stat: '3-5 hari',
    statLabel: 'proses manual',
  },
  {
    icon: ShieldQuestion,
    title: 'Tidak Ada Kejelasan Status',
    description:
      'Setelah menyerahkan berkas, pelamar tidak punya cara untuk mengecek apakah lamarannya sedang diproses, diterima, atau ditolak. Bahkan jika ditolak, seringkali sama sekali tidak ada pemberitahuan, akibatnya pelamar hanya bisa menunggu tanpa kepastian.',
    stat: '0%',
    statLabel: 'transparansi',
  },
];

export default function Section2Problem() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="slide-section" id="slide-problem" style={{ background: '#FAFAFA' }}>
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(139,26,26,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,26,26,0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <ConcentricRings 
        customStyle={{ top: 'auto', bottom: '0', left: '0', transform: 'translate(-40%, 40%) scale(1.1)' }} 
      />

      <div ref={sectionRef} style={{
        maxWidth: '900px',
        width: '100%',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Header (centered) - no icon above */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="heading-section" style={{ marginBottom: '16px', color: '#1A1A1A' }}>
            Latar Belakang
          </h2>
          <p className="body-presentation" style={{
            color: '#4A4A4A',
            maxWidth: '620px',
            margin: '0 auto',
          }}>
            Proses pendaftaran magang di OJK Kalimantan Selatan selama ini masih berjalan sepenuhnya manual, dan hal ini menciptakan pengalaman yang tidak ideal, baik bagi pelamar maupun admin.
          </p>
        </motion.div>

        {/* Two Problem Cards - icon beside title */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          width: '100%',
        }}>
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.4 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 48px rgba(139, 26, 26, 0.25)',
                transition: { duration: 0.3 },
              }}
              className="card-solid-maroon"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                alignItems: 'flex-start',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.03) 100%)',
                  backgroundSize: '200% 200%',
                  borderRadius: '16px',
                  pointerEvents: 'none',
                }}
              />

              {/* Title row with icon BESIDE it */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
                zIndex: 2,
              }}>
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <problem.icon size={22} color="white" />
                </motion.div>
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.3,
                }}>
                  {problem.title}
                </h4>
              </div>

              {/* Stat badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '6px',
                  padding: '6px 12px',
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                  {problem.stat}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                  {problem.statLabel}
                </span>
              </motion.div>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.85)',
                position: 'relative',
                zIndex: 2,
              }}>
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Stack vertically */}
      <style>{`
        @media (max-width: 768px) {
          #slide-problem > div > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
