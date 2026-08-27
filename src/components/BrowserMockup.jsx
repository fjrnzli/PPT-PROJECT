export default function BrowserMockup({ children, url = '', className = '' }) {
  return (
    <div className={`browser-mockup ${className}`} style={{
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      background: '#fff',
      maxWidth: '100%',
    }}>
      {/* Title Bar */}
      <div style={{
        background: '#E8E8E8',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        {/* Traffic Lights */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        </div>
        {/* URL Bar */}
        {url && (
          <div style={{
            flex: 1,
            background: '#fff',
            borderRadius: '6px',
            padding: '4px 12px',
            fontSize: '12px',
            color: '#666',
            marginLeft: '8px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {url}
          </div>
        )}
      </div>
      {/* Content */}
      <div style={{ background: '#fff', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}
