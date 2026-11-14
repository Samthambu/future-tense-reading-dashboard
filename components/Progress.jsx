import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";
import { exportData, clearAllData } from "../lib/storage";

export function Progress({ state, update, toast, openIdea }) {
  const [confirm, setConfirm] = useState(false);
  const [wipe, setWipe] = useState(false);
  const totalIdeas = ALL_IDEAS.length;
  const done = Object.keys(state.completed).filter(id => ideaById(id)).length;
  const pct = totalIdeas ? Math.round(done / totalIdeas * 100) : 0;
  const finished = AVAILABLE.filter(b => bookStats(b, state).pct === 100);
  const refl = Object.values(state.journal).filter(j => (j.thought || j.response || "").trim()).length;
  const savedN = Object.keys(state.saved).length;
  const MS = [
    { t: "First step", d: "Read your first idea", got: done >= 1, icon: "check" },
    { t: "Five ideas", d: "Read five ideas", got: done >= 5, icon: "idea" },
    { t: "Halfway there", d: "Read eight ideas", got: done >= 8, icon: "progress" },
    { t: "Collector", d: "Save three ideas", got: savedN >= 3, icon: "stash" },
    { t: "First reflection", d: "Write in your journal", got: refl >= 1, icon: "pen" },
    { t: "Thoughtful reader", d: "Write five reflections", got: refl >= 5, icon: "journal" },
    { t: "Book finished", d: "Complete a whole book", got: finished.length >= 1, icon: "star" }
  ];
  const r = 64, c = 2 * Math.PI * r;

  return <div className="fade">
    <h1 className="h-page">My Progress</h1>
    <p className="sub">Every idea read is a step forward.</p>
    <div className="card" style={{ marginTop: 20 }}>
      <div className="prog-top">
        <svg className="ring" viewBox="0 0 150 150" role="img" aria-label={pct + "% of all ideas read"}>
          <circle cx="75" cy="75" r={r} fill="none" stroke="var(--line)" strokeWidth="12" />
          <circle cx="75" cy="75" r={r} fill="none" stroke="var(--orange)" strokeWidth="12" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={c - c * pct / 100} transform="rotate(-90 75 75)" style={{ transition: "stroke-dashoffset .8s ease" }} />
          <text x="75" y="80" textAnchor="middle" fontFamily="var(--serif)" fontSize="30" fontWeight="700" fill="var(--ink)">{pct}%</text>
        </svg>
        <div style={{ flex: 1, minWidth: 180 }}>
          <div className="stats" style={{ marginTop: 0, gridTemplateColumns: "repeat(2,1fr)" }}>
            <div className="stat"><b>{done}</b><span>Ideas completed</span></div>
            <div className="stat"><b>{finished.length}</b><span>Books finished</span></div>
            <div className="stat"><b>{refl}</b><span>Reflections</span></div>
            <div className="stat"><b>{savedN}</b><span>Ideas saved</span></div>
          </div>
        </div>
      </div>
    </div>

    <h2 className="h-sec">Books</h2>
    {AVAILABLE.map(b => {
      const s = bookStats(b, state);
      return <div className="row" key={b.id} style={{ alignItems: "center" }}>
        <div className="grow">
          <h3>{b.title}</h3>
          <div style={{ margin: "8px 0 6px" }}><ProgressBar value={s.pct} /></div>
          <span className="small muted">{s.done} of {s.total} ideas · {s.pct}%</span>
        </div>
        <button className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 14 }} onClick={() => openIdea(b.id, state.position[b.id] || 0)}>{s.pct === 100 ? "Revisit" : "Continue"}</button>
      </div>;
    })}

    <h2 className="h-sec">Milestones</h2>
    <div className="milestones">
      {MS.map(m => <div key={m.t} className={"ms" + (m.got ? " got" : "")}>
        <div className="ms-ic"><Icon name={m.icon} /></div>
        <b>{m.t}</b><span>{m.got ? "Achieved" : m.d}</span>
      </div>)}
    </div>

    <h2 className="h-sec">Completed ideas</h2>
    {done === 0 ? <p className="muted">Ideas you finish will appear here.</p> :
      ALL_IDEAS.filter(i => state.completed[i.id]).map(i => <button key={i.id} className="result" onClick={() => openIdea(i.bookId, i.n - 1)}>
        <b>{i.n}. {i.title}</b><div className="small muted">{bookById(i.bookId).title}</div>
      </button>)}

    <h2 className="h-sec">Your data</h2>
    <div className="card">
      <p style={{ marginTop: 0 }}>Everything you do here is stored only in this browser. Nothing is uploaded. Download a copy to keep a backup, or delete it all from this device.</p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn btn-ghost" onClick={() => { exportData(state); toast("Your data has been downloaded"); }}>Download my data</button>
        {!wipe ? <button className="btn btn-ghost" onClick={() => setWipe(true)}><Icon name="trash" />Delete all my data</button> :
          <button className="btn btn-dark" onClick={() => { clearAllData(); location.reload(); }}>Yes, delete everything</button>}
      </div>
    </div>

    <div style={{ marginTop: 30 }}>
      {!confirm ? <button className="linkbtn" onClick={() => setConfirm(true)}>Reset my reading progress</button> :
        <div className="card">
          <p style={{ marginTop: 0 }}>This clears read ideas and milestones. Your stash and journal stay.</p>
          <button className="btn btn-dark" onClick={() => { update(s => ({ ...s, completed: {}, position: {} })); setConfirm(false); toast("Progress reset"); }}>Reset progress</button>{" "}
          <button className="btn btn-ghost" onClick={() => setConfirm(false)}>Keep it</button>
        </div>}
    </div>
  </div>;
}

