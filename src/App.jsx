import { useState } from "react";
import {
  Heart,
  LockKeyhole,
  Mail,
  Sparkles,
  ArrowRight,
  Stars,
} from "lucide-react";

import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import "./App.css";

export default function App() {
  const [stage, setStage] = useState("welcome");
  const [chapter, setChapter] = useState(1);

  // Chapter 2
  if (chapter === 2) {
  return (
    <Chapter2
      onBack={() => setChapter(1)}
      onNext={() => setChapter(3)}
    />
  );
}

if (chapter === 3) {
  return (
    <Chapter3
      onBack={() => setChapter(2)}
      onNext={() => setChapter(4)}
    />
  );
}
if (chapter === 4) {
  return (
    <Chapter4
      onBack={() => setChapter(3)}
      onNext={() => setChapter(5)}
    />
  );
}

if (chapter === 5) {
  return <Chapter5 onBack={() => setChapter(4)} />;
}

  // Chapter 1: Welcome screen
  if (stage === "welcome") {
    return (
      <main className="app">
        <div className="floating-heart heart-one">♡</div>
        <div className="floating-heart heart-two">♥</div>
        <div className="floating-heart heart-three">✦</div>

        <section className="welcome-card">
          <div className="top-decoration">
            <Sparkles size={17} />
            <span>A LITTLE WORLD MADE FOR YOU</span>
            <Sparkles size={17} />
          </div>

          <div className="envelope">
            <Mail size={54} strokeWidth={1.2} />
            <Heart
              className="envelope-heart"
              size={25}
              fill="currentColor"
            />
          </div>

          <p className="welcome-label">A story close to my heart</p>

          <h1>Life of Us</h1>

          <p className="welcome-subtitle">Our Love Story ♡</p>

          <div className="welcome-divider">
            <span />
            <Heart size={16} fill="currentColor" />
            <span />
          </div>

          <p className="welcome-message">
            Every love story is beautiful, but this one
            is my favourite.
          </p>

          <p className="welcome-description">
            A little journey through our memories,
            silly moments, unexpected meetings, and
            a love that grew without us even noticing.
          </p>

          <div className="fake-login">
            <div className="fake-login-heading">
              <LockKeyhole size={18} />
              <span>Enter Our Little World</span>
            </div>

            <p>
              Hmm… looks like you need special permission
              to enter. 🤭
            </p>

            <button
              className="primary-button"
              onClick={() => setStage("surprise")}
            >
              Log In
              <ArrowRight size={17} />
            </button>

            <p className="tiny-note">
              Don't worry, this is just our little surprise. ♡
            </p>
          </div>

          <div className="welcome-footer">
            <Stars size={14} />
            <span>made with love, just for you</span>
            <Stars size={14} />
          </div>
        </section>
      </main>
    );
  }

  // Chapter 1: Funny fake-login surprise
  if (stage === "surprise") {
    return (
      <main className="app">
        <div className="floating-heart heart-one">♡</div>
        <div className="floating-heart heart-two">♥</div>
        <div className="floating-heart heart-three">✦</div>

        <section className="welcome-card surprise-card">
          <div className="surprise-emoji">😂💗</div>

          <p className="welcome-label">ACCESS GRANTED!</p>

          <h1>Wait… You Actually Tried? 🤭</h1>

          <div className="welcome-divider">
            <span />
            <Heart size={16} fill="currentColor" />
            <span />
          </div>

          <p className="welcome-message">
            Silly you! You don't need a password to enter
            my little world.
          </p>

          <p className="welcome-description">
            By clicking that button, you've already entered.
            Your entry was approved before you even arrived. ❤️
          </p>

          <p className="surprise-bottom">
            Some people need a password. You just need to
            be you. 🥹
          </p>

          <button
            className="primary-button"
            onClick={() => setStage("inside")}
          >
            Okay, let's go!
            <Heart size={17} fill="currentColor" />
          </button>
        </section>
      </main>
    );
  }

  // Chapter 1: Inside our little world
  return (
    <main className="app">
      <div className="floating-heart heart-one">♡</div>
      <div className="floating-heart heart-two">♥</div>
      <div className="floating-heart heart-three">✦</div>

      <section className="welcome-card inside-card">
        <div className="surprise-emoji">💌</div>

        <p className="welcome-label">YOU'RE FINALLY HERE</p>

        <h1>Our Little World</h1>

        <p className="welcome-subtitle">
          Just you, me, and our memories. ♡
        </p>

        <div className="welcome-divider">
          <span />
          <Heart size={16} fill="currentColor" />
          <span />
        </div>

        <p className="welcome-message">
          Before we knew it, two classmates were becoming
          two people who meant so much to each other.
        </p>

        <p className="welcome-description">
          Ready to go back to where our story began?
          Let's turn the first page together. ❤️
        </p>

        <button
          className="primary-button"
          onClick={() => setChapter(2)}
        >
          Begin Our Story
          <ArrowRight size={17} />
        </button>

        <div className="welcome-footer">
          <Stars size={14} />
          <span>one story, countless little moments</span>
          <Stars size={14} />
        </div>
      </section>
    </main>
  );
}