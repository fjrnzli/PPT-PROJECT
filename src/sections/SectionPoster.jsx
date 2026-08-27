import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionPoster() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="slide-section" id="slide-poster" style={{
      background: '#f8f9fa',
      flexDirection: 'column',
      padding: '40px 24px',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div ref={sectionRef} style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '24px' }}
        >
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(179, 18, 23, 0.1)',
            color: '#b31217',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            DESAIN POSTER FISIK
          </span>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            color: '#1a1a1a', 
            lineHeight: 1.2,
            margin: 0
          }}>
            Informasi Pendaftaran Magang
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#666',
            fontWeight: 500,
            marginTop: '12px',
            maxWidth: '600px'
          }}>
            Poster yang saat ini ditempatkan di depan ruang persuratan (mailroom) untuk memberikan panduan dan informasi persyaratan kepada calon pemagang.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{
            padding: '12px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'inline-block'
          }}>
            <img 
              src="/poster-mailroom.jpg" 
              alt="Poster Persyaratan Magang OJK Kalsel"
              style={{
                maxHeight: '65vh',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                display: 'block'
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Wave decoration */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40px',
        background: 'linear-gradient(to right, #b31217, #7a0c10)',
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%',
        opacity: 0.9,
      }}></div>
    </section>
  );
}
