/**
 * Official Google product icons as inline SVGs
 * Used in the workflow section to show actual tool branding
 */

export function GoogleFormsIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 44H14C11.8 44 10 42.2 10 40V8C10 5.8 11.8 4 14 4H28L38 14V40C38 42.2 36.2 44 34 44Z" fill="#7248B9"/>
      <path d="M28 4L38 14H30C28.9 14 28 13.1 28 12V4Z" fill="#B39DDB"/>
      <circle cx="19" cy="23" r="2" fill="white"/>
      <rect x="24" y="22" width="10" height="2" rx="1" fill="white" opacity="0.9"/>
      <circle cx="19" cy="29" r="2" fill="white"/>
      <rect x="24" y="28" width="10" height="2" rx="1" fill="white" opacity="0.9"/>
      <circle cx="19" cy="35" r="2" fill="white"/>
      <rect x="24" y="34" width="10" height="2" rx="1" fill="white" opacity="0.9"/>
    </svg>
  );
}

export function GoogleSheetsIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 44H14C11.8 44 10 42.2 10 40V8C10 5.8 11.8 4 14 4H28L38 14V40C38 42.2 36.2 44 34 44Z" fill="#0F9D58"/>
      <path d="M28 4L38 14H30C28.9 14 28 13.1 28 12V4Z" fill="#87CEAC"/>
      <rect x="16" y="20" width="16" height="16" rx="1" fill="white" opacity="0.9"/>
      <line x1="16" y1="25" x2="32" y2="25" stroke="#0F9D58" strokeWidth="1"/>
      <line x1="16" y1="30" x2="32" y2="30" stroke="#0F9D58" strokeWidth="1"/>
      <line x1="24" y1="20" x2="24" y2="36" stroke="#0F9D58" strokeWidth="1"/>
    </svg>
  );
}

export function GoogleAppsScriptIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#4285F4"/>
      <path d="M16 20L22 24L16 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="24" y1="30" x2="32" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function GmailIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12C6 9.8 7.8 8 10 8H38C40.2 8 42 9.8 42 12V36C42 38.2 40.2 40 38 40H10C7.8 40 6 38.2 6 36V12Z" fill="#EA4335"/>
      <path d="M6 12L24 26L42 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12V36L18 26" fill="#C5221F"/>
      <path d="M42 12V36L30 26" fill="#C5221F"/>
    </svg>
  );
}
