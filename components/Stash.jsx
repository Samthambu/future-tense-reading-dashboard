import { useState, useEffect, useRef, useCallback } from "react";
import { PUBLISHER, TAGLINE, SITE_URL, CATEGORIES, BOOKS, ALL_IDEAS, ideaById, bookById, AVAILABLE } from "../data/books";
import { Icon, Brand, BookCover, ProgressBar, Sheet, bookStats, VIEWS } from "./ui";

export function Stash({ state, update, openIdea, toast }) {
  const [filter, setFilter] = useState("All");
  const [newName, setNewName] = useState("");
  const items = Object.entries(state.saved)
    .map(([id, meta]) => ({ idea: ideaById(id), meta }))
    .filter(x => x.idea && (filter === "All" || x.meta.collection === filter))
    .sort((a, b) => b.meta.at - a.meta.at);

  const addCollection = () => {
    const n = newName.trim();
    if (!n) return;
    if (state.collections.includes(n)) { toast("That collection already exists"); return; }
    if (state.collections.length >= 30) { toast("You’ve reached the limit of 30 collections"); return; }
    update(s => ({ ...s, collections: [...s.collections, n] }));
    setNewName(""); setFilter(n); toast("Collection created");
  };
  const move = (id, col) => update(s => ({ ...s, saved: { ...s.saved, [id]: { ...s.saved[id], collection: col } } }));
  const remove = id => { update(s => { const sv = { ...s.saved }; delete sv[id]; return { ...s, saved: sv }; }); toast("Removed from your stash"); };
  const deleteCollection = c => {
    update(s => {
      const sv = {};
      Object.entries(s.saved).forEach(([k, v]) => { sv[k] = v.collection === c ? { ...v, collection: "Favourites" } : v; });
      return { ...s, collections: s.collections.filter(x => x !== c), saved: sv };
    });
    setFilter("All"); toast("Collection removed. Its ideas moved to Favourites.");
  };

  return <div className="fade">
    <h1 className="h-page">My Stash</h1>
    <p className="sub">Ideas you’ve saved to come back to.</p>
    <div className="chips" style={{ marginTop: 18 }}>
      {["All", ...state.collections].map(c => <button key={c} className={"chip" + (filter === c ? " on" : "")} onClick={() => setFilter(c)}>
        {c} <span style={{ opacity: .7 }}>{c === "All" ? Object.keys(state.saved).length : Object.values(state.saved).filter(v => v.collection === c).length}</span>
      </button>)}
    </div>
    <div style={{ display: "flex", gap: 8, margin: "12px 0 20px" }}>
      <input className="txt" style={{ padding: "9px 14px" }} placeholder="New collection name" maxLength={40} value={newName} onChange={e => setNewName(e.target.value)} onKeyDown={e => e.key === "Enter" && addCollection()} aria-label="New collection name" />
      <button className="btn btn-dark" onClick={addCollection}><Icon name="plus" />Add</button>
    </div>
    {filter !== "All" && filter !== "Favourites" && <p className="small"><button className="linkbtn" onClick={() => deleteCollection(filter)}>Delete “{filter}” collection</button></p>}

    {items.length === 0 ? <div className="empty">
      <h3>{filter === "All" ? "Your stash is empty" : "Nothing in this collection yet"}</h3>
      <p>Tap the bookmark on any idea card to save it here.</p>
      <button className="btn btn-primary" onClick={() => openIdea(state.lastBook, state.position[state.lastBook] || 0)}>Explore ideas</button>
    </div> : items.map(({ idea, meta }) => <div className="row" key={idea.id}>
      <div className="badge">{idea.n}</div>
      <div className="grow">
        <h3>{idea.title}</h3>
        <p className="small muted" style={{ margin: "2px 0 6px" }}>{bookById(idea.bookId).title} · {idea.ref}</p>
        <p style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 15 }}>{idea.text.slice(0, 120)}…</p>
        <div className="row-actions">
          <button className="btn btn-ghost" style={{ padding: "7px 14px", fontSize: 14 }} onClick={() => openIdea(idea.bookId, idea.n - 1)}>Open</button>
          <select className="sel" value={meta.collection} onChange={e => move(idea.id, e.target.value)} aria-label="Move to collection">
            {state.collections.map(c => <option key={c}>{c}</option>)}
          </select>
          <button className="iconbtn" style={{ width: 34, height: 34 }} onClick={() => remove(idea.id)} aria-label="Remove from stash"><Icon name="trash" /></button>
        </div>
      </div>
    </div>)}
  </div>;
}

