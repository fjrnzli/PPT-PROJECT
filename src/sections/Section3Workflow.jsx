import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  GoogleFormsIcon,
  GoogleSheetsIcon,
  GoogleAppsScriptIcon,
  GmailIcon,
} from '../components/GoogleToolIcon';
import ConcentricRings from '../components/ConcentricRings';

const WORKFLOW_STEPS = [
  {
    number: '01',
    Icon: GoogleFormsIcon,
    title: 'Isi Formulir',
    description: 'Pelamar mengisi data diri & upload berkas secara daring.',
    tool: 'Google Form',
    color: '#7248B9',
    detail:
      'Formulir mencakup nama lengkap, email, no HP, universitas, program studi, serta upload file CV, surat lamaran, dan transkrip nilai. Semua dalam satu halaman yang mobile-friendly.',
  },
  {
    number: '02',
    Icon: GoogleSheetsIcon,
    title: 'Tersimpan Otomatis',
    description: 'Data langsung masuk spreadsheet, konfirmasi terkirim.',
    tool: 'Google Sheets',
    color: '#0F9D58',
    detail:
      'Setiap submission dari Google Form otomatis tercatat sebagai baris baru di spreadsheet. Bersamaan dengan itu, email konfirmasi pendaftaran otomatis dikirim ke pelamar.',
  },
  {
    number: '03',
    Icon: GoogleSheetsIcon,
    title: 'Admin Review',
    description: 'Admin mengecek kelengkapan dan memilih status pelamar.',
    tool: 'Google Sheets',
    color: '#0F9D58',
    detail:
      'Admin membuka spreadsheet, mengecek kelengkapan berkas tiap pelamar, lalu memilih status via dropdown: Review, Diterima, atau Ditolak.',
  },
  {
    number: '04',
    Icon: GoogleAppsScriptIcon,
    title: 'Notifikasi Otomatis',
    description: 'Email status terkirim otomatis sesuai keputusan.',
    tool: 'Google Apps Script',
    color: '#4285F4',
    detail:
      'Saat admin memilih status di dropdown, Apps Script otomatis mengirim email notifikasi ke pelamar sesuai status yang dipilih (diterima maupun ditolak).',
  },
  {
    number: '05',
    Icon: GmailIcon,
    title: 'Cek Status Mandiri',
    description: 'Pelamar cek status kapan saja via halaman web.',
    tool: 'Apps Script Web App',
    color: '#EA4335',
    detail:
      'Pelamar mengakses halaman pengecekan status dan memasukkan email yang didaftarkan. Sistem menampilkan status terkini secara real-time.',
  },
];

/* ─── Animated SVG connector between steps ─── */
function ConnectorLine({ direction = 'right', delay = 0, isActive }) {
  const isDown = direction === 'down';
  const isLeft = direction === 'left';

  if (isDown) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '56px',
        position: 'relative',
      }}>
        <svg width="28" height="56" viewBox="0 0 28 56" fill="none" style={{ overflow: 'visible' }}>
          {/* Dashed track */}
          <motion.line
            x1="14" y1="0" x2="14" y2="48"
            stroke="rgba(139,26,26,0.15)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay }}
          />
          {/* Animated solid line drawing in */}
          <motion.line
            x1="14" y1="0" x2="14" y2="48"
            stroke="url(#gradDown)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          />
          {/* Arrow head */}
          <motion.polygon
            points="8,44 14,54 20,44"
            fill="#A61C1C"
            initial={{ opacity: 0, scale: 0 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.7, type: 'spring', stiffness: 300 }}
            style={{ transformOrigin: '14px 49px' }}
          />
          {/* Glowing traveling dot */}
          <motion.circle
            r="4" fill="#8B1A1A"
            initial={{ cx: 14, cy: 0, opacity: 0 }}
            animate={isActive ? {
              cy: [0, 48],
              opacity: [0, 1, 1, 0],
            } : {}}
            transition={{
              duration: 1.2,
              delay: delay + 1,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
          />
          <motion.circle
            r="8" fill="none" stroke="rgba(139,26,26,0.3)"
            initial={{ cx: 14, cy: 0, opacity: 0 }}
            animate={isActive ? {
              cy: [0, 48],
              opacity: [0, 0.4, 0.4, 0],
              r: [4, 10, 4],
            } : {}}
            transition={{
              duration: 1.2,
              delay: delay + 1,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient id="gradDown" x1="14" y1="0" x2="14" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B1A1A" />
              <stop offset="1" stopColor="#D4442A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  const gradId = isLeft ? 'gradLeft' : 'gradRight';
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      flexShrink: 0,
      alignSelf: 'center',
      position: 'relative',
    }}>
      <svg width="60" height="28" viewBox="0 0 60 28" fill="none" style={{ overflow: 'visible' }}>
        {/* Dashed track */}
        <motion.line
          x1={isLeft ? 54 : 6} y1="14" x2={isLeft ? 6 : 54} y2="14"
          stroke="rgba(139,26,26,0.15)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay }}
        />
        {/* Animated solid line */}
        <motion.line
          x1={isLeft ? 54 : 6} y1="14" x2={isLeft ? 6 : 54} y2="14"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isActive ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
        {/* Arrow head */}
        <motion.polygon
          points={isLeft ? '10,8 0,14 10,20' : '50,8 60,14 50,20'}
          fill="#A61C1C"
          initial={{ opacity: 0, scale: 0 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: delay + 0.7, type: 'spring', stiffness: 300 }}
          style={{ transformOrigin: isLeft ? '5px 14px' : '55px 14px' }}
        />
        {/* Glowing traveling dot */}
        <motion.circle
          r="4" cy="14" fill="#8B1A1A"
          initial={{ cx: isLeft ? 54 : 6, opacity: 0 }}
          animate={isActive ? {
            cx: isLeft ? [54, 6] : [6, 54],
            opacity: [0, 1, 1, 0],
          } : {}}
          transition={{
            duration: 1.2,
            delay: delay + 1,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: 'easeInOut',
          }}
        />
        {/* Glow ring around dot */}
        <motion.circle
          r="8" cy="14" fill="none" stroke="rgba(139,26,26,0.3)"
          initial={{ cx: isLeft ? 54 : 6, opacity: 0 }}
          animate={isActive ? {
            cx: isLeft ? [54, 6] : [6, 54],
            opacity: [0, 0.4, 0.4, 0],
          } : {}}
          transition={{
            duration: 1.2,
            delay: delay + 1,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <linearGradient id={gradId} x1={isLeft ? '54' : '6'} y1="14" x2={isLeft ? '6' : '54'} y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B1A1A" />
            <stop offset="1" stopColor="#D4442A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Workflow step card ─── */
function WorkflowCard({ step, index, delay, isActive, expandedIndex, setExpandedIndex }) {
  const isExpanded = expandedIndex === index;
  const { Icon } = step;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
      whileHover={{
        scale: 1.04,
        y: -6,
        boxShadow: `0 16px 40px ${step.color}30`,
        transition: { duration: 0.25 },
      }}
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '24px 20px',
        flex: '1 1 0',
        minWidth: 0,
        cursor: 'pointer',
        boxShadow: isExpanded
          ? `0 12px 40px ${step.color}25`
          : '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease',
        position: 'relative',
        borderTop: `3px solid ${step.color}`,
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient bg on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${step.color}06 0%, transparent 60%)`,
          borderRadius: '20px',
          pointerEvents: 'none',
        }}
      />

      {/* Tool Icon + badge */}
      <div style={{
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.div
          animate={isActive ? {
            y: [0, -4, 0],
          } : {}}
          transition={{
            duration: 2.5,
            delay: delay + 1,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        >
          <Icon size={40} />
        </motion.div>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: step.color,
          background: `${step.color}12`,
          padding: '3px 8px',
          borderRadius: '6px',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          {step.tool}
        </span>
      </div>

      {/* Title */}
      <h4 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#1A1A1A',
        marginBottom: '5px',
        lineHeight: 1.3,
        position: 'relative',
        zIndex: 2,
      }}>
        {step.title}
      </h4>

      {/* Description */}
      <p style={{
        fontSize: '0.82rem',
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: '6px',
        position: 'relative',
        zIndex: 2,
      }}>
        {step.description}
      </p>

      {/* Expand hint */}
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          color: '#BFBFBF',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <ChevronDown size={14} />
      </motion.div>

      {/* Expandable Detail */}
      <AnimatePresence>
        {isExpanded && step.detail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', position: 'relative', zIndex: 2 }}
          >
            <p style={{
              fontSize: '0.8rem',
              color: '#4A4A4A',
              lineHeight: 1.6,
              marginTop: '10px',
              paddingTop: '10px',
              borderTop: '1px solid rgba(0,0,0,0.06)',
            }}>
              {step.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Section3Workflow() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [expandedIndex, setExpandedIndex] = useState(-1);

  /*
   * Layout:
   *   [1] ──→ [2] ──→ [3]
   *                     │
   *                     ↓
   *            [5] ←── [4]
   */

  return (
    <section className="slide-section" id="slide-workflow" style={{
      background: '#F5F3F0',
      flexDirection: 'column',
      padding: '44px 24px',
    }}>
      {/* Subtle dot pattern background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(139,26,26,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div ref={sectionRef} style={{ maxWidth: '1000px', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#8B1A1A',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px',
              padding: '6px 16px',
              background: 'rgba(139,26,26,0.06)',
              borderRadius: '20px',
            }}
          >
            Alur Kerja Sistem
          </motion.span>
          <h2 className="heading-section" style={{ color: '#1A1A1A' }}>
            Bagaimana Sistem Ini Bekerja
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #8B1A1A, #D4442A)',
              margin: '16px auto 12px',
              borderRadius: '2px',
            }}
          />
          <p style={{
            fontSize: '0.95rem',
            color: '#6A6A6A',
            marginTop: '8px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Lima langkah terintegrasi, seluruhnya menggunakan ekosistem Google Workspace
          </p>
        </motion.div>

        {/* ─── WORKFLOW GRID ─── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr',
          gap: '16px',
          alignItems: 'center',
        }}>
          {/* Row 1 */}
          <div style={{ gridColumn: 1 }}>
            <WorkflowCard
              step={WORKFLOW_STEPS[0]}
              index={0}
              delay={0.3}
              isActive={isInView}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          </div>
          <div style={{ gridColumn: 2 }}>
            <ConnectorLine direction="right" delay={0.7} isActive={isInView} />
          </div>
          <div style={{ gridColumn: 3 }}>
            <WorkflowCard
              step={WORKFLOW_STEPS[1]}
              index={1}
              delay={0.5}
              isActive={isInView}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          </div>
          <div style={{ gridColumn: 4 }}>
            <ConnectorLine direction="right" delay={0.9} isActive={isInView} />
          </div>
          <div style={{ gridColumn: 5 }}>
            <WorkflowCard
              step={WORKFLOW_STEPS[2]}
              index={2}
              delay={0.7}
              isActive={isInView}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          </div>

          {/* Row 2 (Arrow Down under Step 3) */}
          <div style={{ gridColumn: 5, display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
            <ConnectorLine direction="down" delay={1.1} isActive={isInView} />
          </div>

          {/* Row 3 */}
          <div style={{ gridColumn: 3 }}>
            <WorkflowCard
              step={WORKFLOW_STEPS[4]}
              index={4}
              delay={1.5}
              isActive={isInView}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          </div>
          <div style={{ gridColumn: 4 }}>
            <ConnectorLine direction="left" delay={1.7} isActive={isInView} />
          </div>
          <div style={{ gridColumn: 5 }}>
            <WorkflowCard
              step={WORKFLOW_STEPS[3]}
              index={3}
              delay={1.3}
              isActive={isInView}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 900px) {
          #slide-workflow {
            padding: 40px 16px !important;
          }
          /* Override inline grid for mobile */
          #slide-workflow > div > div:last-child {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
          /* Hide horizontal/vertical grid arrows on mobile */
          #slide-workflow > div > div:last-child > div:nth-child(2),
          #slide-workflow > div > div:last-child > div:nth-child(4),
          #slide-workflow > div > div:last-child > div:nth-child(6),
          #slide-workflow > div > div:last-child > div:nth-child(8) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
