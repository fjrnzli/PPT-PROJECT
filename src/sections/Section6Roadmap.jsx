import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  Mail as MailIcon,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import ConcentricRings from '../components/ConcentricRings';

const ROADMAP_STEPS = [
  {
    icon: Users,
    title: 'Koordinasi Akses',
    description: 'Serah terima akses sistem ke tim HR/Mailroom OJK agar operasional bisa dilanjutkan secara mandiri.',
    status: 'upcoming',
  },
  {
    icon: MailIcon,
    title: 'Migrasi Domain Email',
    description: 'Migrasi dari email percobaan ke domain resmi OJK untuk kredibilitas dan keamanan lebih tinggi.',
    status: 'upcoming',
  },
  {
    icon: Layers,
    title: 'Perluasan Proses',
    description: 'Potensi penerapan pendekatan serupa untuk proses administratif lain yang masih manual di OJK.',
    status: 'future',
  },
];

export default function Section6Roadmap() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="slide-section" id="slide-roadmap" style={{ background: 'white' }}>
      <div ref={sectionRef} style={{
        maxWidth: '1000px',
        width: '100%',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#8B1A1A',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '12px',
          }}>
            Status & Rencana
          </span>
          <h2 className="heading-section" style={{ color: '#1A1A1A' }}>
            Sejauh Ini, dan Selanjutnya
          </h2>
        </motion.div>

        {/* Current Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-solid-maroon"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <CheckCircle2 size={28} color="white" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '6px' }}>
              Status Saat Ini: Berjalan Penuh
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
              Sistem sudah berjalan sebagai versi uji coba yang lengkap. Seluruh alur mulai dari pendaftaran, otomasi email, hingga pengecekan status telah diuji dengan data contoh dan terbukti berfungsi.
            </p>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0',
          justifyContent: 'center',
        }}>
          {ROADMAP_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              {/* Step Card */}
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                  transition: { duration: 0.25 },
                }}
                style={{
                  background: '#F8F8F8',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  width: '260px',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, type: 'spring', stiffness: 250, damping: 15 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: step.status === 'future' ? '#E0E0E0' : '#8B1A1A',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    boxShadow: step.status !== 'future' ? '0 4px 14px rgba(139,26,26,0.25)' : 'none',
                  }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: step.status === 'future' ? 'rgba(0,0,0,0.04)' : 'rgba(139,26,26,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                }}>
                  <step.icon
                    size={24}
                    color={step.status === 'future' ? '#9A9A9A' : '#8B1A1A'}
                  />
                </div>

                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  marginBottom: '8px',
                }}>
                  {step.title}
                </h4>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#4A4A4A',
                  lineHeight: 1.5,
                }}>
                  {step.description}
                </p>
              </motion.div>

              {/* Animated Connector Arrow */}
              {index < ROADMAP_STEPS.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '56px',
                  margin: '0 4px',
                  width: '48px',
                }}>
                  <svg width="48" height="28" viewBox="0 0 48 28" fill="none" style={{ overflow: 'visible' }}>
                    {/* Soft glow track */}
                    <motion.path
                      d="M4 14 Q24 14 44 14"
                      stroke="rgba(139,26,26,0.06)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    />
                    {/* Main line */}
                    <motion.path
                      d="M4 14 Q24 14 44 14"
                      stroke="url(#roadmapGrad)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2, ease: [0.4, 0, 0.2, 1] }}
                    />
                    {/* Arrow tip */}
                    <motion.path
                      d="M38 8 L48 14 L38 20"
                      stroke="#D0D0D0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                    />
                    {/* Traveling dot */}
                    <motion.circle
                      r="2.5" cy="14" fill="#8B1A1A"
                      initial={{ opacity: 0 }}
                      animate={isInView ? {
                        cx: [4, 44],
                        opacity: [0, 0.8, 0.8, 0],
                      } : {}}
                      transition={{
                        duration: 1.4,
                        delay: 1.2 + index * 0.3,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: [0.4, 0, 0.6, 1],
                      }}
                    />
                    <defs>
                      <linearGradient id="roadmapGrad" x1="4" y1="14" x2="44" y2="14" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D0D0D0" stopOpacity="0.3" />
                        <stop offset="0.5" stopColor="#D0D0D0" />
                        <stop offset="1" stopColor="#8B1A1A" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tone Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#9A9A9A',
            marginTop: '40px',
            fontStyle: 'italic',
          }}
        >
          Project ini kecil dalam skala, tapi nyata dalam dampak, serta menjadi pondasi untuk langkah digitalisasi selanjutnya.
        </motion.p>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 900px) {
          #slide-roadmap > div > div:last-of-type {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
