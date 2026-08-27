import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import ConcentricRings from '../components/ConcentricRings';

/*
 * IMAGE PLACEHOLDER: /public/images/ojk-building.jpg
 * Same image as Section 1 cover for "closing the loop"
 */

const LINKS = [
  {
    url: 'https://docs.google.com/forms/d/1qlc2TROGHXOHoCuUp5FpD8aapJ-DtuJBD1zyhlBXtJI/edit',
    label: 'Google Form (akses admin)',
  },
  {
    url: 'https://docs.google.com/spreadsheets/d/1S8lNg0qDYzySVRqal5NXrE-7_YHgtuys79_30zTYdrQ/edit?gid=1612123886#gid=1612123886',
    label: 'Spreadsheet (akses admin)',
  },
  {
    url: 'https://script.google.com/macros/s/AKfycbzeNPd1gGRKsbY2Ig6tteT35LmmGbP8EYyEWP5xDL_X4dqAVBu_4kX8MsfWtMbfb-p7/exec',
    label: 'Apps Script',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Floating particles for background animation */
function FloatingParticles() {
  const particles = [
    { x: '8%', y: '15%', size: 4, delay: 0, dur: 8 },
    { x: '92%', y: '25%', size: 3, delay: 1.5, dur: 10 },
    { x: '18%', y: '80%', size: 5, delay: 0.8, dur: 7 },
    { x: '78%', y: '72%', size: 3, delay: 2, dur: 9 },
    { x: '45%', y: '10%', size: 4, delay: 0.3, dur: 11 },
    { x: '60%', y: '88%', size: 3, delay: 1.2, dur: 8 },
    { x: '30%', y: '55%', size: 2, delay: 3, dur: 12 },
    { x: '85%', y: '50%', size: 4, delay: 0.5, dur: 9 },
    { x: '12%', y: '40%', size: 3, delay: 2.5, dur: 10 },
    { x: '55%', y: '30%', size: 2, delay: 1.8, dur: 7 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0.1, 0.3, 0],
            y: [0, -30, 10, -20, 0],
            x: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.5)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      ))}
      {/* Slow moving gradient orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.8, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />
    </>
  );
}

export default function Section7Closing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="slide-section" id="slide-closing" style={{ position: 'relative' }}>
      {/* Background with maroon overlay (mirroring cover) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/ojk-building.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(107,20,20,0.95) 0%, rgba(139,26,26,0.92) 50%, rgba(166,28,28,0.88) 100%)',
        }} />
      </div>

      {/* Animated background particles */}
      <FloatingParticles />

      <ConcentricRings 
        color="rgba(255, 255, 255, 0.4)" 
        customStyle={{ top: 'auto', bottom: '0', left: '50%', transform: 'translate(-50%, 40%) scale(1.3)' }} 
      />

      {/* Subtle grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />

      {/* Content */}
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '0 24px',
        }}
      >
        {/* Thank You */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '32px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(180deg, white 0%, rgba(255,255,255,0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Terima Kasih
        </motion.h2>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            margin: '0 auto 40px',
            borderRadius: '2px',
          }}
        />

        {/* Quick Access Links */}
        <motion.div variants={itemVariants}>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 600,
          }}>
            Akses Langsung
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            {LINKS.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                  background: 'rgba(255,255,255,0.22)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {link.label}
                <ExternalLink size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Email Contact */}
        <motion.p
          variants={itemVariants}
          style={{
            marginTop: '32px',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          Sistem notifikasi: magangojkkalsel@gmail.com
        </motion.p>
      </motion.div>
    </section>
  );
}
