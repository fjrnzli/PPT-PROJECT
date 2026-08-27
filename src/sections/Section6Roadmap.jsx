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
              <div style={{
                background: '#F8F8F8',
                borderRadius: '16px',
                padding: '28px 24px',
                width: '260px',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                {/* Step Number Circle */}
                <div style={{
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
                }}>
                  {index + 1}
                </div>

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
              </div>

              {/* Connector Arrow */}
              {index < ROADMAP_STEPS.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '56px',
                  margin: '0 8px',
                }}>
                  <ArrowRight size={24} color="#D0D0D0" />
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
