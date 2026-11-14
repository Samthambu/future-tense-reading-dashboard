import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";
import { LIMITS } from "../lib/storage";

export function JournalEditor({ ideaId, state, update, onClose, toast }) {
  const idea = ideaById(ideaId);
  const cur = state.journal[ideaId] || {};
  const [thought, setThought] = useState(cur.thought || "");
  const [response, setResponse] = useState(cur.response || "");
  const save = () => {
    update(s => ({ ...s, journal: { ...s.journal, [ideaId]: { thought, response, at: Date.now() } } }));
    toast("Reflection saved"); onClose();
  };
  const del = () => {
    update(s => { const j = { ...s.journal }; delete j[ideaId]; return { ...s, journal: j }; });
    toast("Reflection deleted"); onClose();
  };
  return <Sheet onClose={onClose} label={"Reflection on " + idea.title}>
    <div className="sheet-head">
      <div>
        <span className="small muted">Idea {idea.n} · {idea.ref}</span>
        <h2 style={{ fontSize: 24 }}>{idea.title}</h2>
      </div>
      <button className="iconbtn" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
    </div>
    <div className="question"><div className="q-l">Reflect</div><p>{idea.question}</p></div>
    {idea.prompts && idea.prompts.length > 0 && <details className="fold"><summary>More journaling prompts</summary><ul>{idea.prompts.map((p, k) => <li key={k}>{p}</li>)}</ul></details>}
    <label className="fl" htmlFor="j-t">My thoughts</label>
    <textarea id="j-t" rows="4" maxLength={LIMITS.text} value={thought} onChange={e => setThought(e.target.value)} placeholder="What stood out to you? What did you notice in yourself?" />
    <label className="fl" htmlFor="j-r">My practical response</label>
    <textarea id="j-r" rows="3" maxLength={LIMITS.text} value={response} onChange={e => setResponse(e.target.value)} placeholder="One thing I will do this week…" />
    <div className="privacy"><Icon name="lock" /><span>Your reflections are private. They are stored only in this browser on this device and are never sent anywhere. No one else, including the publisher, can read them.</span></div>
    <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
      <button className="btn btn-primary" onClick={save} disabled={!thought.trim() && !response.trim()}>Save reflection</button>
      <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
      {(cur.thought || cur.response) && <button className="btn btn-ghost" onClick={del} style={{ marginLeft: "auto" }}><Icon name="trash" />Delete</button>}
    </div>
  </Sheet>;
}

export function Journal({ state, openJournal }) {
  const [mode, setMode] = useState("written");
  const book = bookById(state.lastBook) || AVAILABLE[0];
  const written = ALL_IDEAS.filter(i => state.journal[i.id] && (state.journal[i.id].thought || state.journal[i.id].response))
    .sort((a, b) => state.journal[b.id].at - state.journal[a.id].at);
  const list = mode === "written" ? written : book.ideas;
  const fmt = t => new Date(t).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });

  return <div className="fade">
    <h1 className="h-page">Reflection Journal</h1>
    <p className="sub">Your thoughts and responses, kept private.</p>
    <div className="chips" style={{ marginTop: 18 }}>
      <button className={"chip" + (mode === "written" ? " on" : "")} onClick={() => setMode("written")}>My reflections ({written.length})</button>
      <button className={"chip" + (mode === "all" ? " on" : "")} onClick={() => setMode("all")}>All prompts</button>
    </div>
    <div className="privacy" style={{ margin: "14px 0 20px" }}><Icon name="lock" /><span>Only you can see this journal. It stays in this browser, so use “Download my data” on the Progress page to keep a backup.</span></div>
    {list.length === 0 ? <div className="empty">
      <h3>No reflections yet</h3>
      <p>Pick any idea and write a few honest lines in response.</p>
      <button className="btn btn-primary" onClick={() => setMode("all")}>See reflection prompts</button>
    </div> : list.map(i => {
      const j = state.journal[i.id];
      return <div className="row" key={i.id}>
        <div className="badge">{i.n}</div>
        <div className="grow">
          <h3>{i.title}</h3>
          {j && (j.thought || j.response) ? <>
            <p className="small muted" style={{ margin: "2px 0 8px" }}>{fmt(j.at)}</p>
            {j.thought && <p style={{ margin: "0 0 6px", fontFamily: "var(--serif)" }}>{j.thought}</p>}
            {j.response && <p style={{ margin: 0 }} className="small"><b style={{ color: "var(--orange)" }}>I will: </b>{j.response}</p>}
          </> : <p className="small muted" style={{ margin: "4px 0 0", fontStyle: "italic" }}>{i.question}</p>}
          <div className="row-actions">
            <button className="btn btn-ghost" style={{ padding: "7px 14px", fontSize: 14 }} onClick={() => openJournal(i.id)}><Icon name="pen" />{j ? "Edit" : "Write"}</button>
          </div>
        </div>
      </div>;
    })}
  </div>;
}

