import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";
import { useReaderState } from "../lib/storage";
import { Home } from "./Home";
import { Library, BookSheet } from "./Library";
import { Explorer } from "./Explorer";
import { Stash } from "./Stash";
import { Journal, JournalEditor } from "./Journal";
import { Progress } from "./Progress";
import { Search } from "./Search";

export default function App() {
  const [state, update] = useReaderState();
  const initial = (location.hash || "").replace("#", "");
  const [view, setView] = useState(VIEWS.some(v => v.id === initial) ? initial : "home");
  const [exBook, setExBook] = useState(state.lastBook || AVAILABLE[0].id);
  const [exIndex, setExIndex] = useState(state.position[state.lastBook] || 0);
  const [bookSheet, setBookSheet] = useState(null);
  const [journalId, setJournalId] = useState(null);
  const [searching, setSearching] = useState(false);
  const [msg, setMsg] = useState(null);
  const tTimer = useRef(null);

  const toast = useCallback(m => { setMsg(m); clearTimeout(tTimer.current); tTimer.current = setTimeout(() => setMsg(null), 2400); }, []);

  useEffect(() => {
    const h = () => { const v = location.hash.replace("#", ""); if (VIEWS.some(x => x.id === v)) setView(v); else if (!v) setView("home"); };
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);

  // theme
  useEffect(() => {
    const el = document.documentElement;
    if (state.theme === "system") el.removeAttribute("data-theme"); else el.setAttribute("data-theme", state.theme);
  }, [state.theme]);
  const sysDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = state.theme === "dark" || (state.theme === "system" && sysDark);
  const toggleTheme = () => update(s => ({ ...s, theme: isDark ? "light" : "dark" }));

  const go = v => { setView(v); if (location.hash !== "#" + v) location.hash = v; window.scrollTo({ top: 0 }); };
  const openIdea = (bookId, idx) => { setExBook(bookId); setExIndex(idx); go("explore"); };
  const openBook = b => setBookSheet(b);

  const nav = (cls) => VIEWS.map(v => <button key={v.id} className={cls + (view === v.id ? " on" : "")} onClick={() => go(v.id)} aria-current={view === v.id ? "page" : undefined}>
    <Icon name={v.icon} /><span>{cls === "sidebtn" ? (v.full || v.label) : v.label}</span>
  </button>);

  return <div className="shell">
    <aside className="side" aria-label="Main navigation">
      <Brand />
      {nav("sidebtn")}
      <div className="side-foot">{PUBLISHER}<br />{TAGLINE}</div>
    </aside>

    <main className="main">
      <header className="topbar">
        <Brand />
        <div style={{ flex: 1 }} />
        <button className="iconbtn" onClick={() => setSearching(true)} aria-label="Search"><Icon name="search" /></button>
        <button className="iconbtn" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}><Icon name={isDark ? "sun" : "moon"} /></button>
      </header>

      {view === "home" && <Home state={state} go={go} openIdea={openIdea} openBook={openBook} />}
      {view === "library" && <Library state={state} openBook={openBook} />}
      {view === "explore" && <Explorer state={state} update={update} bookId={exBook} index={exIndex} setIndex={i => { setExIndex(i); window.scrollTo({ top: 0, behavior: "smooth" }); }} toast={toast} openJournal={setJournalId} />}
      {view === "stash" && <Stash state={state} update={update} openIdea={openIdea} toast={toast} />}
      {view === "journal" && <Journal state={state} openJournal={setJournalId} />}
      {view === "progress" && <Progress state={state} update={update} toast={toast} openIdea={openIdea} />}

      <footer className="foot">
        <span>© {new Date().getFullYear()} {PUBLISHER}</span>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", fontWeight: 700, textDecoration: "none" }}>Explore the full books</a>
      </footer>
    </main>

    <nav className="bottomnav" aria-label="Main navigation">{nav("navbtn")}</nav>

    {bookSheet && <BookSheet book={bookSheet} state={state} onClose={() => setBookSheet(null)} openIdea={openIdea} />}
    {journalId && <JournalEditor ideaId={journalId} state={state} update={update} onClose={() => setJournalId(null)} toast={toast} />}
    {searching && <Search onClose={() => setSearching(false)} openIdea={openIdea} openBook={openBook} />}
    {msg && <div className="toast" role="status">{msg}</div>}
  </div>;
}

