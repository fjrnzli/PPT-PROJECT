import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ConcentricRings from '../components/ConcentricRings';

/* ========================================================
 * KPI VALUES - EASY TO EDIT
 * Update these values once you have real data.
 * ======================================================== */
const KPI_DATA = [
  {
    value: 5,
    prefix: '< ',
    suffix: ' menit',
    label: 'Waktu konfirmasi status pendaftaran',
    sublabel: 'Otomatisasi sistem',
    description: 'dari sebelumnya yang memakan waktu ±3-5 hari kerja secara manual',
    color: '#8B1A1A',
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Pelamar menerima notifikasi status',
    sublabel: 'Estimasi awal',
    description: 'dari sebelumnya seringkali 0% pemberitahuan saat ditolak',
    color: '#4285F4',
  },
  {
    value: 0,
    prefix: '',
    suffix: ' rupiah',
    label: 'Biaya tambahan sistem',
    sublabel: 'Estimasi awal',
    description: 'dibangun penuh menggunakan Google Workspace gratis',
    color: '#0F9D58',
  },
  {
    value: 1,
    prefix: '',
    suffix: ' tempat',
    label: 'Seluruh data pelamar terpusat',
    sublabel: 'Estimasi awal',
    description: 'dari sebelumnya tersebar di email & berkas fisik terpisah',
    color: '#7248B9',
  },
];

const COMPARISON_DATA = [
  {
    aspect: 'Cara mendaftar',
    before: 'Serahkan berkas fisik ke mailroom',
    after: 'Isi formulir daring dari mana saja',
  },
  {
    aspect: 'Cek status',
    before: 'Tidak tersedia, harus tanya langsung',
    after: 'Cek mandiri kapan saja, real-time',
  },
  {
    aspect: 'Kabar hasil',
    before: 'Sering tanpa pemberitahuan sama sekali',
    after: 'Notifikasi otomatis setiap status berubah',
  },
];

export default function Section5Impact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="slide-section" id="slide-impact" style={{
      background: '#FAFAFA',
      flexDirection: 'column',
      padding: '50px 24px',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(139,26,26,0.04) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <ConcentricRings 
        customStyle={{ top: '0', left: '0', transform: 'translate(-30%, -30%) scale(1)' }} 
      />

      <div ref={sectionRef} style={{ maxWidth: '1000px', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Header - no icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
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
            Dampak & Perubahan
          </span>
          <h2 className="heading-section" style={{ color: '#1A1A1A' }}>
            Before & After
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #8B1A1A, #D4442A)',
              margin: '16px auto 0',
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Before / After Comparison - clean 2-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          {/* Before Column */}
          <div style={{ background: '#EEEEEE' }}>
            <div style={{
              padding: '16px 24px',
              background: '#D8D8D8',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#555',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Sebelum
            </div>
            {COMPARISON_DATA.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  padding: '16px 24px',
                  borderBottom: i < COMPARISON_DATA.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {row.aspect}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}>
                  {row.before}
                </div>
              </motion.div>
            ))}
          </div>

          {/* After Column */}
          <div style={{ background: '#8B1A1A' }}>
            <div style={{
              padding: '16px 24px',
              background: '#6B1414',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Sesudah
            </div>
            {COMPARISON_DATA.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  padding: '16px 24px',
                  borderBottom: i < COMPARISON_DATA.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {row.aspect}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'white', lineHeight: 1.5, fontWeight: 500 }}>
                    {row.after}
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, type: 'spring', stiffness: 300 }}
                >
                  <ArrowRightIcon size={16} color="rgba(255,255,255,0.5)" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {KPI_DATA.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
                transition: { duration: 0.25 },
              }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px 20px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Top color accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.12 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: kpi.color,
                  transformOrigin: 'left',
                }}
              />

              {/* Shimmer sweep */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={isInView ? { x: '200%' } : {}}
                transition={{ duration: 1.2, delay: 1.2 + index * 0.15, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              />

              {/* Big Number */}
              <div style={{
                fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                fontWeight: 800,
                color: kpi.color,
                lineHeight: 1.1,
                marginBottom: '8px',
              }}>
                <AnimatedCounter
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  duration={2000}
                />
              </div>

              {/* Label */}
              <p style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1A1A1A',
                marginBottom: '6px',
                lineHeight: 1.3,
              }}>
                {kpi.label}
              </p>

              {/* Sublabel */}
              <span style={{
                display: 'inline-block',
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#9A9A9A',
                background: '#F5F5F5',
                padding: '3px 8px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '6px',
              }}>
                {kpi.sublabel}
              </span>

              {/* Description */}
              <p style={{
                fontSize: '0.75rem',
                color: '#9A9A9A',
                lineHeight: 1.4,
              }}>
                {kpi.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 900px) {
          #slide-impact > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          #slide-impact > div > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          #slide-impact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
