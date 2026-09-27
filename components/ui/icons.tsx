/** Inline stroke icons — no icon font, no emoji standing in for an action. */

type Props = { className?: string };

const base = "shrink-0";

export function GitHubIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M8 1.3a6.7 6.7 0 0 0-2.1 13c.3.1.5-.1.5-.3v-1.2c-1.9.4-2.3-.9-2.3-.9-.3-.8-.8-1-.8-1-.6-.4 0-.4 0-.4.7 0 1 .7 1 .7.6 1 1.6.8 2 .6a1.5 1.5 0 0 1 .4-.9c-1.5-.2-3.1-.8-3.1-3.4 0-.7.3-1.3.7-1.8 0-.2-.3-.9.1-1.9 0 0 .6-.2 1.9.7a6.4 6.4 0 0 1 3.4 0c1.3-.9 1.9-.7 1.9-.7.4 1 .1 1.7.1 1.9.4.5.7 1.1.7 1.8 0 2.6-1.6 3.2-3.1 3.4.2.2.5.6.5 1.3V14c0 .2.1.4.5.3A6.7 6.7 0 0 0 8 1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5 6.8v4.4M5 4.7v.1M8 11.2V8.6a1.6 1.6 0 0 1 3.2 0v2.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <rect x="1.8" y="1.8" width="12.4" height="12.4" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="11.8" cy="4.2" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function MailIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <rect x="1.5" y="3.2" width="13" height="9.6" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.4 4.6L8 8.6l5.6-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownloadIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M8 2.5v8m0 0L4.8 7.4M8 10.5l3.2-3.1M3 13h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M2.5 8h11m0 0L9.8 4.3M13.5 8l-3.7 3.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.8" />
      <path
        d="M7.5 12.4l3 3 6-6.4"
        stroke="var(--color-accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "size-3" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "size-3" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RefreshIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className = "size-3" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function MenuIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "size-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
};
