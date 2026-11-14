import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";

export function Library({ state, openBook }) {
  const [cat, setCat] = useState("All");
  const cats = cat === "All" ? CATEGORIES : [cat];
  return <div className="fade">
    <h1 className="h-page">My Library</h1>
    <p className="sub">Short books, one idea at a time.</p>
    <div className="chips" style={{ marginTop: 18 }}>
      {["All", ...CATEGORIES].map(c => <button key={c} className={"chip" + (cat === c ? " on" : "")} onClick={() => setCat(c)}>{c}</button>)}
    </div>
    {cats.map(c => {
      const books = BOOKS.filter(b => b.category === c);
      return <section key={c}>
        <div className="cat-head"><h2>{c}</h2><span className="small muted">{books.length} {books.length === 1 ? "book" : "books"}</span></div>
        {books.length ? <div className="shelf">
          {books.map(b => {
            const s = bookStats(b, state);
            return <div key={b.id} className="bookitem">
              <BookCover book={b} onClick={() => openBook(b)} />
              <div className="meta"><b>{b.title}</b>
                {b.status === "available" ? <><span className="muted">{s.pct}% read</span><div style={{ marginTop: 6 }}><ProgressBar value={s.pct} /></div></> : <span className="muted">Coming soon</span>}
              </div>
            </div>;
          })}
        </div> : <p className="muted small">New books coming to this shelf.</p>}
      </section>;
    })}
  </div>;
}

export function BookSheet({ book, state, onClose, openIdea }) {
  const s = bookStats(book, state);
  const pos = state.position[book.id] || 0;
  return <Sheet onClose={onClose} label={book.title}>
    <div className="sheet-head">
      <span className="small muted">{book.category}</span>
      <button className="iconbtn" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
    </div>
    <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
      <BookCover book={book} />
      <div style={{ flex: 1, minWidth: 200 }}>
        <h2 style={{ fontSize: 26 }}>{book.title}</h2>
        <p className="muted" style={{ margin: "4px 0 10px" }}>{book.subtitle}{book.author ? " by " + book.author : ""}</p>
        {book.sample && <span className="sample">Sample content</span>}
        <p style={{ fontFamily: "var(--serif)" }}>{book.blurb}</p>
        {book.status === "available" && <>
          <ProgressBar value={s.pct} />
          <p className="small muted">{s.done} of {s.total} ideas complete</p>
        </>}
      </div>
    </div>
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
      {book.status === "available"
        ? <button className="btn btn-primary" onClick={() => { onClose(); openIdea(book.id, pos); }}><Icon name="book" />{s.done ? "Continue reading" : "Start reading"}</button>
        : <button className="btn btn-primary" disabled>Coming soon</button>}
      {book.buyUrl && <a className="btn btn-ghost" href={book.buyUrl} target="_blank" rel="noopener noreferrer"><Icon name="ext" />Get the full book</a>}
    </div>
    {book.status === "available" && <>
      <h3 style={{ fontSize: 17, margin: "24px 0 8px" }}>Ideas in this book</h3>
      {book.ideas.map((i, k) => <button key={i.id} className="result" onClick={() => { onClose(); openIdea(book.id, k); }}>
        <b>{i.n}. {i.title}</b> {state.completed[i.id] && <span className="small" style={{ color: "var(--orange)" }}>· read</span>}
        <div className="small muted">{i.ref}</div>
      </button>)}
    </>}
  </Sheet>;
}

