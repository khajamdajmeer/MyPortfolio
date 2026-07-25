import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------------------------------------------------------------- UI icons */

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function Sun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </svg>
  );
}

export function Moon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Copy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 5.5A1.5 1.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A1.5 1.5 0 0 0 5.5 15" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4.5 4.5L19 7" />
    </svg>
  );
}

export function Code(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  );
}

/* ------------------------------------------------------------ Brand icons */

export function GitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49v-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.12 2.98.85.1-.66.36-1.12.65-1.38-2.27-.26-4.65-1.14-4.65-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.71 0 0 .86-.28 2.8 1.05a9.7 9.7 0 0 1 5.11 0c1.94-1.33 2.8-1.05 2.8-1.05.55 1.41.2 2.45.1 2.71.65.72 1.05 1.63 1.05 2.75 0 3.93-2.39 4.8-4.67 5.05.37.32.7.94.7 1.9v2.82c0 .27.19.6.71.49A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.5h4v11.5H3V9.5Zm6.5 0h3.83v1.57h.05a4.2 4.2 0 0 1 3.78-2.07c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-3.8V9.5Z" />
    </svg>
  );
}

/* Tech logos — simplified single-path marks so they inherit sizing cleanly. */

function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="3.9" />
        <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function JavaScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#111"
        d="M12.9 18.3c.5.85 1.16 1.47 2.37 1.47 1.02 0 1.67-.5 1.67-1.2 0-.83-.66-1.13-1.77-1.61l-.6-.26c-1.76-.75-2.93-1.69-2.93-3.68 0-1.83 1.4-3.22 3.57-3.22 1.55 0 2.66.54 3.46 1.95l-1.9 1.21c-.41-.73-.86-1.02-1.56-1.02-.71 0-1.16.45-1.16 1.04 0 .72.45 1.02 1.49 1.47l.6.26c2.08.89 3.25 1.8 3.25 3.84 0 2.2-1.73 3.4-4.05 3.4-2.27 0-3.74-1.08-4.46-2.5l1.99-1.15Zm-7.7.21c.37.65.7 1.2 1.5 1.2.77 0 1.25-.3 1.25-1.46v-7.9h2.44v7.93c0 2.52-1.48 3.67-3.63 3.67-1.95 0-3.08-1.01-3.65-2.22l2.09-1.22Z"
      />
    </svg>
  );
}

function Html5Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#E44D26" d="M3.2 2h17.6l-1.6 18L12 22l-7.2-2L3.2 2Z" />
      <path fill="#F16529" d="M12 3.6h7.2l-1.4 15.6L12 20.5V3.6Z" />
      <path
        fill="#fff"
        d="M12 10.2H8.9l-.2-2.1H12V6H6.3l.6 6.3H12v-2.1Zm0 5.4-2.6-.7-.17-1.9H7.1l.33 3.7L12 17.9v-2.3Z"
      />
      <path
        fill="#EBEBEB"
        d="M12 10.2v2.1h2.85l-.27 3-2.58.7v2.2l4.57-1.26.9-9.85H12V10.2Zm0-4.2v2.1h5.44l.18-2.1H12Z"
      />
    </svg>
  );
}

function Css3Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#1572B6" d="M3.2 2h17.6l-1.6 18L12 22l-7.2-2L3.2 2Z" />
      <path fill="#33A9DC" d="M12 3.6h7.2l-1.4 15.6L12 20.5V3.6Z" />
      <path
        fill="#fff"
        d="M12 10.2H8.9l-.2-2.1H12V6H6.3l.6 6.3H12v-2.1Zm0 5.4-2.6-.7-.17-1.9H7.1l.33 3.7L12 17.9v-2.3Z"
      />
      <path
        fill="#EBEBEB"
        d="M12 10.2v2.1h2.85l-.27 3-2.58.7v2.2l4.57-1.26.9-9.85H12V10.2Zm0-4.2v2.1h5.44l.18-2.1H12Z"
      />
    </svg>
  );
}

function NodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#539E43"
        d="M12 2.1c-.34 0-.68.09-.98.26L3.6 6.8c-.6.35-.98 1-.98 1.7v7c0 .7.38 1.35.98 1.7l7.42 4.44c.6.35 1.35.35 1.96 0l7.42-4.44c.6-.35.98-1 .98-1.7v-7c0-.7-.38-1.35-.98-1.7L12.98 2.36A1.94 1.94 0 0 0 12 2.1Z"
      />
      <path
        fill="#fff"
        d="M12.72 16.9c-2.28 0-2.76-1.05-2.76-1.93 0-.19.15-.34.34-.34h.86c.17 0 .31.12.34.29.13.87.51 1.03 1.22 1.03 1.12 0 1.32-.44 1.32-.93 0-.28-.12-.49-.6-.63-.4-.12-1-.28-1.62-.42-1.25-.28-1.85-.87-1.85-1.9 0-1.14.94-1.94 2.5-1.94 1.87 0 2.5.87 2.6 2.02a.34.34 0 0 1-.34.37h-.87a.34.34 0 0 1-.33-.26c-.16-.8-.63-1-1.06-1-.94 0-1.05.33-1.05.72 0 .3.14.44.62.57l1.36.35c1.33.34 1.9.84 1.9 1.9 0 1.23-1.02 2.1-2.78 2.1Z"
      />
    </svg>
  );
}

function MongoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#4FAA41"
        d="M12.4 1.5c1.7 2.4 5 5.7 5 9.9 0 3.6-2 6.1-4.2 7.6l-.6-.4-.4-2.3.2-13.9c0-.3 0-.6.03-.9Z"
      />
      <path
        fill="#5AA84A"
        d="M11.6 1.5C9.9 3.9 6.6 7.2 6.6 11.4c0 3.7 2.1 6.2 4.4 7.7l.4-1 .3-4.6-.1-12Z"
      />
      <path fill="#C2BFBF" d="M11.6 19.6h.9l.2 2.7h-1.3l.2-2.7Z" />
    </svg>
  );
}

function ExpressIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 18.3a2.7 2.7 0 0 1-3.35-1.1l-2.86-3.94-.41-.55-3.33 4.53a2.6 2.6 0 0 1-3.22 1.06l4.3-5.76 4-5.36a2.62 2.62 0 0 1 3.22-1L14.9 12l3.65 4.9c.85 1.13 1.7 2.24 3 3.4h1.95v-2ZM.1 11.3A7.1 7.1 0 0 1 5.68 5.1c3.7-.75 7.3 1.6 8.06 5.28.14.7.2 1.4.2 2.13H1.83c-.18 4.6 3.13 7.39 7.38 5.97a4.5 4.5 0 0 0 2.87-3.1c.28-.94.75-1.1 1.64-.83a6.24 6.24 0 0 1-2.95 4.55 7.4 7.4 0 0 1-8.6-1.1 7.7 7.7 0 0 1-1.96-4.2c0-.24-.08-.47-.12-.7v-1.8Zm1.75-.28h10.42c-.07-3.32-2.17-5.68-5-5.7-3.1-.04-5.36 2.28-5.42 5.7Z" />
    </svg>
  );
}

function ReduxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#764ABC" {...props}>
      <path d="M15.6 14.9c.8-.08 1.4-.77 1.37-1.6a1.55 1.55 0 0 0-1.55-1.5h-.06c-.87.03-1.55.76-1.52 1.63.03.42.2.77.45 1.02-.95 1.87-2.4 3.24-4.58 4.38-1.48.78-3.02 1.06-4.55.86-1.26-.17-2.24-.73-2.85-1.65-.9-1.37-.98-2.85-.22-4.33.54-1.06 1.4-1.84 1.94-2.23-.11-.36-.28-.97-.36-1.42-4.15 3-3.72 7.06-2.46 8.98 1.05 1.6 3.05 2.68 5.6 2.68 2 0 3.9-.53 5.5-1.6 2.2-1.48 3.6-3.55 4.24-6.22Zm4.94-3.43c-2.16-2.54-5.35-3.94-9-3.94h-.46c-.25-.5-.8-.84-1.4-.84h-.05c-.87.03-1.54.76-1.51 1.63.02.84.72 1.5 1.55 1.5h.06c.62-.03 1.15-.42 1.37-.95h.5c2.17 0 4.22.63 6.08 1.87 1.42.94 2.44 2.17 3 3.65.48 1.2.45 2.38-.05 3.38-.79 1.5-2.1 2.32-3.85 2.32-1.1 0-2.16-.34-2.72-.6-.31.28-.87.73-1.26 1 1.2.56 2.44.87 3.63.87 2.68 0 4.66-1.48 5.42-2.96.8-1.63.75-4.44-1.4-6.9ZM6.5 15.4c.03.84.73 1.5 1.56 1.5h.05c.87-.02 1.55-.75 1.52-1.62a1.55 1.55 0 0 0-1.55-1.5h-.06c-.06 0-.14 0-.22.03-1.15-1.9-1.63-3.97-1.46-6.2.11-1.68.67-3.13 1.65-4.33.81-1.03 2.38-1.53 3.44-1.56 2.96-.05 4.2 3.63 4.3 5.1l1.37.42c-.33-4.5-3.1-6.86-5.78-6.86-2.52 0-4.85 1.82-5.78 4.5-1.3 3.63-.45 7.12 1.14 9.88a1.4 1.4 0 0 0-.18.64Z" />
    </svg>
  );
}

function BootstrapIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="4" fill="#7952B3" />
      <path
        fill="#fff"
        d="M8 5.5h5.1c2.24 0 3.6 1.05 3.6 2.79 0 1.24-.9 2.34-2.06 2.53v.08c1.58.18 2.65 1.32 2.65 2.8 0 2.03-1.53 3.3-4.06 3.3H8V5.5Zm2.28 1.8v3.06h1.94c1.35 0 2.1-.56 2.1-1.57 0-.96-.68-1.49-1.89-1.49h-2.15Zm0 4.75v3.4h2.24c1.42 0 2.19-.6 2.19-1.71 0-1.1-.79-1.69-2.29-1.69h-2.14Z"
      />
    </svg>
  );
}

function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#38BDF8" {...props}>
      <path d="M12 5.5c-2.67 0-4.34 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.75 1.92 1.37C13.43 10.4 14.6 11.6 17 11.6c2.67 0 4.34-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.75-1.92-1.37C15.57 6.7 14.4 5.5 12 5.5ZM7 12.4c-2.67 0-4.34 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.75 1.92 1.37C8.43 17.3 9.6 18.5 12 18.5c2.67 0 4.34-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.75-1.92-1.37-.99-.99-2.16-2.19-4.58-2.19Z" />
    </svg>
  );
}

function GitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#F05133" {...props}>
      <path d="M23.5 11.1 12.9.5a1.7 1.7 0 0 0-2.4 0L8.3 2.7l2.8 2.8a2 2 0 0 1 2.55 2.57l2.7 2.7a2 2 0 1 1-1.2 1.2l-2.52-2.5v6.63a2 2 0 1 1-1.65-.06V9.35a2 2 0 0 1-1.09-2.64L7.1 3.9.5 10.5a1.7 1.7 0 0 0 0 2.4l10.6 10.6a1.7 1.7 0 0 0 2.4 0l10.5-10.5a1.7 1.7 0 0 0 0-2.4Z" />
    </svg>
  );
}

function VsCodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="#0F7BC4" {...props}>
      <path d="M17.6 1.3 9.4 9 4.8 5.6 2.5 6.7l3.9 5.3-3.9 5.3 2.3 1.1L9.4 15l8.2 7.7 3.9-1.8V3.1l-3.9-1.8Zm.4 5.1v11.2L12 12l6-5.6Z" />
    </svg>
  );
}

function ViteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#BD34FE"
        d="M23.3 4.9 12.7 22.6a.7.7 0 0 1-1.2 0L.7 4.9a.7.7 0 0 1 .7-1l10.4 1.9a.7.7 0 0 0 .25 0L22.6 4a.7.7 0 0 1 .7.9Z"
      />
      <path
        fill="#FFD028"
        d="M16.6 1.2 9.2 2.6a.35.35 0 0 0-.28.32L8.4 11a.35.35 0 0 0 .43.37l2.06-.49c.26-.06.5.17.44.43l-.61 3a.35.35 0 0 0 .5.39l1.27-.62c.25-.12.53.11.47.38l-.94 4.53c-.09.4.45.62.67.27l.15-.23 5.83-11.6a.35.35 0 0 0-.38-.5l-2.13.41a.35.35 0 0 1-.4-.44l1.38-4.8a.35.35 0 0 0-.4-.44Z"
      />
    </svg>
  );
}

function FigmaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#F24E1E" d="M8.5 2h3.5v4H8.5a2 2 0 1 1 0-4Z" />
      <path fill="#FF7262" d="M12 2h3.5a2 2 0 1 1 0 4H12V2Z" />
      <path fill="#A259FF" d="M15.5 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      <path fill="#F24E1E" d="M8.5 6H12v4H8.5a2 2 0 1 1 0-4Z" />
      <path fill="#0ACF83" d="M8.5 10H12v2a2 2 0 1 1-3.5-2Z" />
    </svg>
  );
}

function ApiIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M7 8 3.5 12 7 16M17 8l3.5 4L17 16M14 5.5l-4 13" />
    </svg>
  );
}

/* ------------------------------------------- AI, data and platform marks */

/**
 * Line-drawn glyphs rather than official brand logos: they inherit
 * currentColor, so the same file reads correctly in both themes.
 */

function PythonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c-3 0-4 1.2-4 3v2h4" />
      <path d="M8 8H6.5C4.6 8 4 9.4 4 12s.6 4 2.5 4H8v-3c0-1.6 1-2.5 2.5-2.5H14" />
      <path d="M12 21c3 0 4-1.2 4-3v-2h-4" />
      <path d="M16 16h1.5c1.9 0 2.5-1.4 2.5-4s-.6-4-2.5-4H16v3c0 1.6-1 2.5-2.5 2.5H10" />
    </svg>
  );
}

function FastApiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12.5 6.5 8 13h4l-.5 4.5L16 11h-4z" />
    </svg>
  );
}

function AwsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.5c0-1 .8-1.6 2-1.6s2 .5 2 1.6v3.2M8 11.4c-2.6 0-4 .6-4 1.9 0 .9.7 1.4 1.7 1.4 1.3 0 2.3-.8 2.3-2" />
      <path d="M11 8l1.4 6.4L14 9.2l1.6 5.2L17 8" />
      <path d="M3 18.5c3 1.7 6.2 2.5 9 2.5s6-.8 9-2.5" />
      <path d="M19.5 17.2c.6-1.3.4-2-.6-2-.5 0-1 .1-1.5.3" />
    </svg>
  );
}

function DockerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11h14v2.2A4.8 4.8 0 0 1 13.2 18H8.6A4.6 4.6 0 0 1 4 13.4z" />
      <path d="M7 11V8.5h2.5V11M10.5 11V8.5H13V11M10.5 8V5.5H13V8" />
      <path d="M18 12.5c1.2-.6 2.4-.5 3 .2" />
    </svg>
  );
}

function KubernetesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 7.5 3.6 1.9 8.1-5.2 6.3H7.8l-5.2-6.3L4.5 6.6z" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 3v6.4M12 14.6V21M9.6 10.8 4 8.5M14.4 10.8 20 8.5M10.6 14.2 7.8 21M13.4 14.2 16.2 21" />
    </svg>
  );
}

function LangChainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 14.5a3.5 3.5 0 0 1 0-5l1.5-1.5" />
      <path d="M14.5 9.5a3.5 3.5 0 0 1 0 5L13 16" />
      <path d="M7.5 16.5 6 18a3.5 3.5 0 0 1-5-5l2.5-2.5" />
      <path d="M16.5 7.5 18 6a3.5 3.5 0 0 1 5 5l-2.5 2.5" />
    </svg>
  );
}

function HuggingFaceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="11" r="8" />
      <path d="M9 9.5h.01M15 9.5h.01" />
      <path d="M8.5 14a4 4 0 0 0 7 0" />
    </svg>
  );
}

function PyTorchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 6.5 8.5a7.8 7.8 0 1 0 11 0z" />
      <circle cx="14.5" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Neo4jIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <circle cx="9" cy="18" r="2.2" />
      <path d="M7.8 8.4 16 9M7.4 9 8.6 15.9M16.6 10.8 10.6 16.6" />
    </svg>
  );
}

function AnthropicIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 19 5-14h2l5 14" />
      <path d="M8.4 14h7.2" />
    </svg>
  );
}

function OpenAiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.8 17 6.7v5.8L12 15.4 7 12.5V6.7z" />
      <path d="M7 12.5v5.8l5 2.9 5-2.9v-5.8" />
      <path d="M12 9.6v5.8" />
    </svg>
  );
}

function PostgresIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </svg>
  );
}

function RedisIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 9 4-9 4-9-4z" />
      <path d="m3 11 9 4 9-4M3 15l9 4 9-4" />
    </svg>
  );
}

const brandMap: Record<string, (p: IconProps) => React.ReactElement> = {
  python: PythonIcon,
  fastapi: FastApiIcon,
  aws: AwsIcon,
  docker: DockerIcon,
  kubernetes: KubernetesIcon,
  langchain: LangChainIcon,
  huggingface: HuggingFaceIcon,
  pytorch: PyTorchIcon,
  neo4j: Neo4jIcon,
  anthropic: AnthropicIcon,
  openai: OpenAiIcon,
  postgres: PostgresIcon,
  redis: RedisIcon,
  react: ReactIcon,
  javascript: JavaScriptIcon,
  html: Html5Icon,
  css: Css3Icon,
  node: NodeIcon,
  mongodb: MongoIcon,
  express: ExpressIcon,
  redux: ReduxIcon,
  bootstrap: BootstrapIcon,
  tailwind: TailwindIcon,
  git: GitIcon,
  github: GitHub,
  linkedin: LinkedIn,
  mail: Mail,
  vscode: VsCodeIcon,
  vite: ViteIcon,
  figma: FigmaIcon,
  api: ApiIcon,
};

export function TechIcon({ name, ...props }: { name: string } & IconProps) {
  const Component = brandMap[name] ?? Code;
  return <Component aria-hidden {...props} />;
}
