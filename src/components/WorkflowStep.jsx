import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkflowStep({
  number,
  icon: Icon,
  title,
  description,
  tool,
  detail,
  delay = 0,
  isActive = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px 20px',
        minWidth: '180px',
        maxWidth: '200px',
        cursor: 'pointer',
        boxShadow: isExpanded
          ? '0 12px 40px rgba(139,26,26,0.15)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        position: 'relative',
        flexShrink: 0,
      }}
      whileHover={{ scale: 1.03, y: -4 }}
    >
      {/* Step Number */}
      <div style={{
        fontSize: '13px',
        fontWeight: 700,
        color: '#8B1A1A',
        marginBottom: '12px',
        letterSpacing: '0.05em',
      }}>
        {number}
      </div>

      {/* Icon */}
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '12px',
        background: 'rgba(139,26,26,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '14px',
      }}>
        <Icon size={24} color="#8B1A1A" />
      </div>

      {/* Title */}
      <h4 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#1A1A1A',
        marginBottom: '6px',
        lineHeight: 1.3,
      }}>
        {title}
      </h4>

      {/* Description */}
      <p style={{
        fontSize: '0.85rem',
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: '12px',
      }}>
        {description}
      </p>

      {/* Tool Badge */}
      <span style={{
        display: 'inline-block',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#8B1A1A',
        background: 'rgba(139,26,26,0.08)',
        padding: '4px 10px',
        borderRadius: '6px',
      }}>
        {tool}
      </span>

      {/* Expandable Detail */}
      <AnimatePresence>
        {isExpanded && detail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: '0.8rem',
              color: '#4A4A4A',
              lineHeight: 1.6,
              marginTop: '12px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(0,0,0,0.06)',
            }}>
              {detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
