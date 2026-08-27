import { motion } from 'framer-motion';
import ConcentricRings from '../components/ConcentricRings';

/*
 * IMAGE PLACEHOLDER: /public/images/ojk-building.jpg
 * 
 * AI Image Generation Prompt:
 * "Professional exterior photograph of a modern Indonesian government office building,
 *  clean white/beige architecture, tropical setting with palm trees, clear blue sky,
 *  official institutional style similar to OJK (Financial Services Authority) buildings
 *  in Indonesia, wide angle shot, high quality architectural photography"
 *
 * Or use an actual photo of the OJK Kalimantan Selatan building.
 */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Floating geometric shapes for background depth */
function FloatingShapes() {
  const shapes = [
    { x: '10%', y: '20%', size: 80, delay: 0, duration: 7 },
    { x: '85%', y: '15%', size: 60, delay: 1, duration: 9 },
    { x: '70%', y: '70%', size: 100, delay: 2, duration: 8 },
    { x: '15%', y: '75%', size: 50, delay: 0.5, duration: 10 },
    { x: '50%', y: '85%', size: 70, delay: 1.5, duration: 6 },
    { x: '30%', y: '40%', size: 40, delay: 3, duration: 11 },
  ];

  return (
    <>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.08, 0.04, 0.08],
            scale: 1,
            y: [0, -20, 10, 0],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            opacity: { duration: s.duration, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 1.5, delay: s.delay },
            y: { duration: s.duration, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: s.duration * 3, repeat: Infinity, ease: 'linear' },
          }}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            border: '2px solid rgba(255,255,255,0.15)',
            borderRadius: i % 2 === 0 ? '20%' : '50%',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

export default function Section1Cover() {
  return (
    <section className="slide-section" id="slide-cover" style={{ position: 'relative' }}>
      {/* Background Image with Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/ojk-building.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(107,20,20,0.95) 0%, rgba(139,26,26,0.88) 40%, rgba(166,28,28,0.82) 100%)',
        }} />
      </div>

      {/* Animated grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <FloatingShapes />
      <ConcentricRings 
        color="rgba(255, 255, 255, 0.4)" 
        customStyle={{ top: '0', left: 'auto', right: '0', transform: 'translate(40%, -30%) scale(1.2)' }} 
      />

      {/* Radial glow behind content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          maxWidth: '900px',
          padding: '0 24px',
        }}
      >
        {/* Institution Badge */}
        <motion.div variants={itemVariants} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 28px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '40px',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '36px',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.15)',
        }}>
          OJK Kalimantan Selatan
        </motion.div>

        {/* Main Title with staggered word reveal */}
        <motion.h1 variants={itemVariants} className="heading-display" style={{
          color: 'white',
          marginBottom: '28px',
        }}>
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'inline-block' }}
          >
            Digitalisasi
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'block',
              background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.7), #fff)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 4s ease-in-out infinite',
            }}
          >
            Pendaftaran Magang
          </motion.span>
        </motion.h1>

        {/* Animated line divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
            margin: '0 auto 28px',
            borderRadius: '2px',
          }}
        />

        {/* Author Info */}
        <motion.div variants={itemVariants} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Muhammad Fajar Nuzuli
          </span>
          <span style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            padding: '4px 16px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '20px',
          }}>
            Peserta Magang di OJK Kalimantan Selatan
          </span>
        </motion.div>
      </motion.div>

      {/* Professional Orb Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        {/* Outer ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        />
        {/* Middle ring */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          style={{
            position: 'absolute',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        />
        {/* Core orb */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.6)',
            boxShadow: '0 0 16px rgba(255,255,255,0.25)',
          }}
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
        pointerEvents: 'none',
        zIndex: 5,
      }} />
    </section>
  );
}
