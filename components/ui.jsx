import { useState, useEffect, useRef, useCallback } from "react";
import { TAGLINE } from "../data/books";

const P = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z",
  library: "M4 4h4v16H4zM10 4h4v16h-4zM16 5l3.5-.8 2 15.6-3.5.8z",
  idea: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  stash: "M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z",
  journal: "M5 3h11l3 3v15H5zM9 8h6M9 12h6M9 16h3",
  progress: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5",
  sun: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  left: "M15 18l-6-6 6-6", right: "M9 18l6-6-6-6",
  share: "M4 12v8h16v-8M12 3v13M7 8l5-5 5 5",
  book: "M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h7z",
  pen: "M4 20h4L19 9l-4-4L4 16zM14 6l4 4",
  lock: "M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4",
  check: "M5 12l5 5L20 7", x: "M6 6l12 12M18 6 6 18",
  plus: "M12 5v14M5 12h14", trash: "M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14",
  star: "M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 3 1.1-6.2L3 9.7l6.2-.9z",
  ext: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"
};
export function Icon({ name, fill }) {
  return <svg viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[name]} /></svg>;
}

export const VIEWS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "library", label: "Library", icon: "library" },
  { id: "explore", label: "Ideas", full: "Idea Explorer", icon: "idea" },
  { id: "stash", label: "Stash", full: "My Stash", icon: "stash" },
  { id: "journal", label: "Journal", full: "Reflection Journal", icon: "journal" },
  { id: "progress", label: "Progress", full: "My Progress", icon: "progress" }
];


export function Brand() {
  return <div className="brand">
    <div className="mark"><span>F</span></div>
    <div className="brand-txt"><b>Future Tense</b><small>{TAGLINE}</small></div>
  </div>;
}

export function BookCover({ book, large, onClick }) {
  const p = book.palette;
  const El = onClick ? "button" : "div";
  return <El className={"cover" + (large ? " lg" : "")} style={{ background: p.bg, color: p.fg }} onClick={onClick} aria-label={onClick ? "Open " + book.title : undefined}>
    <span className="c-sun" style={{ width: 90, height: 90, background: p.sun, right: -28, top: 34 }} />
    <span className="c-sun" style={{ width: 40, height: 40, background: p.sun2, right: 30, top: 18, opacity: .9 }} />
    {book.status === "soon" && <span className="c-soon">Soon</span>}
    <span className="c-pub">FUTURE TENSE</span>
    <span className="c-title">{book.title}</span>
  </El>;
}

export function ProgressBar({ value }) {
  return <div className="bar" role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin="0" aria-valuemax="100"><i style={{ width: value + "%" }} /></div>;
}

export function Sheet({ onClose, children, label }) {
  useEffect(() => {
    const k = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return <div className="overlay" onClick={onClose}>
    <div className="sheet" role="dialog" aria-modal="true" aria-label={label} onClick={e => e.stopPropagation()}>{children}</div>
  </div>;
}

export function bookStats(book, state) {
  const total = book.ideas.length;
  const done = book.ideas.filter(i => state.completed[i.id]).length;
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

