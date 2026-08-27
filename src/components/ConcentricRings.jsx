import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ConcentricRings({ color = '#8B1A1A', customStyle = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1,
        width: '600px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...customStyle,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.08, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
        style={{
          position: 'absolute',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          border: `2px solid ${color}`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
        style={{
          position: 'absolute',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          border: `1.5px dashed ${color}`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
        transition={{ duration: 2.1, ease: 'easeOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: `1px solid ${color}`,
        }}
      />
    </div>
  );
}
