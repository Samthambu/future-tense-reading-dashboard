import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";

export function Explorer({ state, update, bookId, index, setIndex, toast, openJournal }) {
  const book = bookById(bookId) || AVAILABLE[0];
  const idea = book.ideas[index];
  const saved = !!state.saved[idea.id];
  const done = !!state.completed[idea.id];
  const touch = useRef(null);
  const total = book.ideas.length;

  useEffect(() => {
    update(s => ({ ...s, position: { ...s.position, [book.id]: index }, lastBook: book.id }));
  }, [book.id, index]);

  const markDone = (v = true) => update(s => {
    const c = { ...s.completed };
    if (v) c[idea.id] = Date.now(); else delete c[idea.id];
    return { ...s, completed: c };
  });
  const next = () => {
    if (!done) markDone(true);
    if (index < total - 1) setIndex(index + 1);
    else toast("You’ve reached the last idea. Well done!");
  };
  const prev = () => index > 0 && setIndex(index - 1);
  const toggleSave = () => {
    update(s => {
      const sv = { ...s.saved };
      if (sv[idea.id]) delete sv[idea.id]; else sv[idea.id] = { collection: "Favourites", at: Date.now() };
      return { ...s, saved: sv };
    });
    toast(saved ? "Removed from your stash" : "Saved to your stash");
  };
  const share = async () => {
    const text = `${idea.title}${idea.greek ? " — " + idea.greek : ""} (${idea.ref})\n\n${idea.text}\n\nFrom “${book.title}”, ${PUBLISHER}`;
    try {
      if (navigator.share) { await navigator.share({ title: idea.title, text }); return; }
      await navigator.clipboard.writeText(text);
      toast("Idea copied. Paste it anywhere to share.");
    } catch (e) {
      if (e && e.name === "AbortError") return;
      toast("Sharing isn’t available here. Select the text to copy it.");
    }
  };

  useEffect(() => {
    const k = e => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });

  const hasNote = state.journal[idea.id] && (state.journal[idea.id].thought || state.journal[idea.id].response);

  return <div>
    <div className="ex-head">
      <div>
        <h1 className="h-page" style={{ fontSize: 24 }}>{book.title}</h1>
        <p className="sub small">{idea.part || "Idea " + (index + 1) + " of " + total}</p>
      </div>
      {book.sample && <span className="sample">Sample content</span>}
    </div>

    <article key={idea.id} className="ideacard fade"
      onTouchStart={e => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (dx < -60) next(); else if (dx > 60) prev();
        touch.current = null;
      }}>
      <div className="band">
        <div className="num">{book.unitLabel || "Idea"} {idea.n} of {total}</div>
        <h2>{idea.title}</h2>
        {idea.greek && <p className="greek">{idea.greek}</p>}
      </div>
      <div className="body">
        <p className="text">{idea.text}</p>
        <div className="ref"><Icon name="book" />{idea.ref}</div>
        <div className="question">
          <div className="q-l">Reflect</div>
          <p>{idea.question}</p>
        </div>
        {idea.practice && idea.practice.length > 0 && <div className="apply">
          <div className="q-l">Apply</div>
          <ul>{idea.practice.map((p, k) => <li key={k}>{p}</li>)}</ul>
        </div>}
        {idea.prayer && <details className="fold"><summary>Pray</summary><p className="prayer-text">{idea.prayer}</p></details>}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16, alignItems: "center" }}>
          <button className="btn btn-ghost" onClick={() => openJournal(idea.id)}><Icon name="pen" />{hasNote ? "Edit my reflection" : "Write a reflection"}</button>
          <button className={"btn btn-ghost" + (done ? " saved-on" : "")} onClick={() => { markDone(!done); toast(done ? "Marked as unread" : "Marked as read"); }} aria-pressed={done}>
            <Icon name="check" />{done ? "Read" : "Mark as read"}
          </button>
        </div>
      </div>
    </article>

    <div className="ex-controls">
      <button className="btn btn-ghost" onClick={prev} disabled={index === 0}><Icon name="left" />Previous</button>
      <button className={"iconbtn" + (saved ? " saved-on" : "")} onClick={toggleSave} aria-pressed={saved} aria-label={saved ? "Remove from stash" : "Save to stash"} title="Save"><Icon name="stash" fill={saved} /></button>
      <button className="iconbtn" onClick={share} aria-label="Share this idea" title="Share"><Icon name="share" /></button>
      <button className="btn btn-primary" onClick={next}>Next<Icon name="right" /></button>
    </div>

    <div className="dots" aria-label="Jump to idea">
      {book.ideas.map((i, k) => <button key={i.id} className={"dot" + (k === index ? " cur" : state.completed[i.id] ? " done" : "")} onClick={() => setIndex(k)} aria-label={"Idea " + (k + 1) + ": " + i.title} />)}
    </div>
    <p className="small muted" style={{ textAlign: "center" }}>Swipe or use arrow keys to move between ideas.</p>

    {index === total - 1 && <div className="card daily" style={{ marginTop: 18, textAlign: "center" }}>
      <h3>Want to go deeper?</h3>
      <p className="muted" style={{ margin: "6px 0 14px" }}>These cards are a taste. The full book has the whole story.</p>
      <a className="btn btn-dark" href={book.buyUrl} target="_blank" rel="noopener noreferrer"><Icon name="ext" />Get the full book</a>
    </div>}
  </div>;
}

