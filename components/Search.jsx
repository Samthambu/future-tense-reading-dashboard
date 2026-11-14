import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";

function Highlight({ text, q }) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return <>{text.slice(0, i)}<mark>{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>;
}
export function Search({ onClose, openIdea, openBook }) {
  const [q, setQ] = useState("");
  const ref = useRef(null);
  useEffect(() => { setTimeout(() => ref.current && ref.current.focus(), 50); }, []);
  const t = q.trim().toLowerCase();
  const ideas = t ? ALL_IDEAS.filter(i => (i.title + " " + i.text + " " + i.ref + " " + i.question + " " + (i.greek || "") + " " + (i.part || "")).toLowerCase().includes(t)) : [];
  const books = t ? BOOKS.filter(b => (b.title + " " + b.category + " " + b.blurb).toLowerCase().includes(t)) : [];
  const snippet = i => {
    const k = i.text.toLowerCase().indexOf(t);
    if (k < 0) return i.text.slice(0, 90) + "…";
    const s = Math.max(0, k - 40);
    return (s ? "…" : "") + i.text.slice(s, k + 70) + "…";
  };
  return <Sheet onClose={onClose} label="Search">
    <div className="sheet-head" style={{ alignItems: "center" }}>
      <div className="searchbox" style={{ flex: 1 }}>
        <Icon name="search" />
        <input ref={ref} value={q} onChange={e => setQ(e.target.value)} placeholder="Search ideas, verses, books" aria-label="Search" />
      </div>
      <button className="iconbtn" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
    </div>
    {!t && <p className="muted small">Try “forgive”, “Romans” or “gift”.</p>}
    {t && !ideas.length && !books.length && <p className="muted">No matches for “{q}”. Try a shorter word or a Bible book name.</p>}
    {books.map(b => <button key={b.id} className="result" onClick={() => { onClose(); openBook(b); }}>
      <b><Highlight text={b.title} q={q.trim()} /></b><div className="small muted">Book · {b.category}</div>
    </button>)}
    {ideas.map(i => <button key={i.id} className="result" onClick={() => { onClose(); openIdea(i.bookId, i.n - 1); }}>
      <b><Highlight text={i.title} q={q.trim()} /></b>
      <div className="small muted"><Highlight text={i.ref} q={q.trim()} /></div>
      <div className="small" style={{ marginTop: 4 }}><Highlight text={snippet(i)} q={q.trim()} /></div>
    </button>)}
  </Sheet>;
}

