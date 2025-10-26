import { SITE } from '../data'

type Props = {
  showLabels?: boolean
  size?: number
}

export default function SocialIcons({ showLabels = false, size = 18 }: Props) {
  const links = [
    SITE.social?.email ? { key: 'email', href: `mailto:${SITE.social.email}`, label: 'Email', svg: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
    ) } : null,
    { key: 'github', href: SITE.social?.github, label: 'GitHub', svg: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.64-1.36-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
    ) },
    { key: 'linkedin', href: SITE.social?.linkedin, label: 'LinkedIn', svg: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5zM5 8.75h3.06V20H5zM13.22 8.75h-2.99V20h3.1v-5.77c0-1.52.29-2.99 2.17-2.99 1.86 0 1.89 1.74 1.89 3.09V20H20v-6.46c0-3.17-.68-5.62-4.4-5.62-1.78 0-2.97.97-3.45 1.88h.06z"/></svg>
    ) },
    { key: 'twitter', href: SITE.social?.twitter, label: 'Twitter', svg: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.7 10.3 20.5 3h-1.9l-5.9 6.6L7.7 3H3l7.2 10.3L3 21h1.9l6.3-7.1 5.2 7.1H21l-7.3-10.7z"/></svg>
    ) },
  ].filter(Boolean) as { key: string, href: string, label: string, svg: JSX.Element }[]

  return (
    <div className="social" role="group" aria-label="Social links">
      {links.filter(l => !!l.href).map(({ key, href, label, svg }) => (
        <a key={key} href={href!} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
          {svg}
          {showLabels && <span className="label">{label}</span>}
        </a>
      ))}
    </div>
  )
}
