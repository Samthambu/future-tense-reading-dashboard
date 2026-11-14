import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";

export function Home({ state, go, openIdea, openBook }) {
  const book = bookById(state.lastBook) || AVAILABLE[0];
  const s = bookStats(book, state);
  const pos = state.position[book.id] || 0;
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 864e5);
  const now = new Date();
  const plan = BOOKS.find(b => b.calendar && now.getMonth() + 1 === b.calendar.month &&
    now.getDate() >= b.calendar.firstDay && now.getDate() - b.calendar.firstDay < b.ideas.length);
  const daily = plan ? plan.ideas[now.getDate() - plan.calendar.firstDay] : ALL_IDEAS[day % ALL_IDEAS.length];
  const dailyTag = plan ? (plan.unitLabel || "Idea") + " " + daily.n + " of " + plan.title : "Today’s idea";
  const totalDone = Object.keys(state.completed).length;
  const reflections = Object.values(state.journal).filter(j => (j.thought || j.response || "").trim()).length;

  return <div className="fade">
    <section className="hero">
      <div>
        <p className="greet">{greet}, reader</p>
        <h1>{book.title}</h1>
        <p>{book.blurb}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={() => openIdea(book.id, pos)}>
            <Icon name="book" />{s.done ? "Continue reading" : "Start reading"}
          </button>
          <button className="btn btn-ghost" style={{ color: "#FBE9C9", borderColor: "rgba(251,233,201,.35)" }} onClick={() => openBook(book)}>About this book</button>
        </div>
      </div>
      <BookCover book={book} large />
    </section>

    <div className="grid2" style={{ marginTop: 16 }}>
      <div className="card">
        <h3 style={{ fontSize: 18 }}>Continue reading</h3>
        <p className="muted small" style={{ margin: "4px 0 14px" }}>
          {book.unitLabel || "Idea"} {pos + 1} of {s.total}: {book.ideas[pos].title}
        </p>
        <ProgressBar value={s.pct} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
          <span className="small muted">{s.done} of {s.total} ideas complete</span>
          <button className="linkbtn" onClick={() => openIdea(book.id, pos)}>Resume</button>
        </div>
        <div className="stats">
          <div className="stat"><b>{totalDone}</b><span>Ideas read</span></div>
          <div className="stat"><b>{Object.keys(state.saved).length}</b><span>Saved</span></div>
          <div className="stat"><b>{reflections}</b><span>Reflections</span></div>
        </div>
      </div>
      <div className="card daily">
        <span className="tag">{dailyTag}</span>
        <h3>{daily.title}</h3>
        <p style={{ margin: "0 0 10px", fontFamily: "var(--serif)" }}>{daily.text.split(". ")[0]}.</p>
        <p className="small muted" style={{ margin: "0 0 14px" }}>{daily.ref}</p>
        <button className="btn btn-dark" onClick={() => openIdea(daily.bookId, daily.n - 1)}>Read today’s idea</button>
      </div>
    </div>

    <h2 className="h-sec">From the library</h2>
    <div className="shelf">
      {BOOKS.map(b => <div key={b.id} className="bookitem">
        <BookCover book={b} onClick={() => openBook(b)} />
        <div className="meta"><b>{b.title}</b><span className="muted">{b.category}</span></div>
      </div>)}
    </div>
  </div>;
}

