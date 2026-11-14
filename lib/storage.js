/* Reader data lives ONLY in the reader's own browser (localStorage).
   Nothing is sent to any server. Everything read back is validated,
   because localStorage can be edited or corrupted. */
import { useState, useEffect, useCallback } from "react";
import { ideaById, bookById, AVAILABLE } from "../data/books";

const LS_KEY = "ft-reader-v1";
export const LIMITS = { text: 4000, collections: 30, collectionName: 40 };

const DEFAULT_STATE = {
  completed: {}, saved: {}, collections: ["Favourites"], journal: {},
  position: {}, lastBook: AVAILABLE[0].id, theme: "system", updatedAt: 0
};

const isObj = v => v && typeof v === "object" && !Array.isArray(v);
const num = v => (typeof v === "number" && isFinite(v) ? v : 0);
const str = (v, max) => (typeof v === "string" ? v.slice(0, max) : "");

/* Accept only known ids and well-formed values; drop everything else. */
export function sanitize(raw) {
  const s = { ...DEFAULT_STATE, collections: [...DEFAULT_STATE.collections] };
  if (!isObj(raw)) return s;

  if (Array.isArray(raw.collections)) {
    const cols = raw.collections
      .map(c => str(c, LIMITS.collectionName).trim())
      .filter(Boolean);
    s.collections = Array.from(new Set(["Favourites", ...cols])).slice(0, LIMITS.collections);
  }
  if (isObj(raw.completed)) {
    for (const [id, t] of Object.entries(raw.completed)) if (ideaById(id)) s.completed[id] = num(t) || 1;
  }
  if (isObj(raw.saved)) {
    for (const [id, m] of Object.entries(raw.saved)) {
      if (!ideaById(id) || !isObj(m)) continue;
      const col = s.collections.includes(m.collection) ? m.collection : "Favourites";
      s.saved[id] = { collection: col, at: num(m.at) };
    }
  }
  if (isObj(raw.journal)) {
    for (const [id, j] of Object.entries(raw.journal)) {
      if (!ideaById(id) || !isObj(j)) continue;
      s.journal[id] = { thought: str(j.thought, LIMITS.text), response: str(j.response, LIMITS.text), at: num(j.at) };
    }
  }
  if (isObj(raw.position)) {
    for (const [bid, i] of Object.entries(raw.position)) {
      const b = bookById(bid);
      if (b && Number.isInteger(i) && i >= 0 && i < b.ideas.length) s.position[bid] = i;
    }
  }
  const lb = bookById(raw.lastBook);
  if (lb && lb.status === "available") s.lastBook = lb.id;
  if (["system", "light", "dark"].includes(raw.theme)) s.theme = raw.theme;
  s.updatedAt = num(raw.updatedAt);
  return s;
}

function loadLocal() {
  try { return sanitize(JSON.parse(localStorage.getItem(LS_KEY))); }
  catch (e) { return sanitize(null); }
}
function saveLocal(s) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(s)); return true; }
  catch (e) { return false; }
}

export function useReaderState() {
  const [state, setState] = useState(() => loadLocal());

  // Keep several open tabs in step with each other.
  useEffect(() => {
    const onStorage = e => { if (e.key === LS_KEY) setState(loadLocal()); };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const update = useCallback(fn => {
    setState(prev => {
      const next = sanitize({ ...fn(prev), updatedAt: Date.now() });
      saveLocal(next);
      return next;
    });
  }, []);
  return [state, update];
}

/* Reader-controlled backup: downloads their own data as a JSON file. */
export function exportData(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "future-tense-reading-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function clearAllData() {
  try { localStorage.removeItem(LS_KEY); } catch (e) {}
}
