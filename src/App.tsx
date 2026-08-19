import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpenText,
  ChartLineUp,
  Check,
  CheckCircle,
  Clock,
  Fire,
  Headphones,
  House,
  Microphone,
  PencilLine,
  Play,
  Plus,
  SpeakerHigh,
  Sparkle,
  SquaresFour,
  Translate,
  X,
} from "@phosphor-icons/react";
import { passage, prompts, starterTasks, week, words } from "./data";
import "./App.css";

type View = "today" | "practice" | "lexicon" | "progress";
const nav = [
  ["today", House, "Today"],
  ["practice", SquaresFour, "Practice"],
  ["lexicon", BookOpenText, "Lexicon"],
  ["progress", ChartLineUp, "Progress"],
] as const;

export default function App() {
  const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  const dayKey = new Date().toISOString().slice(0, 10);
  const [view, setView] = useState<View>("today");
  const [completed, setCompleted] = useState<string[]>(() => {
    const saved = JSON.parse(localStorage.getItem("agora-completed") || "{}");
    return saved.date === dayKey ? saved.items : [];
  });
  const [saved, setSaved] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("agora-saved") || "[]"),
  );
  const [mode, setMode] = useState("recall");
  const [showPrompt, setShowPrompt] = useState(false);
  const markDone = (id: string) =>
    setCompleted((x) => (x.includes(id) ? x : [...x, id]));
  const speak = (text: string) => {
    if ("speechSynthesis" in window)
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  };
  useEffect(
    () =>
      localStorage.setItem(
        "agora-completed",
        JSON.stringify({ date: dayKey, items: completed }),
      ),
    [completed, dayKey],
  );
  useEffect(
    () => localStorage.setItem("agora-saved", JSON.stringify(saved)),
    [saved],
  );
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>
            AGORA <small>ENGLISH</small>
          </span>
        </div>
        <div className="profile">
          <div className="avatar">L</div>
          <div>
            <strong>Lin · B2 path</strong>
            <span>Building an independent voice</span>
          </div>
          <button aria-label="Add profile">
            <Plus size={18} />
          </button>
        </div>
        <nav>
          {nav.map(([id, Icon, label]) => (
            <button
              key={id}
              className={view === id ? "nav-item active" : "nav-item"}
              onClick={() => setView(id)}
            >
              <Icon size={20} />
              <span>{label}</span>
              {id === "today" && <b>{Math.min(completed.length, 3)}/3</b>}
            </button>
          ))}
        </nav>
        <div className="sidebar-note">
          <Sparkle size={18} />
          <p>Small, deliberate steps compound.</p>
        </div>
        <div className="sidebar-footer">
          <span>Week 03 · Aegean path</span>
          <div className="progress-line">
            <i style={{ width: `${Math.min(100, 34 + completed.length * 12)}%` }} />
          </div>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div>
            <span className="eyebrow">{today}</span>
            <h1>
              {view === "today"
                ? "A clear mind learns clearly."
                : view[0].toUpperCase() + view.slice(1)}
            </h1>
          </div>
          <div className="top-actions">
            <span className="streak">
              <Fire weight="fill" /> 7 day streak
            </span>
            <button className="icon-button" aria-label="Daily goal">
              <CheckCircle size={22} />
            </button>
            <div className="avatar small">L</div>
          </div>
        </header>
        {view === "today" && (
          <Today
            completed={completed}
            markDone={markDone}
            setView={setView}
            setShowPrompt={setShowPrompt}
          />
        )}{" "}
        {view === "practice" && (
          <Practice
            mode={mode}
            setMode={setMode}
            markDone={markDone}
            speak={speak}
          />
        )}{" "}
        {view === "lexicon" && (
          <Lexicon saved={saved} setSaved={setSaved} speak={speak} />
        )}{" "}
        {view === "progress" && <Progress doneCount={completed.length} />}
        <footer className="mobile-nav">
          {nav.map(([id, Icon, label]) => (
            <button
              key={id}
              className={view === id ? "active" : ""}
              onClick={() => setView(id)}
            >
              <Icon size={22} />
              <span>{label}</span>
            </button>
          ))}
        </footer>
      </main>
      {showPrompt && (
        <div className="modal-backdrop" onClick={() => setShowPrompt(false)}>
          <div className="prompt-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              aria-label="Close reflection"
              onClick={() => setShowPrompt(false)}
            >
              <X size={18} />
            </button>
            <span className="eyebrow">Your daily reflection</span>
            <h2>{prompts.writing}</h2>
            <textarea
              aria-label="Daily reflection"
              placeholder="Start with one honest detail..."
            />
            <button
              className="primary"
              onClick={() => {
                markDone("write");
                setShowPrompt(false);
              }}
            >
              Save reflection <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Today({ completed, markDone, setView, setShowPrompt }: any) {
  return (
    <>
      <section className="hero-grid">
        <div className="hero-card">
          <img src="/images/greek-temple.jpg" />
          <div className="hero-overlay">
            <span className="eyebrow light">TODAY'S FIELD NOTE</span>
            <h2>
              Learn to notice.
              <br />
              <em>Then learn to say it.</em>
            </h2>
            <p>
              A 24-minute loop for reception, retrieval and real expression.
            </p>
            <button className="primary" onClick={() => setView("practice")}>
              Begin today <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="daily-card">
          <span className="eyebrow">DAILY ARC</span>
          <div className="ring">
            <strong>{Math.min(100, completed.length * 33)}%</strong>
            <span>complete</span>
          </div>
          <p>Three small acts. One clearer voice.</p>
          <div className="mini-stat">
            <Clock size={18} />
            <span>
              <b>24 min</b> planned today
            </span>
          </div>
        </div>
      </section>
      <section className="section-head">
        <div>
          <span className="eyebrow">THE LOOP</span>
          <h2>Practice with intention</h2>
        </div>
        <button className="text-button" onClick={() => setView("practice")}>
          View all <ArrowRight size={17} />
        </button>
      </section>
      <section className="task-grid">
        {starterTasks.map((task, i) => (
          <article
            className={
              completed.includes(task.id) ? "task-card complete" : "task-card"
            }
            key={task.id}
          >
            <div className="task-top">
              <span className="task-number">0{i + 1}</span>
              <span className="task-icon">
                {task.icon === "headphones" ? (
                  <Headphones size={20} />
                ) : task.icon === "cards" ? (
                  <SquaresFour size={20} />
                ) : (
                  <Microphone size={20} />
                )}
              </span>
            </div>
            <h3>{task.label}</h3>
            <p>{task.detail}</p>
            <button className="task-action" onClick={() => markDone(task.id)}>
              {completed.includes(task.id) ? (
                <>
                  <Check size={17} /> Done
                </>
              ) : (
                <>
                  Start <ArrowRight size={17} />
                </>
              )}
            </button>
          </article>
        ))}
      </section>
      <section className="lower-grid">
        <article className="reader-card">
          <div className="section-head">
            <div>
              <span className="eyebrow">READER · {passage.level}</span>
              <h2>{passage.title}</h2>
            </div>
            <BookOpenText size={21} />
          </div>
          <p>{passage.body}</p>
          <div className="reader-footer">
            <span>
              <Clock size={16} /> {passage.tag}
            </span>
            <button className="text-button" onClick={() => setView("practice")}>
              Open reader <ArrowRight size={17} />
            </button>
          </div>
        </article>
        <article className="reflection-card">
          <span className="eyebrow">MAKE IT YOURS</span>
          <h2>
            One sentence
            <br />
            <em>worth keeping.</em>
          </h2>
          <p>Turn today's input into a sentence from your own life.</p>
          <button className="secondary" onClick={() => setShowPrompt(true)}>
            <PencilLine size={18} /> Write a reflection
          </button>
        </article>
      </section>
    </>
  );
}

function Practice({ mode, setMode, markDone, speak }: any) {
  const modes = [
    ["recall", "Recall", SquaresFour],
    ["listen", "Listen", Headphones],
    ["speak", "Speak", Microphone],
    ["read", "Read", BookOpenText],
    ["write", "Write", PencilLine],
  ] as const;
  const [card, setCard] = useState(0);
  const [feedback, setFeedback] = useState("");
  const recallWords = words.slice(0, 5);
  const current = recallWords[card % recallWords.length];
  const answer = current.definition;
  const choices = [
    answer,
    ...recallWords
      .filter((x) => x.word !== current.word)
      .slice(0, 3)
      .map((x) => x.definition),
  ].sort();
  const choose = (choice: string) => {
    const correct = choice === answer;
    setFeedback(
      correct
        ? "Exactly. Retrieval makes the phrase easier to reach next time."
        : `Almost. ${current.word} means ${answer}.`,
    );
    if (correct) markDone(`recall-${card}`);
  };
  return (
    <div className="practice-wrap">
      <div className="mode-tabs">
        {modes.map(([id, label, Icon]) => (
          <button
            className={mode === id ? "active" : ""}
            key={id}
            onClick={() => {
              setMode(id);
              setFeedback("");
            }}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>
      <div className="practice-panel">
        <span className="eyebrow">{mode.toUpperCase()} · ADAPTIVE SESSION</span>
        {mode === "recall" && (
          <>
            <div className="practice-progress">
              <span>Retrieval {card + 1} of 5</span>
              <span>{current.level}</span>
            </div>
            <h2>
              What does <em>{current.word}</em> mean here?
            </h2>
            <p className="prompt-copy">{current.example}</p>
            <div className="answer-grid">
              {choices.map((x) => (
                <button key={x} onClick={() => choose(x)}>
                  {x}
                </button>
              ))}
            </div>
            {feedback && (
              <div className="feedback">
                <CheckCircle size={18} />
                <span>{feedback}</span>
                <button
                  onClick={() => {
                    setCard(card + 1);
                    setFeedback("");
                  }}
                >
                  Next card <ArrowRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
        {mode === "listen" && (
          <>
            <h2>
              Listen for the <em>intention</em>.
            </h2>
            <p className="prompt-copy">
              “The pause is not empty. It gives the idea room to arrive.”
            </p>
            <button
              className="play-button"
              onClick={() =>
                speak(
                  "The pause is not empty. It gives the idea room to arrive.",
                )
              }
            >
              <Play weight="fill" size={24} /> Play sentence{" "}
              <SpeakerHigh size={19} />
            </button>
            <button className="primary wide" onClick={() => markDone("listen")}>
              I caught the idea <Check size={18} />
            </button>
          </>
        )}
        {mode === "speak" && (
          <>
            <h2>
              Make a clear <em>connection</em>.
            </h2>
            <p className="prompt-copy">
              Tell us about one habit you are building. Aim for 30 seconds.
            </p>
            <button className="record-button" onClick={() => markDone("speak")}>
              <Microphone size={27} /> Tap to record
            </button>
            <small className="muted">
              Speech recognition works when your browser supports it.
            </small>
          </>
        )}
        {mode === "read" && (
          <>
            <h2>{passage.title}</h2>
            <p className="reading-copy">{passage.body}</p>
            <button className="secondary" onClick={() => speak(passage.body)}>
              <SpeakerHigh size={18} /> Listen to passage
            </button>
          </>
        )}
        {mode === "write" && (
          <>
            <h2>{prompts.writing}</h2>
            <textarea
              className="practice-textarea"
              placeholder="Write freely. Clarity comes after the first draft."
            />
            <button className="primary" onClick={() => markDone("write")}>
              Save response <Check size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Lexicon({ saved, setSaved, speak }: any) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      words.filter(
        (x) =>
          x.word.includes(query.toLowerCase()) ||
          x.definition.toLowerCase().includes(query.toLowerCase()) ||
          x.collocation.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  return (
    <div className="lexicon-wrap">
      <div className="lexicon-intro">
        <div>
          <span className="eyebrow">YOUR LIVING VOCABULARY</span>
          <h2>Words worth returning to.</h2>
        </div>
        <div className="search-box">
          <Translate size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search words, definitions or phrases"
          />
        </div>
      </div>
      <div className="word-list">
        {filtered.map((item) => (
          <article className="word-row" key={item.word}>
            <div>
              <div className="word-title">
                <h3>{item.word}</h3>
                <span>{item.level}</span>
              </div>
              <p>
                {item.phonetic} · {item.definition}
              </p>
              <small>“{item.example}”</small>
              <div className="word-detail">
                <b>{item.collocation}</b>
                <span>{item.nuance}</span>
              </div>
            </div>
            <div className="word-actions">
              <button
                className="icon-button"
                aria-label={`Play ${item.word}`}
                onClick={() => speak(item.word)}
              >
                <SpeakerHigh size={19} />
              </button>
              <button
                className={
                  saved.includes(item.word)
                    ? "save-button saved"
                    : "save-button"
                }
                onClick={() =>
                  setSaved(
                    saved.includes(item.word)
                      ? saved.filter((x: string) => x !== item.word)
                      : [...saved, item.word],
                  )
                }
              >
                {saved.includes(item.word) ? (
                  <Check size={17} />
                ) : (
                  <Plus size={17} />
                )}{" "}
                {saved.includes(item.word) ? "Saved" : "Save"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Progress({ doneCount }: { doneCount: number }) {
  const skills = [
    { label: "Reception", value: 72, Icon: Headphones },
    { label: "Production", value: 48, Icon: Microphone },
    { label: "Interaction", value: 61, Icon: ArrowRight },
    { label: "Mediation", value: 38, Icon: BookOpenText },
  ];
  return (
    <div className="progress-wrap">
      <div className="progress-header">
        <div>
          <span className="eyebrow">YOUR PRACTICE WEATHER</span>
          <h2>Consistency creates fluency.</h2>
        </div>
        <span className="goal-chip">
          <Fire weight="fill" /> 7 days
        </span>
      </div>
      <div className="chart-card">
        <div className="chart-title">
          <span>This week</span>
          <strong>{126 + doneCount * 8} min</strong>
        </div>
        <div className="bars">
          {week.map((x) => (
            <div className="bar-col" key={x.day}>
              <div
                className="bar"
                style={{ height: `${Math.max(8, x.minutes * 2.2)}px` }}
              />
              <span>{x.day}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-grid">
        {skills.map(({ label, value, Icon }) => (
          <div className="skill-row" key={label}>
            <span className="skill-icon">
              <Icon size={18} />
            </span>
            <div>
              <strong>{label}</strong>
              <div className="skill-track">
                <i style={{ width: `${value}%` }} />
              </div>
            </div>
            <b>{value}%</b>
          </div>
        ))}
      </div>
    </div>
  );
}
