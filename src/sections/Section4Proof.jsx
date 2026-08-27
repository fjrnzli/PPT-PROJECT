import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { QrCode, CheckCircle2, Sparkles } from 'lucide-react';
import ConcentricRings from '../components/ConcentricRings';

/*
 * IMAGE PLACEHOLDER: /public/images/qr-mailroom.jpg
 *
 * This should be the REAL PHOTO of the QR code that was
 * physically posted at the OJK Kalimantan Selatan mailroom.
 * Not an illustration, an actual field documentation photo.
 */

const checkItems = [
  'Seluruh alur sudah diuji dengan data asli',
  'Formulir, otomasi email, dan pengecekan status berfungsi penuh',
  'QR code terpasang fisik dan siap digunakan',
];

export default function Section4Proof() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="slide-section" id="slide-proof" style={{ background: 'white' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 70% 30%, rgba(139,26,26,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <ConcentricRings
        customStyle={{ top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}
      />

      <div ref={sectionRef} style={{
        maxWidth: '1000px',
        width: '100%',
        padding: '60px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Left: QR Photo (Polaroid Style) */}
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.85 }}
          animate={isInView ? { opacity: 1, rotate: -2, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >

          <motion.div
            whileHover={{
              rotate: 0,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            style={{
              background: 'white',
              padding: '16px 16px 48px',
              borderRadius: '4px',
              boxShadow: '0 16px 56px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)',
              transform: 'rotate(-2deg)',
              maxWidth: '360px',
              width: '100%',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {/* Photo Content */}
            <div style={{
              width: '100%',
              borderRadius: '4px',
              overflow: 'hidden',
              background: 'white',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src="/images/qr-mailroom.jpg"
                alt="QR Code pendaftaran magang terpasang di mailroom OJK Kalimantan Selatan"
                style={{
                  width: '100%',
                  maxHeight: '55vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                position: 'absolute',
                inset: 0,
                color: '#8B1A1A',
                minHeight: '280px',
              }}>
                <QrCode size={64} strokeWidth={1.2} />
                <span style={{ fontSize: '0.8rem', color: '#9A9A9A', textAlign: 'center', padding: '0 20px' }}>
                  Ganti dengan foto asli QR Code di mailroom:<br />qr-mailroom.jpg
                </span>
              </div>
            </div>

            {/* Caption */}
            <p style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#4A4A4A',
              marginTop: '16px',
              fontWeight: 500,
              lineHeight: 1.4,
            }}>
              QR Code Pendaftaran<br />
              Terpasang di Mailroom OJK Kalimantan Selatan
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge with sparkle */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#8B1A1A',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
                padding: '6px 16px',
                background: 'rgba(139,26,26,0.06)',
                borderRadius: '20px',
              }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles size={14} />
              </motion.div>
              Bukti Nyata
            </motion.span>
            <h2 className="heading-section" style={{ color: '#1A1A1A', marginBottom: '24px' }}>
              Sudah Diterapkan<br />& Berjalan di Lapangan
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="body-presentation" style={{ color: '#4A4A4A', marginBottom: '32px' }}>
              Sistem ini bukan rancangan di atas kertas. QR code pendaftaran sudah ditempel secara fisik di depan mailroom kantor OJK Kalimantan Selatan, sehingga siapa saja bisa langsung scan dan mendaftar dalam hitungan menit.
            </p>
          </motion.div>

          {/* Status Badges with stagger */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {checkItems.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  background: 'rgba(139,26,26,0.04)',
                  borderRadius: '10px',
                  borderLeft: '3px solid #8B1A1A',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + i * 0.15,
                    type: 'spring',
                    stiffness: 300,
                  }}
                >
                  <CheckCircle2 size={20} color="#8B1A1A" />
                </motion.div>
                <span style={{ fontSize: '0.95rem', color: '#1A1A1A', fontWeight: 500 }}>
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          #slide-proof > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
