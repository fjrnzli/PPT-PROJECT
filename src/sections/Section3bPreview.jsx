import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import BrowserMockup from '../components/BrowserMockup';
import ConcentricRings from '../components/ConcentricRings';

const PREVIEWS = [
  {
    src: '/images/preview-form.png',
    label: 'Formulir Pendaftaran',
    url: 'https://docs.google.com/forms/d/1qlc2TROGHXOHoCuUp5FpD8aapJ-DtuJBD1zyhlBXtJI/edit',
    browserUrl: 'docs.google.com/forms/...',
    description: 'Pelamar mengisi data diri dan upload berkas dalam satu halaman.',
  },
  {
    src: '/images/preview-spreadsheet.png',
    label: 'Data & Status Pelamar',
    url: 'https://docs.google.com/spreadsheets/d/1S8lNg0qDYzySVRqal5NXrE-7_YHgtuys79_30zTYdrQ/edit?gid=1612123886#gid=1612123886',
    browserUrl: 'docs.google.com/spreadsheets/...',
    description: 'Data masuk otomatis. Admin cukup pilih status via dropdown.',
  },
  {
    src: '/images/preview-status-checker.png',
    label: 'Cek Status Magang',
    url: 'https://script.google.com/macros/s/AKfycbzeNPd1gGRKsbY2Ig6tteT35LmmGbP8EYyEWP5xDL_X4dqAVBu_4kX8MsfWtMbfb-p7/exec',
    browserUrl: 'script.google.com/macros/...',
    description: 'Pelamar cek status lamaran secara mandiri, kapan saja.',
  },
];

export default function Section3bPreview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="slide-section" id="slide-preview" style={{
      background: 'white',
      flexDirection: 'column',
      padding: '48px 24px',
    }}>
      <ConcentricRings 
        customStyle={{ top: 'auto', bottom: '0', left: 'auto', right: '0', transform: 'translate(30%, 40%) scale(1.1)' }} 
      />
      <div ref={sectionRef} style={{ maxWidth: '1100px', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
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
            Tampilan Sistem
          </span>
          <h2 className="heading-section" style={{ color: '#1A1A1A' }}>
            Preview Langsung
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#6A6A6A',
            marginTop: '10px',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Klik pada gambar untuk mengakses sistem secara langsung
          </p>
        </motion.div>

        {/* 3-column preview grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }}>
          {PREVIEWS.map((preview, i) => (
            <motion.a
              key={i}
              href={preview.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6 }}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                cursor: 'pointer',
              }}
            >
              <BrowserMockup url={preview.browserUrl}>
                <img
                  src={preview.src}
                  alt={preview.label}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
              </BrowserMockup>

              {/* Label + Description */}
              <div style={{
                marginTop: '14px',
                textAlign: 'center',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginBottom: '6px',
                }}>
                  <span style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#1A1A1A',
                  }}>
                    {preview.label}
                  </span>
                  <ExternalLink size={14} color="#8B1A1A" />
                </div>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#6A6A6A',
                  lineHeight: 1.4,
                }}>
                  {preview.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          #slide-preview > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
